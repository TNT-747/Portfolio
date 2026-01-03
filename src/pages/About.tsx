import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const content = {
  en: {
    aboutMe: "About Me",
    whoIAm: "Who I Am",
    whoIAmDescription1: "5th-year engineering student at École Marocaine des Sciences de l'Ingénieur (EMSI) specializing in MIAGE, passionate about Full Stack development and building robust solutions.",
    whoIAmDescription2: "Specialized in web application development with Java/Spring Boot, React, and Python/Django. Expert in REST APIs, SQL databases, and Docker containerization. I thrive in Agile/Scrum environments.",
    whoIAmDescription3: "Versatile and motivated, I am fluent in French and English, and I am committed to upholding security, quality, and efficiency in every project I contribute to.",
    mySkills: "My Skills",
    technicalSkills: [
      'Backend: Java, Spring Boot, JPA/Hibernate, REST APIs',
      'Frontend: React, JavaScript, HTML/CSS, Tailwind CSS',
      'Python: Django, Pandas',
      'Databases: MySQL, PostgreSQL, SQL Server, Oracle',
      'DevOps/Cloud: Docker, Azure Fundamentals, Git/GitHub, Linux',
      'Tools: Postman, Maven, IntelliJ IDEA, VS Code, PyCharm',
      'Methods: UML, Merise, Agile/Scrum',
    ],
    softSkills: ['Analytical Thinking', 'Collaborative Work', 'Time Management', 'Adaptability'],
    experience: "Experience",
    experiences: [
      {
        title: "Web Developer Intern – Agence du Bassin Hydraulique de l\'Oum Er-Rbia",
        period: "Aug 2025 - Sep 2025 | Béni Mellal, Morocco",
        description: "Built a web application for interactive mapping, monitoring, and predictive analytics using React.js, Django REST, AI models, and the OpenWeatherMap API.",
      },
      {
        title: "Web Developer Intern – National School of Commerce and Management",
        period: "Aug 2024 - Sep 2024 | Beni Mellal, Morocco",
        description: "Developed a scheduling and timetable management platform with a dynamic UI and optimized database performance.",
      },
      {
        title: "System Administrator Intern – Agence du Bassin Hydraulique de l\'Oum Er-Rbia",
        period: "Apr 2023 | Béni Mellal, Morocco",
        description: "Resolved a RAID 5 server failure on an HP ProLiant DL380 G7, restored availability, and implemented a backup solution.",
      },
      {
        title: "Administrative Assistant Intern – Specialized Institute Of Applied Technology NTIC",
        period: "Jul 2022 - Sep 2022 | Beni Mellal, Morocco",
        description: "Handled registration processes, updated databases, and provided trainee support.",
      },
    ],
    education: "Education",
    educations: [
      {
        institution: "École Marocaine des Sciences de l'Ingénieur (EMSI), Rabat",
        degree: "Engineering Degree – Computer & Network Engineering (MIAGE Option) | Oct 2023 - Present",
      },
      {
        institution: "ALX Academy (Holberton School)",
        degree: "Software Engineering Certificate | Aug 2023 - Mar 2025",
      },
      {
        institution: "Specialized Institute Of Applied Technology NTIC, Beni Mellal",
        degree: "Digital Infrastructure Diploma (Systems & Networks) | Sep 2021 - May 2023",
      },
      {
        institution: "Mohamed V Technical High School, Beni Mellal",
        degree: "Baccalaureate – Computer & Network Maintenance | Sep 2020 - Jul 2021",
      },
    ]
  },
  fr: {
    aboutMe: "À propos de moi",
    whoIAm: "Qui je suis",
    whoIAmDescription1: "Étudiant ingénieur en 5ème année à l'École Marocaine des Sciences de l'Ingénieur (EMSI) option MIAGE, je suis passionné par le développement Full Stack et la création de solutions robustes.",
    whoIAmDescription2: "Spécialisé en développement d'applications web avec Java/Spring Boot, React et Python/Django. Expert en API REST, bases de données SQL et conteneurisation Docker. Je m'épanouis dans un environnement Agile/Scrum.",
    whoIAmDescription3: "Polyvalent et motivé, je parle couramment le français et l\'anglais, et je m\'engage à respecter la sécurité, la qualité et l\'efficacité dans chaque projet auquel je contribue.",
    mySkills: "Mes compétences",
    technicalSkills: [
      "Backend : Java, Spring Boot, JPA/Hibernate, API REST",
      "Frontend : React, JavaScript, HTML/CSS, Tailwind CSS",
      "Python : Django, Pandas",
      "Bases de données : MySQL, PostgreSQL, SQL Server, Oracle",
      "DevOps/Cloud : Docker, Azure Fundamentals, Git/GitHub, Linux",
      "Outils : Postman, Maven, IntelliJ IDEA, VS Code, PyCharm",
      "Méthodes : UML, Merise, Agile/Scrum",
    ],
    softSkills: ["Esprit d'analyse", "Travail collaboratif", "Gestion du temps", "Adaptabilité"],
    experience: "Expérience",
    experiences: [
      {
        title: "Stagiaire Développeur Full Stack (Django/React) – Agence du Bassin Hydraulique de l'Oum Er-Rbia",
        period: "Août 2025 - Sept 2025 | Béni Mellal, Maroc",
        description: "Conception d'une application web de suivi hydrologique avec cartographie et tableaux de bord. Intégration front/back, fonctionnalités CRUD et structuration des API. Stack : Python, Django, React.js, SQLite, Git/GitHub.",
      },
      {
        title: "Stagiaire Développeur Web (PHP/JavaScript) – École Nationale de Commerce et de Gestion (ENCG)",
        period: "Août 2024 - Sept 2024 | Beni Mellal, Maroc",
        description: "Optimisation et automatisation d'une plateforme de gestion des emplois du temps. Amélioration de l'ergonomie et correction d'anomalies fonctionnelles. Stack : PHP, JavaScript, HTML5/CSS3, MySQL, XAMPP.",
      },
      {
        title: "Stagiaire Infrastructure & Réseaux – Agence du Bassin Hydraulique de l'Oum Er-Rbia",
        period: "Avril 2022 - Mai 2022 | Béni Mellal, Maroc",
        description: "Assistance à l'administration système, maintenance du parc informatique et support utilisateurs.",
      },
    ],
    education: "Éducation",
    educations: [
      {
        institution: "École Marocaine des Sciences de l'Ingénieur (EMSI), Rabat",
        degree: "Diplôme d'Ingénieur – Informatique et Réseaux (Option MIAGE) | Oct 2023 - Présent",
      },
      {
        institution: "ALX Academy (Holberton School)",
        degree: "Certificat en Génie Logiciel | Août 2023 - Mars 2025",
      },
      {
        institution: "Institut Spécialisé de Technologie Appliquée NTIC, Beni Mellal",
        degree: "Diplôme en Infrastructure Digitale (Systèmes et Réseaux) | Sept 2021 - Mai 2023",
      },
      {
        institution: "Lycée Technique Mohamed V, Beni Mellal",
        degree: "Baccalauréat – Maintenance Informatique et Réseaux | Sept 2020 - Juil 2021",
      },
    ]
  },
};

