import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

type EducationItem = {
  degree: string;
  institution: string;
  period: string;
};

type ExperienceItem = {
  position: string;
  company: string;
  period: string;
  responsibilities: string[];
};

type ProjectItem = {
  title: string;
  period: string;
  description: string;
  technologies: string;
};

type CertificationItem = {
  name: string;
  issuer: string;
};

type ContentType = {
  title: string;
  downloadBtn: string;
  profile: {
    title: string;
    content: string;
  };
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
    soft: {
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
    items: CertificationItem[];
  };
  languages: {
    title: string;
    items: { language: string; level: string }[];
  };
};

const contentData: { en: ContentType; fr: ContentType } = {
  en: {
    title: "Resume",
    downloadBtn: "Download PDF",
    profile: {
      title: "Profile",
      content: "5th-year engineering student at École Marocaine des Sciences de l'Ingénieur (EMSI) specializing in MIAGE, seeking a 4-6 month internship starting February 2026. Full Stack development: Java/Spring Boot, React, and Python/Django, REST APIs, SQL, and Docker. Goal: contribute to robust solutions within an Agile/Scrum team."
    },
    education: {
      title: "Education",
      items: [
        {
          degree: "Engineering Degree – Computer & Network Engineering (MIAGE Option)",
          institution: "École Marocaine des Sciences de l'Ingénieur (EMSI), Rabat",
          period: "Oct 2023 – Present"
        },
        {
          degree: "Software Engineering Certificate",
          institution: "ALX Academy (Holberton School)",
          period: "Aug 2023 – Mar 2025"
        },
        {
          degree: "Digital Infrastructure Diploma (Systems & Networks)",
          institution: "Specialized Institute Of Applied Technology NTIC, Beni Mellal",
          period: "Sep 2021 – May 2023"
        },
        {
          degree: "Baccalaureate – Computer & Network Maintenance",
          institution: "Mohamed V Technical High School, Beni Mellal",
          period: "Sep 2020 – Jul 2021"
        }
      ]
    },
    experience: {
      title: "Professional Experience",
      items: [
        {
          position: "Full Stack Developer Intern (Django/React)",
          company: "Agence du Bassin Hydraulique de l'Oum Er-Rbia, Beni Mellal",
          period: "Aug 2025 – Sep 2025",
          responsibilities: [
            "Designed a hydrological monitoring web application with mapping and dashboards",
            "Front/back integration, CRUD functionalities, and API structuring",
            "Stack: Python, Django, React.js, SQLite, Git/GitHub"
          ]
        },
        {
          position: "Web Developer Intern (PHP/JavaScript)",
          company: "École Nationale de Commerce et de Gestion (ENCG), Beni Mellal",
          period: "Aug 2024 – Sep 2024",
          responsibilities: [
            "Optimized and automated a timetable management platform",
            "Improved UX and fixed functional anomalies",
            "Stack: PHP, JavaScript, HTML5/CSS3, MySQL, XAMPP"
          ]
        },
        {
          position: "Infrastructure & Networks Intern",
          company: "Agence du Bassin Hydraulique de l'Oum Er-Rbia, Beni Mellal",
          period: "Apr 2022 – May 2022",
          responsibilities: [
            "Assisted with system administration and IT infrastructure maintenance",
            "Provided user support and resolved technical issues"
          ]
        }
      ]
    },
    skills: {
      title: "Skills",
      technical: {
        title: "Technical Skills",
        items: [
          "Backend: Java, Spring Boot, JPA/Hibernate, REST APIs",
          "Frontend: React, JavaScript, HTML/CSS, Tailwind CSS",
          "Python: Django, Pandas",
          "Databases: MySQL, PostgreSQL, SQL Server, Oracle",
          "DevOps/Cloud: Docker, Azure Fundamentals, Git/GitHub, Linux",
          "Tools: Postman, Maven, IntelliJ IDEA, VS Code, PyCharm",
          "Methods: UML, Merise, Agile/Scrum"
        ]
      },
      soft: {
        title: "Soft Skills",
        items: [
          "Analytical Thinking",
          "Collaborative Work",
          "Time Management",
          "Adaptability"
        ]
      }
    },
    projects: {
      title: "Key Projects",
      items: [
        {
          title: "Full Stack E-commerce Platform (Spring Boot / React, Microservices)",
          period: "May 2025 – Jul 2025",
          description: "E-commerce solution with services, REST APIs, persistence, and front/back integration. Containerization via Docker.",
          technologies: "Java, Spring Boot, React.js, MySQL, Docker, Maven"
        },
        {
          title: "Banking Management System (Spring Boot)",
          period: "May 2025 – Jun 2025",
          description: "Backend for account and transaction management with REST endpoints, business rules, and persistence.",
          technologies: "Java, Spring Boot, JPA/Hibernate, MySQL, REST"
        },
        {
          title: "Dental Clinic Management (Java Desktop)",
          period: "Dec 2024 – Jan 2025",
          description: "MVC desktop application for patient records and appointment management.",
          technologies: "Java SE, Swing, JDBC, MySQL"
        }
      ]
    },
    certifications: {
      title: "Certifications",
      items: [
        { name: "Azure Fundamentals", issuer: "Microsoft" },
        { name: "Database Administration 2019", issuer: "Oracle" },
        { name: "CCNA", issuer: "Cisco" },
        { name: "Unix Workbench", issuer: "Coursera" }
      ]
    },
    languages: {
      title: "Languages",
      items: [
        { language: "Arabic", level: "Native" },
        { language: "French", level: "Professional" },
        { language: "English", level: "Professional" }
      ]
    }
  },
  fr: {
    title: "CV",
    downloadBtn: "Télécharger PDF",
    profile: {
      title: "Profil",
      content: "Étudiant ingénieur en 5ème année à l'École Marocaine des Sciences de l'Ingénieur (EMSI) option MIAGE, je recherche un stage PFE de 4 à 6 mois à partir de février 2026. Développement Full Stack : Java/Spring Boot, React et Python/Django, API REST, SQL et Docker. Objectif : contribuer à des solutions robustes au sein d'une équipe Agile/Scrum."
    },
    education: {
      title: "Formation",
      items: [
        {
          degree: "Diplôme d'Ingénieur – Informatique et Réseaux (Option MIAGE)",
          institution: "École Marocaine des Sciences de l'Ingénieur (EMSI), Rabat",
          period: "Oct 2023 – Présent"
        },
        {
          degree: "Certificat en Génie Logiciel",
          institution: "ALX Academy (Holberton School)",
          period: "Août 2023 – Mars 2025"
        },
        {
          degree: "Diplôme en Infrastructure Digitale (Systèmes et Réseaux)",
          institution: "Institut Spécialisé de Technologie Appliquée NTIC, Beni Mellal",
          period: "Sept 2021 – Mai 2023"
        },
        {
          degree: "Baccalauréat – Maintenance Informatique et Réseaux",
          institution: "Lycée Technique Mohamed V, Beni Mellal",
          period: "Sept 2020 – Juil 2021"
        }
      ]
    },
    experience: {
      title: "Expérience Professionnelle",
      items: [
        {
          position: "Stagiaire Développeur Full Stack (Django/React)",
          company: "Agence du Bassin Hydraulique de l'Oum Er-Rbia, Beni Mellal",
          period: "Août 2025 – Sept 2025",
          responsibilities: [
            "Conception d'une application web de suivi hydrologique avec cartographie et tableaux de bord",
            "Intégration front/back, fonctionnalités CRUD et structuration des API",
            "Stack : Python, Django, React.js, SQLite, Git/GitHub"
          ]
        },
        {
          position: "Stagiaire Développeur Web (PHP/JavaScript)",
          company: "École Nationale de Commerce et de Gestion (ENCG), Beni Mellal",
          period: "Août 2024 – Sept 2024",
          responsibilities: [
            "Optimisation et automatisation d'une plateforme de gestion des emplois du temps",
            "Amélioration de l'ergonomie et correction d'anomalies fonctionnelles",
            "Stack : PHP, JavaScript, HTML5/CSS3, MySQL, XAMPP"
          ]
        },
        {
          position: "Stagiaire Infrastructure & Réseaux",
          company: "Agence du Bassin Hydraulique de l'Oum Er-Rbia, Beni Mellal",
          period: "Avril 2022 – Mai 2022",
          responsibilities: [
            "Assistance à l'administration système et maintenance du parc informatique",
            "Support utilisateurs et résolution de problèmes techniques"
          ]
        }
      ]
    },
    skills: {
      title: "Compétences",
      technical: {
        title: "Compétences Techniques",
        items: [
          "Backend : Java, Spring Boot, JPA/Hibernate, API REST",
          "Frontend : React, JavaScript, HTML/CSS, Tailwind CSS",
          "Python : Django, Pandas",
          "Bases de données : MySQL, PostgreSQL, SQL Server, Oracle",
          "DevOps/Cloud : Docker, Azure Fundamentals, Git/GitHub, Linux",
          "Outils : Postman, Maven, IntelliJ IDEA, VS Code, PyCharm",
          "Méthodes : UML, Merise, Agile/Scrum"
        ]
      },
      soft: {
        title: "Compétences Interpersonnelles",
        items: [
          "Esprit d'analyse",
          "Travail collaboratif",
          "Gestion du temps",
          "Adaptabilité"
        ]
      }
    },
    projects: {
      title: "Projets Clés",
      items: [
        {
          title: "Plateforme E-commerce Full Stack (Spring Boot / React, Microservices)",
          period: "Mai 2025 – Juil 2025",
          description: "Solution e-commerce avec services, API REST, persistance et intégration front/back. Conteneurisation via Docker.",
          technologies: "Java, Spring Boot, React.js, MySQL, Docker, Maven"
        },
        {
          title: "Système de Gestion Bancaire (Spring Boot)",
          period: "Mai 2025 – Juin 2025",
          description: "Backend de gestion des comptes et transactions avec endpoints REST, règles métier et persistance.",
          technologies: "Java, Spring Boot, JPA/Hibernate, MySQL, REST"
        },
        {
          title: "Gestion de Cabinet Dentaire (Java Desktop)",
          period: "Déc 2024 – Janv 2025",
          description: "Application desktop MVC pour la gestion des dossiers patients et rendez-vous.",
          technologies: "Java SE, Swing, JDBC, MySQL"
        }
      ]
    },
    certifications: {
      title: "Certifications",
      items: [
        { name: "Azure Fundamentals", issuer: "Microsoft" },
        { name: "Database Administration 2019", issuer: "Oracle" },
        { name: "CCNA", issuer: "Cisco" },
        { name: "Unix Workbench", issuer: "Coursera" }
      ]
    },
    languages: {
      title: "Langues",
      items: [
        { language: "Arabe", level: "Maternelle" },
        { language: "Français", level: "Professionnel" },
        { language: "Anglais", level: "Professionnel" }
      ]
    }
  }
};

