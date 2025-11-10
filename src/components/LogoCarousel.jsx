import React from 'react';
import './LogoCarousel.css';

const logos = [
  "/images/logos/ABHOER-Concours-Emploi-Recrutement.png",
  "/images/logos/alx-application-logo.webp",
  "images/logos/ofppt-logo-png_seeklogo-258728.png",
  "/images/logos/logo-emsi-entry.png",
  "/images/logos/logo-encg-beni-mellal.png",
];

const LogoCarousel = () => {
  const duplicatedLogos = [...logos, ...logos]; // Duplicate logos for a seamless loop

  return (
    <div className="logo-carousel-container">
      <div className="logo-carousel-track">
        {duplicatedLogos.map((logo, index) => (
          <div className="logo-item" key={index}>
            <img src={logo} alt={`Logo ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;
