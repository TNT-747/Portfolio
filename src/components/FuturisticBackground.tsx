import { useRef, useEffect, useState } from 'react';
import { useMousePosition } from '../hooks/useMousePosition';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  
  update(canvasWidth: number, canvasHeight: number): void;
  draw(ctx: CanvasRenderingContext2D): void;
  updateColor(isDarkMode: boolean): void;
}

class ParticleImpl implements Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  darkColors: string[];
  lightColors: string[];
  
  constructor(canvasWidth: number, canvasHeight: number) {
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;
    this.size = Math.random() * 3 + 0.5;
    this.speedX = Math.random() * 1 - 0.5;
    this.speedY = Math.random() * 1 - 0.5;
    
    // Color palettes for dark and light modes
    this.darkColors = [
      '#5EEAD4', // cyan
      '#9F7AEA', // purple
      '#60A5FA', // blue
      '#7DD3FC', // light blue
    ];
    
    this.lightColors = [
      '#0891B2', // dark cyan
      '#7E22CE', // dark purple
      '#1D4ED8', // dark blue
      '#0369A1', // dark blue-cyan
    ];
    
    // Default to dark mode colors
    this.color = this.darkColors[Math.floor(Math.random() * this.darkColors.length)];
  }
  
  update(canvasWidth: number, canvasHeight: number) {
    this.x += this.speedX;
    this.y += this.speedY;
    
    // Wrap around edges
    if (this.x < 0) this.x = canvasWidth;
    if (this.x > canvasWidth) this.x = 0;
    if (this.y < 0) this.y = canvasHeight;
    if (this.y > canvasHeight) this.y = 0;
  }
  
  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }
  
  updateColor(isDarkMode: boolean) {
    const colorArray = isDarkMode ? this.darkColors : this.lightColors;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
  }
}

const FuturisticBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useMousePosition();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  
  // Check and track dark mode
  useEffect(() => {
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setIsDarkMode(isDark);
      
      // Update particle colors
      if (particles.length > 0) {
        particles.forEach(particle => particle.updateColor(isDark));
      }
    };
    
    // Check initially
    checkDarkMode();
    
    // Setup observer to detect theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'class'
        ) {
          checkDarkMode();
        }
      });
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
    
    return () => {
      observer.disconnect();
    };
  }, [particles]);
  
  // Canvas setup and animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas to full screen size
    const resize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    
    window.addEventListener('resize', resize);
    resize();
    
    // Particle system
    const particleCount = 80;
    const newParticles: Particle[] = [];
    
    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      const particle = new ParticleImpl(canvas.width, canvas.height);
      particle.updateColor(isDarkMode);
      newParticles.push(particle);
    }
    
    setParticles(newParticles);
    
    // Function to draw connections between particles
    const connect = (particle1: Particle, particle2: Particle) => {
      const dx = particle1.x - particle2.x;
      const dy = particle1.y - particle2.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      const maxDistance = 150;
      
      if (distance < maxDistance) {
        // Adjust connection color based on theme
        const connectionColor = isDarkMode 
          ? `rgba(59, 130, 246, ${0.2 * (1 - distance / maxDistance)})` 
          : `rgba(29, 78, 216, ${0.2 * (1 - distance / maxDistance)})`;
          
        ctx.strokeStyle = connectionColor;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(particle1.x, particle1.y);
        ctx.lineTo(particle2.x, particle2.y);
        ctx.stroke();
      }
    };
    
    // Animation loop
    const animate = () => {
      if (!canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      for (let i = 0; i < newParticles.length; i++) {
        newParticles[i].update(canvas.width, canvas.height);
        newParticles[i].draw(ctx);
        
        // Connect particles
        for (let j = i + 1; j < newParticles.length; j++) {
          connect(newParticles[i], newParticles[j]);
        }
      }
      
      requestAnimationFrame(animate);
    };
    
    // Start animation
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, [isDarkMode]);
  
  // Apply parallax effect based on mouse position
  useEffect(() => {
    if (!containerRef.current) return;
    
    const { clientX, clientY } = mousePosition;
    const x = clientX / window.innerWidth;
    const y = clientY / window.innerHeight;
    
    // Apply parallax effect to the grid and particles
    if (containerRef.current) {
      containerRef.current.style.setProperty('--mouse-x', `${x}`);
      containerRef.current.style.setProperty('--mouse-y', `${y}`);
    }
  }, [mousePosition]);
  
  return (
    <div 
      className={`futuristic-background ${!isDarkMode ? 'light-theme' : ''}`} 
      ref={containerRef}
    >
      <canvas ref={canvasRef} className="particles-canvas"></canvas>
      <div className="grid-overlay"></div>
      <div className="glow-horizon"></div>
    </div>
  );
};

export default FuturisticBackground; 