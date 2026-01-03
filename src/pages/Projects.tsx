import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const content = {
  en: {
    myProjects: "My Projects",
    viewProject: "View Project",
    projects: [
      {
        id: 1,
        title: "Water Quality Management System",
        description: "A comprehensive water quality monitoring and prediction system featuring a React.js and Tailwind CSS frontend, and a Django REST Framework backend with secure JWT authentication.",
        image: "/images/projects/Water Quality Management System.jpeg",
        tags: ["React.js", "Django", "Tailwind CSS", "JWT"],
        period: "Aug 2025 – Sep 2025",
        github: "https://github.com/TNT-747"
      },
      {
        id: 2,
        title: "E-Commerce Website",
        description: "Developed a full-featured e-commerce platform with a product catalog, shopping cart, order management, and payment simulation, following MVC architecture and Agile methodology.",
        image: "/images/projects/E-Commerce Website.jpeg",
        tags: ["Java", "Spring Boot", "Spring Data", "Bootstrap", "PayPal"],
        period: "May 2025 – Jul 2025",
        github: "https://github.com/TNT-747"
      },
      {
        id: 3,
        title: "Banking Management System",
        description: "Designed and developed a robust banking system supporting account creation, deposits/withdrawals, transaction history, and REST APIs secured with Spring Security.",
        image: "/images/projects/Banking Management System.jpeg",
        tags: ["Java", "Spring Boot", "Spring Data", "REST APIs", "Spring Security"],
        period: "Jun 2025 – Jun 2025",
        github: "https://github.com/TNT-747"
      },
      {
        id: 4,
        title: "Android Bus Ticket Application",
        description: "An Android mobile application for booking and managing bus tickets, with features like seat selection and local database support for offline access.",
        tags: ["Android", "Java", "SQLite"],
        period: "Apr 2025 – May 2025",
        github: "https://github.com/TNT-747"
      },
      {
        id: 5,
        title: "Cloud CDN with Azure",
        description: "Configured and deployed a Content Delivery Network (CDN) on Microsoft Azure to enhance performance and availability, with integrated security policies for protection.",
        image: "/images/projects/Cloud CDN with Azure.jpeg",
        tags: ["Azure", "CDN", "DevOps", "Cloud"],
        period: "May 2025 – May 2025",
        github: "https://github.com/TNT-747"
      },
      {
        id: 6,
        title: "Virtualization with Master/Slave Communication",
        description: "Designed and deployed a virtualized infrastructure with Master/Slave communication, ensuring synchronization and fault-tolerance through rigorous testing.",
        image: "/images/projects/Virtualization with Master Slave Communication.jpeg",
        tags: ["Virtualization", "VMware", "Networking", "System Administration"],
        period: "May 2025 – May 2025",
        github: "https://github.com/TNT-747"
      },
      {
        id: 7,
        title: "Dental Clinic Management Desktop Application",
        description: "A Java Swing application for managing patient records, appointment scheduling, billing, and treatment tracking, with file-based data persistence.",
        image: "/images/projects/Dental Clinic Management Desktop Application.jpeg",
        tags: ["Java", "Swing"],
        period: "Dec 2024 – Jan 2025",
        github: "https://github.com/TNT-747"
      },
      {
        id: 8,
        title: "Restaurant Management Web Application",
        description: "A web application with a C# .NET backend and React frontend for managing menus, orders, billing, and reservations, integrated with SQL Server.",
        image: "/images/projects/Restaurant Management Web Application.jpeg",
        tags: ["C#", "ASP.NET", "React.js", "SQL Server"],
        period: "Dec 2024 – Jan 2025",
        github: "https://github.com/TNT-747"
      },
      {
        id: 9,
        title: "ENCG Website",
        description: "Developed and optimized a schedule and timetable management platform with improved database handling and dynamic user interfaces.",
        image: "/images/projects/ENCG Website.jpeg",
        tags: ["Web Development", "Database", "UI/UX"],
        period: "Aug 2024 – Sep 2024",
        github: "https://github.com/TNT-747"
      },
      {
        id: 10,
        title: "Restaurant Management System (Python & Eel)",
        description: "A restaurant management system using Python and Eel, featuring menu management, order processing, billing, reservations, and local data persistence.",
        image: "/images/projects/Restaurant Management System (Python & Eel).jpeg",
        tags: ["Python", "Eel", "Data Management"],
        period: "May 2024 – Jul 2024",
        github: "https://github.com/TNT-747"
      },
      {
        id: 11,
        title: "Invoice Management System",
        description: "A C++ application to manage invoices, products, and clients, built with OOP principles and featuring invoice calculations and file-based storage.",
        tags: ["C++", "OOP", "File Management"],
        period: "Dec 2023 – Dec 2023",
        github: "https://github.com/TNT-747"
      },
      {
        id: 12,
        title: "Amusement Park Management System",
        description: "A C++ system for amusement park management, utilizing inheritance and polymorphism, with features like CSV export and game tracking.",
        tags: ["C++", "OOP", "STL", "CSV Export"],
        github: "https://github.com/TNT-747"
      },
    ],
  },
  fr: {
    myProjects: "Mes projets",
    viewProject: "Voir le projet",
    projects: [
      {
        id: 1,
        title: "Système de gestion de la qualité de l\'eau",
        description: "Un système complet de surveillance et de prédiction de la qualité de l\'eau doté d\'un frontend React.js et Tailwind CSS, et d\'un backend Django REST Framework avec authentification JWT sécurisée.",
        image: "/images/projects/Water Quality Management System.jpeg",
        tags: ["React.js", "Django", "Tailwind CSS", "JWT"],
        period: "Août 2025 – Sept 2025",
        github: "https://github.com/TNT-747"
      },
      {
        id: 2,
        title: "Site E-Commerce",
        description: "Développement d\'une plateforme de commerce électronique complète avec un catalogue de produits, un panier d\'achat, une gestion des commandes et une simulation de paiement, en suivant l\'architecture MVC et la méthodologie Agile.",
        image: "/images/projects/E-Commerce Website.jpeg",
        tags: ["Java", "Spring Boot", "Spring Data", "Bootstrap", "PayPal"],
        period: "Mai 2025 – Juil 2025",
        github: "https://github.com/TNT-747"
      },
      {
        id: 3,
        title: "Système de gestion bancaire",
        description: "Conception et développement d\'un système bancaire robuste prenant en charge la création de comptes, les dépôts/retraits, l\'historique des transactions et les API REST sécurisées avec Spring Security.",
        image: "/images/projects/Banking Management System.jpeg",
        tags: ["Java", "Spring Boot", "Spring Data", "REST APIs", "Spring Security"],
        period: "Juin 2025 – Juin 2025",
        github: "https://github.com/TNT-747"
      },
      {
        id: 4,
        title: "Application Android de billetterie de bus",
        description: "Une application mobile Android pour la réservation et la gestion de billets de bus, avec des fonctionnalités telles que la sélection de siège et la prise en charge de la base de données locale pour un accès hors ligne.",
        tags: ["Android", "Java", "SQLite"],
        period: "Avr 2025 – Mai 2025",
        github: "https://github.com/TNT-747"
      },
      {
        id: 5,
        title: "CDN Cloud avec Azure",
        description: "Configuration et déploiement d\'un réseau de diffusion de contenu (CDN) sur Microsoft Azure pour améliorer les performances et la disponibilité, avec des politiques de sécurité intégrées pour la protection.",
        image: "/images/projects/Cloud CDN with Azure.jpeg",
        tags: ["Azure", "CDN", "DevOps", "Cloud"],
        period: "Mai 2025 – Mai 2025",
        github: "https://github.com/TNT-747"
      },
      {
        id: 6,
        title: "Virtualisation avec communication maître/esclave",
        description: "Conception et déploiement d\'une infrastructure virtualisée avec communication Maître/Esclave, garantissant la synchronisation et la tolérance aux pannes grâce à des tests rigoureux.",
        image: "/images/projects/Virtualization with Master Slave Communication.jpeg",
        tags: ["Virtualisation", "VMware", "Réseautage", "Administration système"],
        period: "Mai 2025 – Mai 2025",
        github: "https://github.com/TNT-747"
      },
      {
        id: 7,
        title: "Application de bureau de gestion de clinique dentaire",
        description: "Une application Java Swing pour la gestion des dossiers patients, la planification des rendez-vous, la facturation et le suivi des traitements, avec persistance des données basée sur des fichiers.",
        image: "/images/projects/Dental Clinic Management Desktop Application.jpeg",
        tags: ["Java", "Swing"],
        period: "Déc 2024 – Jan 2025",
        github: "https://github.com/TNT-747"
      },
      {
        id: 8,
        title: "Application Web de gestion de restaurant",
        description: "Une application Web avec un backend C# .NET et un frontend React pour la gestion des menus, des commandes, de la facturation et des réservations, intégrée à SQL Server.",
        image: "/images/projects/Restaurant Management Web Application.jpeg",
        tags: ["C#", "ASP.NET", "React.js", "SQL Server"],
        period: "Déc 2024 – Jan 2025",
        github: "https://github.com/TNT-747"
      },
      {
        id: 9,
        title: "Site Web ENCG",
        description: "Développement et optimisation d\'une plateforme de gestion des emplois du temps et des horaires avec une gestion de base de données améliorée and des interfaces utilisateur dynamiques.",
        image: "/images/projects/ENCG Website.jpeg",
        tags: ["Développement Web", "Base de données", "UI/UX"],
        period: "Août 2024 – Sept 2024",
        github: "https://github.com/TNT-747"
      },
      {
        id: 10,
        title: "Système de gestion de restaurant (Python & Eel)",
        description: "Un système de gestion de restaurant utilisant Python et Eel, avec gestion de menu, traitement des commandes, facturation, réservations et persistance des données locales.",
        image: "/images/projects/Restaurant Management System (Python & Eel).jpeg",
        tags: ["Python", "Eel", "Gestion des données"],
        period: "Mai 2024 – Juil 2024",
        github: "https://github.com/TNT-747"
      },
      {
        id: 11,
        title: "Système de gestion de factures",
        description: "Une application C++ pour gérer les factures, les produits et les clients, construite avec les principes de la POO et proposant des calculs de factures et un stockage basé sur des fichiers.",
        tags: ["C++", "POO", "Gestion de fichiers"],
        period: "Déc 2023 – Déc 2023",
        github: "https://github.com/TNT-747"
      },
      {
        id: 12,
        title: "Système de gestion de parc d\'attractions",
        description: "Un système C++ pour la gestion d\'un parc d\'attractions, utilisant l\'héritage et le polymorphisme, avec des fonctionnalités telles que l\'exportation CSV et le suivi des jeux.",
        tags: ["C++", "POO", "STL", "Exportation CSV"],
        github: "https://github.com/TNT-747"
      },
    ],
  },
};

