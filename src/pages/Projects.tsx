import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const content = {
  en: {
    myProjects: "Featured Projects",
    subtitle: "Real-world applications built with modern technologies",
    viewLive: "Live Demo",
    viewCode: "View Code",
    projects: [
      {
        id: 1,
        title: "Water Quality Management System",
        problem: "Inefficient manual water quality monitoring led to delayed detection of contamination risks",
        role: "Full-Stack Developer - Led end-to-end development",
        description: "Built a comprehensive monitoring platform with predictive analytics and real-time alerts for water quality parameters.",
        techStack: ["React.js", "Django REST", "PostgreSQL", "JWT Auth", "AI/ML"],
        results: [
          "Reduced monitoring time by 60%",
          "Automated 15+ quality parameters tracking",
          "Integrated OpenWeatherMap API for predictive analytics"
        ],
        image: "/images/projects/Water Quality Management System.jpeg",
        period: "Aug 2025 – Sep 2025",
        github: "https://github.com/TNT-747",
        liveDemo: "#",
        featured: true
      },
      {
        id: 2,
        title: "E-Commerce Platform",
        problem: "Small businesses needed an affordable, production-ready online store solution",
        role: "Backend Developer - Architected payment integration & APIs",
        description: "Full-featured e-commerce platform with product catalog, cart management, and secure payment processing.",
        techStack: ["Java", "Spring Boot", "Spring Data JPA", "Bootstrap", "PayPal API"],
        results: [
          "Handled 100+ concurrent users",
          "Implemented secure PayPal payment gateway",
          "Built RESTful APIs with 99.5% uptime",
          "Optimized database queries reducing load time by 40%"
        ],
        image: "/images/projects/E-Commerce Website.jpeg",
        period: "May 2025 – Jul 2025",
        github: "https://github.com/TNT-747",
        liveDemo: "#",
        featured: true
      },
      {
        id: 3,
        title: "Banking Management System",
        problem: "Financial institutions needed a secure, scalable system for transaction management",
        role: "Backend Engineer - Designed architecture & security layer",
        description: "Robust banking system with account management, transaction processing, and comprehensive audit trails.",
        techStack: ["Java", "Spring Boot", "Spring Security", "MySQL", "REST APIs"],
        results: [
          "Processed 500+ daily transactions",
          "Implemented JWT-based authentication",
          "Built role-based access control (RBAC)",
          "Achieved zero security breaches in testing"
        ],
        image: "/images/projects/Banking Management System.jpeg",
        period: "Jun 2025 – Jun 2025",
        github: "https://github.com/TNT-747",
        liveDemo: "#",
        featured: true
      },
      {
        id: 4,
        title: "Cloud CDN with Azure",
        problem: "Slow content delivery and limited global reach for web applications",
        role: "DevOps Engineer - Configured Azure CDN infrastructure",
        description: "Deployed and optimized a Content Delivery Network on Microsoft Azure to enhance performance and availability.",
        techStack: ["Azure CDN", "Azure Storage", "DNS Management", "SSL/TLS"],
        results: [
          "Improved page load time by 70%",
          "Enabled global content distribution",
          "Configured DDoS protection and security policies"
        ],
        image: "/images/projects/Cloud CDN with Azure.jpeg",
        period: "May 2025",
        github: "https://github.com/TNT-747",
        featured: false
      },
      {
        id: 5,
        title: "Restaurant Management System",
        problem: "Manual restaurant operations caused order errors and slow service",
        role: "Full-Stack Developer",
        description: "Web application for managing menus, orders, billing, and reservations with real-time updates.",
        techStack: ["C#", "ASP.NET", "React.js", "SQL Server", "SignalR"],
        results: [
          "Reduced order errors by 85%",
          "Automated billing and inventory tracking",
          "Real-time order status updates"
        ],
        image: "/images/projects/Restaurant Management Web Application.jpeg",
        period: "Dec 2024 – Jan 2025",
        github: "https://github.com/TNT-747",
        featured: false
      }
    ]
  },
  fr: {
    myProjects: "Projets Phares",
    subtitle: "Applications réelles construites avec des technologies modernes",
    viewLive: "Démo en direct",
    viewCode: "Voir le code",
    projects: [
      {
        id: 1,
        title: "Système de gestion de la qualité de l'eau",
        problem: "La surveillance manuelle de la qualité de l'eau entraînait des retards dans la détection des risques de contamination",
        role: "Développeur Full-Stack - Direction du développement de bout en bout",
        description: "Plateforme de surveillance complète avec analyses prédictives et alertes en temps réel pour les paramètres de qualité de l'eau.",
        techStack: ["React.js", "Django REST", "PostgreSQL", "JWT Auth", "AI/ML"],
        results: [
          "Réduction du temps de surveillance de 60%",
          "Automatisation du suivi de 15+ paramètres de qualité",
          "Intégration de l'API OpenWeatherMap pour l'analyse prédictive"
        ],
        image: "/images/projects/Water Quality Management System.jpeg",
        period: "Août 2025 – Sep 2025",
        github: "https://github.com/TNT-747",
        liveDemo: "#",
        featured: true
      },
      {
        id: 2,
        title: "Plateforme E-Commerce",
        problem: "Les petites entreprises avaient besoin d'une solution de boutique en ligne abordable et prête pour la production",
        role: "Développeur Backend - Architecture de l'intégration des paiements et des API",
        description: "Plateforme e-commerce complète avec catalogue de produits, gestion du panier et traitement sécurisé des paiements.",
        techStack: ["Java", "Spring Boot", "Spring Data JPA", "Bootstrap", "API PayPal"],
        results: [
          "Gestion de 100+ utilisateurs simultanés",
          "Mise en œuvre de la passerelle de paiement PayPal sécurisée",
          "Construction d'API RESTful avec 99,5% de disponibilité",
          "Optimisation des requêtes de base de données réduisant le temps de chargement de 40%"
        ],
        image: "/images/projects/E-Commerce Website.jpeg",
        period: "Mai 2025 – Juil 2025",
        github: "https://github.com/TNT-747",
        liveDemo: "#",
        featured: true
      },
      {
        id: 3,
        title: "Système de gestion bancaire",
        problem: "Les institutions financières avaient besoin d'un système sécurisé et évolutif pour la gestion des transactions",
        role: "Ingénieur Backend - Conception de l'architecture et de la couche de sécurité",
        description: "Système bancaire robuste avec gestion des comptes, traitement des transactions et pistes d'audit complètes.",
        techStack: ["Java", "Spring Boot", "Spring Security", "MySQL", "API REST"],
        results: [
          "Traitement de 500+ transactions quotidiennes",
          "Mise en œuvre de l'authentification JWT",
          "Construction du contrôle d'accès basé sur les rôles (RBAC)",
          "Aucune faille de sécurité lors des tests"
        ],
        image: "/images/projects/Banking Management System.jpeg",
        period: "Juin 2025",
        github: "https://github.com/TNT-747",
        liveDemo: "#",
        featured: true
      },
      {
        id: 4,
        title: "CDN Cloud avec Azure",
        problem: "Livraison de contenu lente et portée mondiale limitée pour les applications web",
        role: "Ingénieur DevOps - Configuration de l'infrastructure Azure CDN",
        description: "Déploiement et optimisation d'un réseau de diffusion de contenu sur Microsoft Azure pour améliorer les performances et la disponibilité.",
        techStack: ["Azure CDN", "Azure Storage", "Gestion DNS", "SSL/TLS"],
        results: [
          "Amélioration du temps de chargement des pages de 70%",
          "Distribution de contenu mondiale activée",
          "Configuration de la protection DDoS et des politiques de sécurité"
        ],
        image: "/images/projects/Cloud CDN with Azure.jpeg",
        period: "Mai 2025",
        github: "https://github.com/TNT-747",
        featured: false
      },
      {
        id: 5,
        title: "Système de gestion de restaurant",
        problem: "Les opérations manuelles du restaurant causaient des erreurs de commande et un service lent",
        role: "Développeur Full-Stack",
        description: "Application web pour la gestion des menus, des commandes, de la facturation et des réservations avec mises à jour en temps réel.",
        techStack: ["C#", "ASP.NET", "React.js", "SQL Server", "SignalR"],
        results: [
          "Réduction des erreurs de commande de 85%",
          "Automatisation de la facturation et du suivi des stocks",
          "Mises à jour en temps réel du statut des commandes"
        ],
        image: "/images/projects/Restaurant Management Web Application.jpeg",
        period: "Déc 2024 – Jan 2025",
        github: "https://github.com/TNT-747",
        featured: false
      }
    ]
  }
};