const Resume = () => {
  const { language } = useLanguage();
  const content = contentData[language];

  return (
    <section className="relative py-20 min-h-screen">
      {/* Decorative Background */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary-400/5 rounded-full blur-2xl pointer-events-none"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent-400/5 rounded-full blur-2xl pointer-events-none"></div>
      
      <div className="container relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            {content.title}
          </motion.h1>
          
          <motion.a
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            href={language === 'en' ? '/resume-en.pdf' : '/resume-fr.pdf'}
            download={language === 'en' ? 'Abderrahmane_KASSIMI_Resume_EN.pdf' : 'Abderrahmane_KASSIMI_CV_FR.pdf'}
            className="btn btn-primary group"
          >
            <svg className="w-5 h-5 mr-2 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            {content.downloadBtn}
          </motion.a>
        </div>

        <div className="max-w-6xl mx-auto space-y-16">
          {/* Profile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="card p-6 md:p-8 border-l-4 border-gradient-primary hover:shadow-glow transition-all"
          >
            <div className="flex items-center gap-3 mb-4">
              <svg className="w-7 h-7 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <h2 className="text-3xl md:text-4xl font-bold text-gradient">{content.profile.title}</h2>
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {content.profile.content}
            </p>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gradient">{content.experience.title}</h2>
            <div className="space-y-6">
              {content.experience.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  className="card p-6 md:p-8 border-l-4 border-gradient-primary hover:shadow-glow transition-all"
                >
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">{item.position}</h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">{item.company}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {item.period}
                  </p>
                  <ul className="space-y-2">
                    {item.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                        <span className="text-primary-600 dark:text-primary-400 mt-1.5">▸</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gradient">Skills</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="card p-6 md:p-8 border-l-4 border-gradient-primary hover:shadow-glow transition-all"
              >
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <svg className="w-7 h-7 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  <span className="text-gradient">{content.skills.technical.title}</span>
                </h3>
                <ul className="space-y-3">
                  {content.skills.technical.items.map((skill, index) => (
                    <li key={index} className="flex items-start gap-3 group">
                      <div className="w-2 h-2 bg-gradient-primary rounded-full mt-2 group-hover:scale-150 transition-transform"></div>
                      <span className="text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="card p-6 md:p-8 border-l-4 border-gradient-accent hover:shadow-accent-glow transition-all"
              >
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <svg className="w-7 h-7 text-accent-600 dark:text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="text-gradient">{content.skills.soft.title}</span>
                </h3>
                <ul className="space-y-3">
                  {content.skills.soft.items.map((skill, index) => (
                    <li key={index} className="flex items-start gap-3 group">
                      <div className="w-2 h-2 bg-gradient-accent rounded-full mt-2 group-hover:scale-150 transition-transform"></div>
                      <span className="text-gray-700 dark:text-gray-300 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>

          {/* Projects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gradient">{content.projects.title}</h2>
            <div className="space-y-6">
              {content.projects.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                  className="card p-6 md:p-8 border-l-4 border-gradient-accent hover:shadow-accent-glow transition-all"
                >
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">{item.title}</h3>
                  <p className="text-accent-600 dark:text-accent-400 font-medium mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {item.period}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">{item.description}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <svg className="w-5 h-5 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    <span className="font-medium text-gray-600 dark:text-gray-400">{item.technologies}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gradient">{content.education.title}</h2>
            <div className="space-y-6">
              {content.education.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                  className="card p-6 md:p-8 border-l-4 border-gradient-accent hover:shadow-accent-glow transition-all"
                >
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">{item.degree}</h3>
                  <p className="text-accent-600 dark:text-accent-400 font-medium flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                    {item.institution}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{item.period}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications & Languages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="card p-6 md:p-8 border-l-4 border-gradient-primary hover:shadow-glow transition-all"
              >
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <svg className="w-7 h-7 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gradient">{content.certifications.title}</span>
                </h3>
                <ul className="space-y-4">
                  {content.certifications.items.map((cert, index) => (
                    <li key={index} className="group">
                      <p className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{cert.name}</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{cert.issuer}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                className="card p-6 md:p-8 border-l-4 border-gradient-accent hover:shadow-accent-glow transition-all"
              >
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <svg className="w-7 h-7 text-accent-600 dark:text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                  <span className="text-gradient">{content.languages.title}</span>
                </h3>
                <ul className="space-y-3">
                  {content.languages.items.map((lang, index) => (
                    <li key={index} className="flex justify-between items-center group">
                      <span className="font-medium text-gray-900 dark:text-gray-100 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">{lang.language}</span>
                      <span className="text-gray-600 dark:text-gray-400 text-sm">{lang.level}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
