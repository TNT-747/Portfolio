import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  grade?: string;
};

type ExperienceItem = {
  position: string;
  company: string;
  period: string;
  responsibilities: string[];
};

type ProjectItem = {
  title: string;
  period?: string;
  description: string;
  technologies?: string;
};

type ContentType = {
  title: string;
  downloadBtn: string;
  education: {
    title: string;
    items: EducationItem[];
  };
  experience: {
    title: string;
    items: ExperienceItem[];
  };
  skills: {
    title: string;
    technical: {
      title: string;
      items: string[];
    };
    other: {
      title: string;
      items: string[];
    };
  };
  projects: {
    title: string;
    items: ProjectItem[];
  };
  certifications: {
    title: string;
    items: string[];
  };
  languages: {
    title: string;
    items: string[];
  };
  additional?: {
    title: string;
    items: string[];
  };
};

const contentData: { en: ContentType; fr: ContentType } = {
  en: {
    title: "My Resume",
    downloadBtn: "Download Resume (PDF)",
    education: {
      title: "Education",
      items: [
        {
          degree: "Engineer's Degree, Computer and Network Engineering",
          institution: "Ecole Marocaine des Sciences de l'Ingénieur, Rabat",
          period: "October 2023 – Present"
        },
        {
          degree: "Software Engineering",
          institution: "ALX Academy",
          period: "August 2023 – March 2025"
        },
        {
          degree: "Digital Infrastructure, Systems and Networks",
          institution: "Specialized Institute Of Applied Technology NTIC NTIC, Beni Mellal",
          period: "April 2023 – May 2023"
        },
         {
          degree: "Bachelor's Degree, Computer and Network Maintenance",
          institution: "Mohamed V Technical High School, Beni Mellal",
          period: "September 2020 – July 2021"
        },
        {
          degree: "Computer and Network Maintenance",
          institution: "Specialized Institute Of Applied Technology NTIC NTIC, Beni Mellal",
          period: "September 2019 – July 2021"
        }
       
      ]
    },
    experience: {
      title: "Work Experience",
      items: [
        {
          position: "Web Developer Intern",
          company: "Hydraulic Basin Agency of Oum Er-Rbia, Beni Mellal",
          period: "August 2025 – September 2025",
          responsibilities: [
            "Developed a web application with interactive mapping and real-time tracking using Django and React",
            "Integrated weather data (OpenWeatherMap API) for decision-making"
          ]
        },
        {
          position: "Web Developer Intern",
          company: "National School of Commerce and Management, Beni Mellal",
          period: "August 2024 – September 2024",
          responsibilities: [
            "Developed and improved a slot & schedule management platform",
            "Optimized database performance and built dynamic user interfaces"
          ]
        },
        {
          position: "System Administrator Intern",
          company: "Hydraulic Basin Agency of Oum Er-Rbia, Beni Mellal",
          period: "April 2022 – May 2022",
          responsibilities: [
            "Resolved a critical incident on the main server",
            "Implemented a backup server and restored the system",
            "Configured printers and managed user access"
          ]
        }
      ]
    },
    skills: {
      title: "Skills",
      technical: {
        title: "Technical Skills",
        items: [
          "Network & System Administration (Unix/Linux, Windows)",
          "Development: Python, C++, C#, Java, JavaScript, PHP, HTML/CSS",
          "Frameworks: Java Spring Boot, React.js, Django, Eel",
          "Databases: Oracle, Microsoft SQL Server",
          "SCRUM & GitHub collaboration",
          "UML & Merise Modeling",
          "Tools: Git, Shell, SqlPlus, SSMS, VS Code, PyCharm, Geany, VMware, Azure, PuTTY, PowerBI, IntelliJ IDEA"
        ]
      },
      other: {
        title: "Other Skills",
        items: [
          "Teamwork",
          "Time Management",
          "Adaptability",
          "Problem-solving"
        ]
      }
    },
    projects: {
      title: "Academic Projects",
      items: [
       
        {
          title: "Banking Management System",
          period: "Jun 2025",
          description: "Bank management system",
          technologies: "Java, Spring"
        },
        {
          title: "E-Commerce Website",
          period: "May 2025 – Jul 2025",
          description: "E-commerce platform",
          technologies: "Java, Spring Boot"
        },
        {
          title: "Cloud CDN with Azure",
          period: "May 2025",
          description: "Deployment of a CDN on Microsoft Azure"
        },
        {
          title: "Virtualization with Master/Slave Communication",
          period: "May 2025",
          description: "Virtualized infrastructure with Master/Slave communication"
        },
         {
          title: "Dental Office Management System (Desktop)",
          period: "Dec 2024 – Jan 2025",
          description: "Management system for a dental office",
          technologies: "Java, Swing"
        },
        {
          title: "Restaurant Management System",
          period: "Dec 2024 – Jan 2025",
          description: "Restaurant management system",
          technologies: "ASP.NET, React"
        },
        {
          title: "Restaurant Management System",
          period: "May 2024 – Jul 2024",
          description: "Restaurant management system",
          technologies: "Python, Eel"
        }
      ]
    },
    certifications: {
      title: "Certifications",
      items: [
        "Oracle Database Administration 2019",
        "Microsoft Certified: Azure Fundamentals (AZ-900)",
        "CCNA",
        "MOS: Microsoft Office Specialist Master 2016",
        "The Unix Workbench",
        "Programming for Everybody (Python)"
      ]
    },
    languages: {
      title: "Languages",
      items: [
        "French: Fluent",
        "English: Technical (Intermediate)",
        "Arabic: Native"
      ]
    },
    additional: {
      title: "Additional Information",
      items: [
        "Driver's License: B",
      
        "Interests: Travel, E-sports, Cooking"
      ]
    }
  },
  fr: {
    title: "Mon CV",
    downloadBtn: "Télécharger CV (PDF)",
    education: {
      title: "Formation",
      items: [
        {
          degree: "Cycles d'ingénieur en informatique et réseaux",
          institution: "Ecole Marocaine des Sciences de l'Ingénieur, Rabat",
          period: "Octobre 2023 – En cours"
        },
        {
          degree: "ALX Software Engineering",
          institution: "ALX Academy",
          period: "Août 2023 – Mars 2025"
        },
        {
          degree: "Diplôme en Infrastructure Digitale, Option Systèmes et Réseaux",
          institution: "Institut Specialise de Technologie Appliquee NTIC, Beni Mellal",
          period: "Avril 2023 – Mai 2023"
        },
        {
          degree: "Maintenance Informatique et Réseaux",
          institution: "Institut Specialise de Technologie Appliquee NTIC, Beni Mellal",
          period: "Septembre 2019 – Juillet 2021"
        },
        {
          degree: "Baccalauréat en Maintenance Informatique et Réseaux",
          institution: "Lycée Technique Mohamed V, Beni Mellal",
          period: "Septembre 2020 – Juillet 2021"
        }
      ]
    },
    experience: {
      title: "Expérience Professionnelle",
      items: [
        {
          position: "Stagiaire Développeur Web",
          company: "Agence du Bassin Hydraulique de l'Oum Er Rbia, Beni Mellal",
          period: "Août 2025 – Septembre 2025",
          responsibilities: [
            "Développement d’une application web intégrant une cartographie interactive et un suivi en temps réel (Django + React)",
            "Amélioration de la prise de décision avec intégration de données météorologiques (API OpenWeatherMap)"
          ]
        },
        {
          position: "Stagiaire Développeur Web",
          company: "Ecole Nationale de Commerce et de Gestion, Beni Mellal",
          period: "Août 2024 – Septembre 2024",
          responsibilities: [
            "Développement et amélioration d’une plateforme de gestion des créneaux et emplois du temps",
            "Optimisation des bases de données et création d’interfaces dynamiques"
          ]
        },
        {
          position: "Stagiaire Administrateur Système",
          company: "Agence du Bassin Hydraulique de l'Oum Er Rbia, Beni Mellal",
          period: "Avril 2022 – Mai 2022",
          responsibilities: [
            "Résolution d’un incident critique sur le serveur principal",
            "Mise en place d’un serveur de secours et restauration du système",
            "Installation et configuration d’imprimantes réseau, gestion des accès utilisateurs"
          ]
        }
      ]
    },
    skills: {
      title: "Compétences",
      technical: {
        title: "Compétences Techniques",
        items: [
          "Administration Réseau & Systèmes (Unix/Linux, Windows)",
          "Développement : Python, C++, C#, Java, JavaScript, PHP, HTML/CSS",
          "Frameworks : Java Spring Boot, React.js, Django, Eel",
          "Bases de données : Oracle, Microsoft SQL Server",
          "Méthodologies SCRUM & collaboration GitHub",
          "Modélisation UML & Merise",
          "Outils : Git, Shell, SqlPlus, SSMS, VS Code, PyCharm, Geany, VMware, Azure, PuTTY, PowerBI, IntelliJ IDEA"
        ]
      },
      other: {
        title: "Soft Skills",
        items: [
          "Travail en équipe",
          "Gestion du temps",
          "Adaptabilité",
          "Résolution de problèmes"
        ]
      }
    },
    projects: {
      title: "Projets Académiques",
      items: [
        
        {
          title: "Système de Gestion Bancaire",
          period: "Juin 2025",
          description: "Système bancaire",
          technologies: "Java, Spring"
        },
        {
          title: "Site Web de E-Commerce",
          period: "Mai 2025 – Juil 2025",
          description: "Plateforme e-commerce",
          technologies: "Java, Spring Boot"
        },
        {
          title: "Cloud CDN avec Azure",
          period: "Mai 2025",
          description: "Configuration et déploiement d’un CDN sur Microsoft Azure"
        },
        {
          title: "Virtualisation avec Communication Master/Slave",
          period: "Mai 2025",
          description: "Infrastructure virtualisée avec communication Master/Slave"
        },
        {
          title: "Application de Gestion d’un Cabinet Dentaire (Desktop)",
          period: "Déc 2024 – Jan 2025",
          description: "Système de gestion d’un cabinet dentaire",
          technologies: "Java, Swing"
        },
        {
          title: "Système de Gestion de Restaurant",
          period: "Déc 2024 – Jan 2025",
          description: "Système de gestion de restaurant",
          technologies: "ASP.NET, React"
        },
        {
          title: "Système de Gestion de Restaurant",
          period: "Mai 2024 – Juil 2024",
          description: "Système de gestion de restaurant",
          technologies: "Python, Eel"
        }
      ]
    },
    certifications: {
      title: "Certificats",
      items: [
        "Oracle Database Administration 2019",
        "Microsoft Certified: Azure Fundamentals (AZ-900)",
        "CCNA",
        "MOS : Master Microsoft Office 2016",
        "The Unix Workbench",
        "Programming for Everybody (Python)"
      ]
    },
    languages: {
      title: "Langues",
      items: [
        "Français : Courant",
        "Anglais : Technique (Intermédiaire)",
        "Arabe : Maternelle"
      ]
    },
    additional: {
      title: "Informations Complémentaires",
      items: [
        "Permis de conduire : B",
       
        "Centres d’intérêt : Voyages, E-sports, Cuisine"
      ]
    }
  },
};