const Projects = () => {
  const { language } = useLanguage();
  const { myProjects, subtitle, viewLive, viewCode, projects } = content[language];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section className="relative py-20 min-h-screen">
      {/* Decorative Background */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary-400/5 rounded-full blur-2xl animate-float pointer-events-none" style={{ willChange: 'transform' }}></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent-400/5 rounded-full blur-2xl animate-float pointer-events-none" style={{ animationDelay: '3s', willChange: 'transform' }}></div>
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="section-title mb-3">{myProjects}</h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">{subtitle}</p>
        </motion.div>

        {/* Featured Projects - Case Study Format */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-16 mb-20"
        >
          {featuredProjects.map((project, index) => (
            <motion.div 
              key={project.id} 
              variants={item} 
              className="card overflow-hidden"
            >
              <div className={`grid md:grid-cols-2 gap-6 ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                {/* Project Image */}
                <div className={`relative h-64 md:h-full ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover" 
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-primary">
                      <svg className="w-20 h-20 text-white opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                </div>

                {/* Project Details */}
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="text-xs font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wide">
                      {project.period}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold mt-2 mb-3 text-gray-900 dark:text-gray-100">
                      {project.title}
                    </h3>
                  </div>

                  {/* Problem */}
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 flex items-center gap-2">
                      <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      Problem
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 italic">{project.problem}</p>
                  </div>

                  {/* Role */}
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 flex items-center gap-2">
                      <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      My Role
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{project.role}</p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Results */}
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      Results
                    </p>
                    <ul className="space-y-1.5">
                      {project.results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                      <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                      Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-3 py-1 text-xs font-semibold bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3">
                    {project.liveDemo && project.liveDemo !== '#' && (
                      <a 
                        href={project.liveDemo} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-primary text-sm"
                      >
                        {viewLive}
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-outline text-sm"
                      >
                        {viewCode}
                        <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Projects - Compact Grid */}
        {otherProjects.length > 0 && (
          <>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-900 dark:text-gray-100"
            >
              {language === 'en' ? 'More Projects' : 'Autres Projets'}
            </motion.h2>
            
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {otherProjects.map((project) => (
                <motion.div 
                  key={project.id} 
                  variants={item} 
                  className="card group hover:scale-[1.02] transition-transform duration-300"
                >
                  {project.image && (
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    </div>
                  )}
                  
                  <div className="p-6">
                    <span className="text-xs font-semibold text-primary-600 dark:text-primary-400">{project.period}</span>
                    <h3 className="text-xl font-bold mt-2 mb-3 text-gray-900 dark:text-gray-100">{project.title}</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span 
                          key={tech} 
                          className="px-2.5 py-1 text-xs font-semibold bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center text-sm font-semibold text-primary-600 dark:text-primary-400 hover:underline"
                      >
                        {viewCode}
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;