const About = () => {
  const { language } = useLanguage();
  const { aboutMe, whoIAm, whoIAmDescription1, whoIAmDescription2, whoIAmDescription3, mySkills, technicalSkills, softSkills, experience, experiences, education, educations } = content[language];

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
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gradient">{mySkills}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="card p-8"
              >
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <svg className="w-7 h-7 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  <span className="text-gradient">Technical Skills</span>
                </h3>
                <ul className="space-y-3">
                  {technicalSkills.map((skill, index) => (
                    <motion.li
                      key={skill}
                      custom={index}
                      variants={fadeIn}
                      initial="initial"
                      animate="animate"
                      className="flex items-start gap-3 group"
                    >
                      <div className="w-2 h-2 bg-gradient-primary rounded-full mt-2 group-hover:scale-150 transition-transform"></div>
                      <span className="text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{skill}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="card p-8"
              >
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <svg className="w-7 h-7 text-accent-600 dark:text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="text-gradient">Soft Skills</span>
                </h3>
                <ul className="space-y-3">
                  {softSkills.map((skill, index) => (
                    <motion.li
                      key={skill}
                      custom={index}
                      variants={fadeIn}
                      initial="initial"
                      animate="animate"
                      className="flex items-start gap-3 group"
                    >
                      <div className="w-2 h-2 bg-gradient-accent rounded-full mt-2 group-hover:scale-150 transition-transform"></div>
                      <span className="text-gray-700 dark:text-gray-300 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">{skill}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
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
                  className="card p-6 md:p-8 border-l-4 border-gradient-primary hover:shadow-glow transition-all"
                >
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">{exp.title}</h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {exp.period}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>
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
                  className="card p-6 md:p-8 border-l-4 border-gradient-accent hover:shadow-accent-glow transition-all"
                >
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">{edu.institution}</h3>
                  <p className="text-accent-600 dark:text-accent-400 font-medium flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                    {edu.degree}
                  </p>
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
