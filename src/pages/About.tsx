import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const content = {
  en: {
    aboutMe: "About Me",
    whoIAm: "What I Build",
    whoIAmDescription1: "I build scalable web applications with clean architecture and modern cloud technologies. My focus is on backend systems using Java/Spring Boot and React frontends, with a strong emphasis on security, performance, and maintainability.",
    whoIAmDescription2: "Currently developing a low-code multilingual chatbot platform as my final year project - enabling businesses to deploy AI-powered customer support without coding. This combines my expertise in Spring Boot, React, and cloud deployment.",
    whoIAmDescription3: "I'm seeking internship opportunities where I can contribute to production systems, collaborate with experienced engineers, and grow my expertise in enterprise software development.",
    coreSkills: "Core Technologies",
    coreTechnicalSkills: [
      'Java & Spring Boot',
      'React & JavaScript',
      'MySQL & PostgreSQL',
      'Docker & Azure',
      'REST APIs & Microservices',
      'Git & CI/CD',
    ],
    secondarySkills: "Additional Skills",
    secondaryTechnicalSkills: [
      'Python & Django',
      'Spring Security & JWT',
      'Tailwind CSS & Bootstrap',
      'Linux Administration',
      'UML & Agile/Scrum',
      'Oracle Database',
    ],
    whatICareAbout: "What I Care About",
    values: [
      'Clean, maintainable code architecture',
      'Performance optimization & scalability',
      'Security best practices (authentication, authorization, data protection)',
      'DevOps automation & containerization',
      'Continuous learning & staying current with tech trends',
    ],
    experience: "Professional Experience",
    experiences: [
      {
        title: "Full-Stack Developer Intern",
        company: "Agence du Bassin Hydraulique de l'Oum Er-Rbia",
        period: "Aug 2025 - Sep 2025 | Béni Mellal, Morocco",
        description: "Built a water quality monitoring platform with React.js and Django REST. Integrated predictive analytics using OpenWeatherMap API. Reduced manual monitoring time by 60% through automation.",
        achievements: ["Automated 15+ quality parameters", "Implemented JWT authentication", "Built RESTful APIs"]
      },
      {
        title: "Web Developer Intern",
        company: "National School of Commerce and Management",
        period: "Aug 2024 - Sep 2024 | Beni Mellal, Morocco",
        description: "Developed a scheduling and timetable management platform. Optimized database queries reducing load time by 40%. Improved UX with dynamic interface updates.",
        achievements: ["Handled 100+ users", "Optimized database performance", "Enhanced UI/UX"]
      },
      {
        title: "Systems Administrator Intern",
        company: "Agence du Bassin Hydraulique de l'Oum Er-Rbia",
        period: "Apr 2023 | Béni Mellal, Morocco",
        description: "Resolved critical RAID 5 failure on HP ProLiant DL380 G7 server. Restored system availability and implemented backup solution to prevent data loss.",
        achievements: ["Zero downtime after recovery", "Implemented backup strategy", "Server infrastructure management"]
      },
    ],
    education: "Education",
    educations: [
      {
        institution: "École Marocaine des Sciences de l'Ingénieur (EMSI), Rabat",
        degree: "Engineering Degree – Computer & Network Engineering (MIAGE) | Oct 2023 - Present",
        highlight: "Final year project: Low-code multilingual chatbot platform"
      },
      {
        institution: "ALX Academy (Holberton School)",
        degree: "Software Engineering Certificate | Aug 2023 - Mar 2025",
        highlight: "Full-stack development program"
      },
      {
        institution: "Specialized Institute Of Applied Technology NTIC, Beni Mellal",
        degree: "Digital Infrastructure Diploma (Systems & Networks) | Sep 2021 - May 2023",
        highlight: "Systems administration & networking fundamentals"
      },
    ]
  },
  fr: {
    aboutMe: "À propos de moi",
    whoIAm: "Ce que je construis",
    whoIAmDescription1: "Je construis des applications web évolutives avec une architecture propre et des technologies cloud modernes. Je me concentre sur les systèmes backend utilisant Java/Spring Boot et les frontends React, en mettant l'accent sur la sécurité, les performances et la maintenabilité.",
    whoIAmDescription2: "Actuellement en train de développer une plateforme de chatbot multilingue low-code pour mon projet de fin d'études - permettant aux entreprises de déployer un support client alimenté par l'IA sans codage. Cela combine mon expertise en Spring Boot, React et déploiement cloud.",
    whoIAmDescription3: "Je recherche des opportunités de stage où je peux contribuer à des systèmes de production, collaborer avec des ingénieurs expérimentés et développer mon expertise en développement logiciel d'entreprise.",
    coreSkills: "Technologies principales",
    coreTechnicalSkills: [
      'Java & Spring Boot',
      'React & JavaScript',
      'MySQL & PostgreSQL',
      'Docker & Azure',
      'API REST & Microservices',
      'Git & CI/CD',
    ],
    secondarySkills: "Compétences supplémentaires",
    secondaryTechnicalSkills: [
      'Python & Django',
      'Spring Security & JWT',
      'Tailwind CSS & Bootstrap',
      'Administration Linux',
      'UML & Agile/Scrum',
      'Oracle Database',
    ],
    whatICareAbout: "Ce qui me tient à cœur",
    values: [
      'Architecture de code propre et maintenable',
      'Optimisation des performances et évolutivité',
      'Meilleures pratiques de sécurité (authentification, autorisation, protection des données)',
      'Automatisation DevOps et conteneurisation',
      'Apprentissage continu et mise à jour avec les tendances technologiques',
    ],
    experience: "Expérience professionnelle",
    experiences: [
      {
        title: "Stagiaire Développeur Full-Stack",
        company: "Agence du Bassin Hydraulique de l'Oum Er-Rbia",
        period: "Août 2025 - Sept 2025 | Béni Mellal, Maroc",
        description: "Construction d'une plateforme de surveillance de la qualité de l'eau avec React.js et Django REST. Intégration d'analyses prédictives avec l'API OpenWeatherMap. Réduction de 60% du temps de surveillance manuel grâce à l'automatisation.",
        achievements: ["Automatisation de 15+ paramètres", "Authentification JWT", "Construction d'API RESTful"]
      },
      {
        title: "Stagiaire Développeur Web",
        company: "École Nationale de Commerce et de Gestion",
        period: "Août 2024 - Sept 2024 | Beni Mellal, Maroc",
        description: "Développement d'une plateforme de gestion des emplois du temps. Optimisation des requêtes de base de données réduisant le temps de chargement de 40%. Amélioration de l'UX avec des mises à jour d'interface dynamiques.",
        achievements: ["Gestion de 100+ utilisateurs", "Optimisation BD", "Amélioration UI/UX"]
      },
      {
        title: "Stagiaire Administrateur Systèmes",
        company: "Agence du Bassin Hydraulique de l'Oum Er-Rbia",
        period: "Avril 2023 | Béni Mellal, Maroc",
        description: "Résolution d'une panne RAID 5 critique sur un serveur HP ProLiant DL380 G7. Restauration de la disponibilité du système et mise en place d'une solution de sauvegarde.",
        achievements: ["Zéro temps d'arrêt après récupération", "Stratégie de sauvegarde", "Gestion infrastructure serveur"]
      },
    ],
    education: "Éducation",
    educations: [
      {
        institution: "École Marocaine des Sciences de l'Ingénieur (EMSI), Rabat",
        degree: "Diplôme d'Ingénieur – Informatique et Réseaux (MIAGE) | Oct 2023 - Présent",
        highlight: "Projet de fin d'études : Plateforme chatbot multilingue low-code"
      },
      {
        institution: "ALX Academy (Holberton School)",
        degree: "Certificat en Génie Logiciel | Août 2023 - Mars 2025",
        highlight: "Programme de développement full-stack"
      },
      {
        institution: "Institut Spécialisé de Technologie Appliquée NTIC, Beni Mellal",
        degree: "Diplôme en Infrastructure Digitale (Systèmes et Réseaux) | Sept 2021 - Mai 2023",
        highlight: "Administration systèmes et fondamentaux réseaux"
      },
    ]
  },
};