const Resume = () => {
  const { language } = useLanguage();
  const content = contentData[language];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20">
      <div className="container">
        <div className="flex justify-between items-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold"
          >
            {content.title}
          </motion.h1>
          
          <motion.a
            href={language === 'en' ? "resume-en.pdf" : "resume-fr.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {content.downloadBtn}
          </motion.a>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="mb-12"
            key={`education-${language}`}
          >
            <h2 className="text-2xl font-bold mb-6 text-primary">{content.education.title}</h2>
            <div className="space-y-6">
              {content.education.items.map((item, index) => (
                <div key={index} className="border-l-4 border-primary pl-4 py-2">
                  <h3 className="text-xl font-bold">{item.degree}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.institution}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-500 dark:text-gray-400">{item.period}</p>
                    {item.grade && (
                      <p className="text-primary font-medium">{item.grade}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            className="mb-12"
            key={`experience-${language}`}
          >
            <h2 className="text-2xl font-bold mb-6 text-primary">{content.experience.title}</h2>
            <div className="space-y-6">
              {content.experience.items.map((item, index) => (
                <div key={index} className="border-l-4 border-primary pl-4 py-2">
                  <h3 className="text-xl font-bold">{item.position}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.company}</p>
                  <p className="text-gray-500 dark:text-gray-400">{item.period}</p>
                  <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-300">
                    {item.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            className="mb-12"
            key={`skills-${language}`}
          >
            <h2 className="text-2xl font-bold mb-6 text-primary">{content.skills.title}</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-4">{content.skills.technical.title}</h3>
              <ul className="text-gray-600 dark:text-gray-300 list-disc pl-5 space-y-2">
                {content.skills.technical.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">{content.skills.other.title}</h3>
              <ul className="text-gray-600 dark:text-gray-300 list-disc pl-5 space-y-2">
                {content.skills.other.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
            className="mb-12"
            key={`projects-${language}`}
          >
            <h2 className="text-2xl font-bold mb-6 text-primary">{content.projects.title}</h2>
            <div className="space-y-4">
              {content.projects.items.map((item, index) => (
                <div key={index} className="border-l-4 border-primary pl-4 py-2">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  {item.period && <p className="text-gray-500 dark:text-gray-400">{item.period}</p>}
                  <p className="mt-1 text-gray-600 dark:text-gray-300">{item.description}</p>
                  {item.technologies && (
                    <p className="mt-1 text-primary font-medium">Stack: {item.technologies}</p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
            className="mb-12"
            key={`certifications-${language}`}
          >
            <h2 className="text-2xl font-bold mb-6 text-primary">{content.certifications.title}</h2>
            <ul className="text-gray-600 dark:text-gray-300 list-disc pl-5 space-y-1">
              {content.certifications.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
            className="mb-12"
            key={`languages-${language}`}
          >
            <h2 className="text-2xl font-bold mb-6 text-primary">{content.languages.title}</h2>
            <ul className="text-gray-600 dark:text-gray-300 list-disc pl-5 space-y-1">
              {content.languages.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </motion.div>

          {content.additional && (
            <motion.div 
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6 }}
              key={`additional-${language}`}
            >
              <h2 className="text-2xl font-bold mb-6 text-primary">{content.additional.title}</h2>
              <ul className="text-gray-600 dark:text-gray-300 list-disc pl-5 space-y-1">
                {content.additional.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Resume;
