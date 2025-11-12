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
    <section className="py-20">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          {myProjects}
        </motion.h1>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={item} className="card group flex flex-col">
              <div className="h-60 bg-gray-200 dark:bg-gray-800 overflow-hidden relative">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center flex-col gap-2 p-4 text-center">
                    <div className="w-full flex justify-center mb-1">
                      <span className="bg-primary/20 text-primary dark:bg-primary/40 dark:text-white px-3 py-1 rounded-full text-xs font-medium">
                        {project.tags[0]}
                      </span>
                    </div>
                    <span className="text-xl font-bold text-primary">{project.title}</span>
                    {project.period && (
                      <span className="text-sm text-gray-500 dark:text-gray-400">{project.period}</span>
                    )}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2 py-1 text-xs font-medium bg-primary/80 text-white rounded-full">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 text-xs font-medium bg-gray-700/80 text-white rounded-full">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{project.description}</p>
                <div className="flex gap-3 mt-auto">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline py-2 text-sm">
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
