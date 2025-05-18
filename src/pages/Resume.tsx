import { useState } from 'react';
import { motion } from 'framer-motion';

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

const Resume = () => {
  const [language, setLanguage] = useState<'en' | 'fr'>('en');

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // English content
  const englishContent: ContentType = {
    title: "My Resume",
    downloadBtn: "Download Resume (PDF)",
    education: {
      title: "Education",
      items: [
        {
          degree: "Engineer's Degree, Computer and Network Engineering",
          institution: "Ecole Marocaine des Sciences de l'Ingénieur",
          period: "October 2023 - Present"
        },
        {
          degree: "Software Engineering",
          institution: "ALX Academy",
          period: "August 2023 - March 2025"
        },
        {
          degree: "Digital Infrastructure, Systems and Networks",
          institution: "Specialized Institute Of Applied Technology NTIC",
          period: "April 2023 - May 2023"
        },
        {
          degree: "Computer and Network Maintenance",
          institution: "Specialized Institute Of Applied Technology NTIC",
          period: "September 2019 - July 2021"
        },
        {
          degree: "Bachelor's Degree, Computer and Network Maintenance",
          institution: "Mohamed V Technical High School",
          period: "September 2018 - July 2021"
        },
        {
          degree: "Professional Industrial Common Core",
          institution: "Specialized Institute Of Applied Technology",
          period: "September 2018 - July 2019"
        }
      ]
    },
    experience: {
      title: "Work Experience",
      items: [
        {
          position: "Developer",
          company: "ENCG Beni Mellal",
          period: "August 2024 - October 2024",
          responsibilities: [
            "Optimized a slot management platform",
            "Worked with PHP, HTML, CSS, JavaScript"
          ]
        },
        {
          position: "System Administrator",
          company: "Agence du Bassin Hydraulique de l'Oum Er Rbia",
          period: "April 2022 - May 2022",
          responsibilities: [
            "Recovered a RAID 5 server (HP ProLiant DL380 G7)",
            "Collaborated with a network technician and 5 developers"
          ]
        },
        {
          position: "Network Maintenance Technician",
          company: "Institut Spécialisé des Arts Traditionnels",
          period: "April 2022 - May 2022",
          responsibilities: [
            "Installed and configured network printers"
          ]
        },
        {
          position: "Administrative Assistant",
          company: "ISTA NTIC, Beni Mellal",
          period: "April 2022 - May 2022",
          responsibilities: [
            "Processed registration files and updated data"
          ]
        }
      ]
    },
    skills: {
      title: "Skills",
      technical: {
        title: "Technical Skills",
        items: [
          "Network & System Administration",
          "Development & Programming",
          "Databases",
          "SCRUM Methodologies, GitHub collaboration",
          "OS: Unix/Linux, Windows",
          "UML & Merise Modeling",
          "Tools: Git, Shell, SqlPlus, SSMS, VS Code, PyCharm, Geany, VMware, Azure, PuTTY"
        ]
      },
      other: {
        title: "Other Skills",
        items: [
          "Problem-solving skills",
          "Teamwork",
          "Communication",
          "Project management",
          "Time management",
          "Adaptability"
        ]
      }
    },
    projects: {
      title: "Projects",
      items: [
        {
          title: "Java OOP Project",
          period: "December 2024 - January 2025",
          description: "Development of a dental office management system",
          technologies: "Java, Swing, UML, Maven, IntelliJ IDEA"
        },
        {
          title: "ASP.NET Core MVC Project",
          period: "December 2024 - January 2025",
          description: "Development of a dental office management system",
          technologies: "C#, ReactJS, SQL, MVC, SSMS, Visual Studio"
        },
        {
          title: "Restaurant Management System (Final Year Project)",
          period: "May 2024 - June 2024",
          description: "Complete restaurant management system",
          technologies: "Python, Django, SQLite, Tkinter, VS Code"
        },
        {
          title: "Bill Management",
          description: "C++ application for invoice management with classes for Product, Client, Invoice; includes data persistence and calculation features."
        },
        {
          title: "Finger Vein Biometric Identification with Fused CNNs",
          description: "Biometric identification system using advanced CNN architecture for secure authentication through finger vein patterns."
        },
        {
          title: "Gestion des Parcs de Jeux",
          description: "C++ amusement park management system using object-oriented programming, with features for game tracking and CSV export."
        }
      ]
    },
    certifications: {
      title: "Certifications",
      items: [
        "CCNA",
        "Microsoft Office Specialist: Master 2016",
        "Microsoft Certified: Azure Fundamentals",
        "Interactivity with JavaScript",
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
  };
  
  // French content
  const frenchContent: ContentType = {
    title: "Mon CV",
    downloadBtn: "Télécharger CV (PDF)",
    education: {
      title: "Formation",
      items: [
        {
          degree: "Cycles d'ingénieur en informatique et réseaux",
          institution: "Ecole Marocaine des Sciences de l'Ingénieur, Rabat",
          period: "Octobre 2023 - En cours"
        },
        {
          degree: "ALX Software Engineering",
          institution: "ALX Academy",
          period: "Août 2023 - Mars 2025"
        },
        {
          degree: "Diplôme en Infrastructure Digitale, Option Systèmes et Réseaux",
          institution: "Institut Spécialisé de Technologie Appliquée NTIC, Beni Mellal",
          period: "Avril 2023 - Mai 2023"
        },
        {
          degree: "Maintenance Informatique et Réseaux",
          institution: "ISTA NTIC, Beni Mellal",
          period: "Septembre 2019 - Juillet 2021"
        },
        {
          degree: "Baccalauréat en Maintenance Informatique et Réseaux",
          institution: "Lycée Technique Mohamed V, Beni Mellal",
          period: "Septembre 2018 - Juillet 2021"
        },
        {
          degree: "Troncs Communs Professionnels Industriels",
          institution: "ISTA, Beni Mellal",
          period: "Septembre 2018 - Juillet 2019"
        }
      ]
    },
    experience: {
      title: "Expérience Professionnelle",
      items: [
        {
          position: "Développeur",
          company: "ENCG Beni Mellal",
          period: "Août 2024 - Octobre 2024",
          responsibilities: [
            "Optimisation d'une plateforme de gestion de créneaux",
            "Stack : PHP, HTML, CSS, JavaScript"
          ]
        },
        {
          position: "Administrateur Système",
          company: "Agence du Bassin Hydraulique de l'Oum Er Rbia",
          period: "Avril 2022 - Mai 2022",
          responsibilities: [
            "Récupération d'un serveur RAID 5 (HP ProLiant DL380 G7)",
            "Travail en équipe avec technicien réseau + 5 développeurs"
          ]
        },
        {
          position: "Technicien de maintenance réseau",
          company: "Institut Spécialisé des Arts Traditionnels, Beni Mellal",
          period: "Avril 2022 - Mai 2022",
          responsibilities: [
            "Installation et configuration des imprimantes réseau"
          ]
        },
        {
          position: "Assistant administratif",
          company: "ISTA NTIC, Beni Mellal",
          period: "Avril 2022 - Mai 2022",
          responsibilities: [
            "Traitement des dossiers d'inscription et mise à jour des données"
          ]
        }
      ]
    },
    skills: {
      title: "Compétences",
      technical: {
        title: "Compétences Techniques",
        items: [
          "Administration Réseau & Systèmes",
          "Développement & Programmation",
          "Bases de données",
          "Méthodologies SCRUM, collaboration avec GitHub",
          "OS : Unix/Linux, Windows",
          "Modélisation UML & Merise",
          "Outils : Git, Shell, SqlPlus, SSMS, VS Code, PyCharm, Geany, VMware, Azure, PuTTY"
        ]
      },
      other: {
        title: "Autres Compétences",
        items: [
          "Résolution de problèmes",
          "Travail d'équipe",
          "Communication",
          "Gestion de projet",
          "Gestion du temps",
          "Adaptabilité"
        ]
      }
    },
    projects: {
      title: "Projets Académiques",
      items: [
        {
          title: "Projet Java POO",
          period: "Décembre 2024 - Janvier 2025",
          description: "Développement d'un système de gestion d'un cabinet dentaire",
          technologies: "Java, Swing, UML, Maven, IntelliJ IDEA"
        },
        {
          title: "Projet ASP.NET Core MVC",
          period: "Décembre 2024 - Janvier 2025",
          description: "Développement d'un système de gestion d'un cabinet dentaire",
          technologies: "C#, ReactJS, SQL, MVC, SSMS, Visual Studio"
        },
        {
          title: "Projet de Fin d'Année (PFA)",
          period: "Mai 2024 - Juin 2024",
          description: "Système de gestion de restaurant",
          technologies: "Python, Django, SQLite, Tkinter, VS Code"
        },
        {
          title: "Gestion des Factures",
          description: "Application C++ pour la gestion des factures avec des classes pour Produit, Client, Facture; comprend des fonctionnalités de persistance et de calcul."
        },
        {
          title: "Identification Biométrique par Veines Digitales avec CNN Fusionnés",
          description: "Système d'identification biométrique utilisant une architecture CNN avancée pour l'authentification sécurisée grâce aux motifs des veines digitales."
        },
        {
          title: "Gestion des Parcs de Jeux",
          description: "Système de gestion de parc d'attractions en C++ utilisant la programmation orientée objet, avec fonctionnalités de suivi des jeux et export CSV."
        }
      ]
    },
    certifications: {
      title: "Certificats",
      items: [
        "CCNA",
        "MOS : Master on Microsoft Office 2016",
        "Microsoft Certified: Azure Fundamentals",
        "Interactivity with JavaScript",
        "The Unix Workbench",
        "Programming for Everybody (Python)"
      ]
    },
    languages: {
      title: "Langues",
      items: [
        "Français : Courant",
        "Anglais : Technique (intermédiaire)",
        "Arabe : Maternelle"
      ]
    },
    additional: {
      title: "Informations Complémentaires",
      items: [
        "Permis de conduire : B",
        "Centres d'intérêt : Voyages, E-sport, Cuisine"
      ]
    }
  };

  // Select content based on language
  const content = language === 'en' ? englishContent : frenchContent;

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
          
          <div className="flex gap-4">
            <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
              <button
                onClick={() => setLanguage('en')}
                className={`px-4 py-1 rounded-md ${
                  language === 'en'
                    ? 'bg-primary text-white'
                    : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('fr')}
                className={`px-4 py-1 rounded-md ${
                  language === 'fr'
                    ? 'bg-primary text-white'
                    : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                FR
              </button>
            </div>
            
            <motion.a
              href={language === 'en' ? "/pdfs/resume-en.pdf" : "/pdfs/resume-fr.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {content.downloadBtn}
            </motion.a>
          </div>
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