const Projects = () => {
  const { language } = useLanguage();
  const { myProjects, projects } = content[language];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="relative py-20 min-h-screen">
      {/* Decorative Background */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary-400/5 rounded-full blur-2xl animate-float pointer-events-none" style={{ willChange: 'transform' }}></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent-400/5 rounded-full blur-2xl animate-float pointer-events-none" style={{ animationDelay: '3s', willChange: 'transform' }}></div>
      
      <div className="container relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title text-center mb-16"
        >
          {myProjects}
        </motion.h1>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id} 
              variants={item} 
              className="card group flex flex-col overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              {/* Project Image/Header */}
              <div className="relative h-56 bg-gradient-to-br from-primary-500/20 to-accent-500/20 overflow-hidden">
                {project.image ? (
                  <>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center flex-col gap-3 p-6 text-center bg-gradient-primary">
                    <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <span className="text-2xl font-bold text-white drop-shadow-lg">{project.title}</span>
                  </div>
                )}
                
                {/* Floating Tags */}
                <div className="absolute top-4 left-4 right-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span 
                        key={tag} 
                        className="px-3 py-1 text-xs font-semibold bg-white/90 dark:bg-gray-900/90 text-primary-600 dark:text-primary-400 backdrop-blur-sm rounded-full shadow-lg"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-3 py-1 text-xs font-semibold bg-white/90 dark:bg-gray-900/90 text-gray-700 dark:text-gray-300 backdrop-blur-sm rounded-full shadow-lg">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Period Badge */}
                {project.period && (
                  <div className="absolute bottom-4 right-4">
                    <span className="px-3 py-1.5 text-xs font-medium bg-white/90 dark:bg-gray-900/90 text-gray-700 dark:text-gray-300 backdrop-blur-sm rounded-full shadow-lg flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {project.period}
                    </span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-grow bg-gradient-to-b from-transparent to-primary-50/30 dark:to-primary-950/10">
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100 group-hover:text-gradient transition-all">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-primary py-2.5 text-sm flex-1 group/btn"
                    >
                      <svg className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