const About = () => {
  const { language } = useLanguage();
  const { aboutMe, whoIAm, whoIAmDescription1, whoIAmDescription2, whoIAmDescription3, coreSkills, coreTechnicalSkills, secondarySkills, secondaryTechnicalSkills, whatICareAbout, values, experience, experiences, education, educations } = content[language];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  };

  return (
    <section className="relative py-20 min-h-screen">
      {/* Decorative Background Elements */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-primary-400/5 rounded-full blur-2xl pointer-events-none"></div>
      <div className="absolute bottom-40 left-0 w-96 h-96 bg-accent-400/5 rounded-full blur-2xl pointer-events-none"></div>
      
      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-title text-center mb-16"
          >
            {aboutMe}
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-20"
          >
            <div className="card p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">{whoIAm}</h2>
              <div className="space-y-4 text-lg">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {whoIAmDescription1}
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {whoIAmDescription2}
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {whoIAmDescription3}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-20"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="card p-8"
              >
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <svg className="w-7 h-7 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-gradient">{coreSkills}</span>
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {coreTechnicalSkills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      custom={index}
                      variants={fadeIn}
                      initial="initial"
                      animate="animate"
                      className="flex items-center gap-2 p-3 rounded-lg bg-primary-50/50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 hover:scale-105 transition-transform"
                    >
                      <svg className="w-4 h-4 text-primary-600 dark:text-primary-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="card p-8"
              >
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <svg className="w-7 h-7 text-accent-600 dark:text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  <span className="text-gradient">{secondarySkills}</span>
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {secondaryTechnicalSkills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      custom={index}
                      variants={fadeIn}
                      initial="initial"
                      animate="animate"
                      className="flex items-center gap-2 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform"
                    >
                      <div className="w-2 h-2 bg-accent-500 rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-gray-700 dark:text-gray-300">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
            
            {/* What I Care About */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="card p-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-center text-gradient">{whatICareAbout}</h3>
              <ul className="grid md:grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <motion.li
                    key={value}
                    custom={index}
                    variants={fadeIn}
                    initial="initial"
                    animate="animate"
                    className="flex items-start gap-3 group"
                  >
                    <svg className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">{value}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gradient">{experience}</h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                  className="card p-6 md:p-8 border-l-4 border-primary-500 hover:shadow-glow transition-all"
                >
                  <div className="mb-2">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100">{exp.title}</h3>
                    <p className="text-sm font-semibold text-primary-600 dark:text-primary-400 mt-1">{exp.company}</p>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium mb-3 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {exp.period}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  {exp.achievements && exp.achievements.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {exp.achievements.map((achievement, idx) => (
                        <span key={idx} className="inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {achievement}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gradient">{education}</h2>
            <div className="space-y-6">
              {educations.map((edu, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                  className="card p-6 md:p-8 border-l-4 border-accent-500 hover:shadow-accent-glow transition-all"
                >
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">{edu.institution}</h3>
                  <p className="text-accent-600 dark:text-accent-400 font-medium flex items-center gap-2 mb-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                    {edu.degree}
                  </p>
                  {edu.highlight && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                      • {edu.highlight}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
