import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const content = {
  en: {
    aboutMe: "About Me",
    whoIAm: "Who I Am",
    whoIAmDescription1: "Through my academic background and professional experiences, I have cultivated strong skills in programming (Java, C, C++, C#), Windows/Linux administration, and cloud & virtualized infrastructure management.",
    whoIAmDescription2: "Passionate about automation and Continuous Integration/Deployment (CI/CD), I also possess solid knowledge of databases, Agile methodologies (SCRUM), and collaborative tools (Git, GitHub, Azure, VMware, PowerBI).",
    whoIAmDescription3: "Versatile and motivated, I am fluent in French and English, and I am committed to upholding security, quality, and efficiency in every project I contribute to.",
    mySkills: "My Skills",
    technicalSkills: [
      'Network & System Administration (Unix/Linux, Windows)',
      'Programming: Java, Python, C, C++, C#, PHP, JavaScript, HTML, CSS',
      'Frameworks: Spring Boot, React.js, Django, Eel, ASP.NET',
      'Databases: Oracle, Microsoft SQL Server',
      'UML & Merise Modeling',
      'SCRUM Methodologies & GitHub Collaboration',
      'Tools: Git, Shell, SqlPlus, SSMS, VS Code, PyCharm, Geany, IntelliJ IDEA',
      'Virtualization & Cloud: VMware, Azure, Docker',
      'PowerBI & Data Analysis',
    ],
    softSkills: ['Teamwork', 'Time Management', 'Adaptability'],
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
        institution: "Ecole Marocaine des Sciences de l\'Ingénieur (EMSI)",
        degree: "Engineer’s Degree – Computer & Network Engineering | 2023 - Present",
      },
      {
        institution: "ALX Academy",
        degree: "Software Engineering Program | 2023 - 2025",
      },
      {
        institution: "Specialized Institute Of Applied Technology NTIC",
        degree: "Associate’s Degree – Digital Infrastructure Systems & Networks | 2021 - 2023",
      },
      {
        institution: "Mohamed V Technical High School",
        degree: "Baccalaureate – Computers & Networks Maintenance | 2020 - 2021",
      },
    ],
  },
  fr: {
    aboutMe: "À propos de moi",
    whoIAm: "Qui je suis",
    whoIAmDescription1: "Grâce à mon parcours académique et mes expériences professionnelles, j\'ai cultivé de solides compétences en programmation (Java, C, C++, C#), en administration Windows/Linux, et en gestion d\'infrastructures cloud et virtualisées.",
    whoIAmDescription2: "Passionate about automation and Continuous Integration/Deployment (CI/CD), I also possess solid knowledge of databases, Agile methodologies (SCRUM), and collaborative tools (Git, GitHub, Azure, VMware, PowerBI).",
    whoIAmDescription3: "Polyvalent et motivé, je parle couramment le français et l\'anglais, et je m\'engage à respecter la sécurité, la qualité et l\'efficacité dans chaque projet auquel je contribue.",
    mySkills: "Mes compétences",
    technicalSkills: [
      "Administration Réseau & Système (Unix/Linux, Windows)",
      "Programmation : Java, Python, C, C++, C#, PHP, JavaScript, HTML, CSS",
      "Frameworks : Spring Boot, React.js, Django, Eel, ASP.NET",
      "Bases de données : Oracle, Microsoft SQL Server",
      "Modélisation UML & Merise",
      "Méthodologies SCRUM & Collaboration GitHub",
      "Outils : Git, Shell, SqlPlus, SSMS, VS Code, PyCharm, Geany, IntelliJ IDEA",
      "Virtualisation & Cloud : VMware, Azure, Docker",
      "PowerBI & Analyse de données",
    ],
    softSkills: ["Travail d\'équipe", "Gestion du temps", "Adaptabilité"],
    experience: "Expérience",
    experiences: [
      {
        title: "Stagiaire Développeur Web – Agence du Bassin Hydraulique de l\'Oum Er-Rbia",
        period: "Août 2025 - Sept 2025 | Béni Mellal, Maroc",
        description: "Création d\'une application web pour la cartographie interactive, le suivi et l\'analyse prédictive en utilisant React.js, Django REST, des modèles d\'IA et l\'API OpenWeatherMap.",
      },
      {
        title: "Stagiaire Développeur Web – École Nationale de Commerce et de Gestion",
        period: "Août 2024 - Sept 2024 | Beni Mellal, Maroc",
        description: "Développement d\'une plateforme de gestion des emplois du temps et des horaires avec une interface utilisateur dynamique et des performances de base de données optimisées.",
      },
      {
        title: "Stagiaire Administrateur Système – Agence du Bassin Hydraulique de l\'Oum Er-Rbia",
        period: "Avril 2023 | Béni Mellal, Maroc",
        description: "Résolution d\'une panne de serveur RAID 5 sur un HP ProLiant DL380 G7, restauration de la disponibilité et mise en œuvre d\'une solution de sauvegarde.",
      },
      {
        title: "Stagiaire Adjoint Administratif – Institut Spécialisé de Technologie Appliquée NTIC",
        period: "Juillet 2022 - Sept 2022 | Beni Mellal, Maroc",
        description: "Gestion des processus d\'inscription, mise à jour des bases de données et assistance aux stagiaires.",
      },
    ],
    education: "Éducation",
    educations: [
      {
        institution: "Ecole Marocaine des Sciences de l\'Ingénieur (EMSI)",
        degree: "Diplôme d\'Ingénieur – Ingénierie Informatique & Réseaux | 2023 - Présent",
      },
      {
        institution: "ALX Academy",
        degree: "Programme de Génie Logiciel | 2023 - 2025",
      },
      {
        institution: "Institut Spécialisé de Technologie Appliquée NTIC",
        degree: "Diplôme d\'associé – Systèmes et Réseaux d\'Infrastructure Numérique | 2021 - 2023",
      },
      {
        institution: "Lycée Technique Mohamed V",
        degree: "Baccalauréat – Maintenance des Ordinateurs et des Réseaux | 2020 - 2021",
      },
    ],
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
    <section className="py-20">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-8 text-center"
          >
            {aboutMe}
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-4">{whoIAm}</h2>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              {whoIAmDescription1}
            </p>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              {whoIAmDescription2}
            </p>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              {whoIAmDescription3}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-6 text-center">{mySkills}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-4 text-primary">Technical Skills</h3>
                <ul className="space-y-2">
                  {technicalSkills.map((skill, index) => (
                    <motion.li
                      key={skill}
                      custom={index}
                      variants={fadeIn}
                      initial="initial"
                      animate="animate"
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-gray-600 dark:text-gray-300">{skill}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-4 text-primary">Soft Skills</h3>
                <ul className="space-y-2">
                  {softSkills.map((skill, index) => (
                    <motion.li
                      key={skill}
                      custom={index}
                      variants={fadeIn}
                      initial="initial"
                      animate="animate"
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-gray-600 dark:text-gray-300">{skill}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-6 text-center">{experience}</h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="border-l-4 border-primary pl-4 py-2">
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400">{exp.period}</p>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-center">{education}</h2>
            <div className="space-y-6">
              {educations.map((edu, index) => (
                <div key={index} className="border-l-4 border-primary pl-4 py-2">
                  <h3 className="text-xl font-bold">{edu.institution}</h3>
                  <p className="text-gray-500 dark:text-gray-400">{edu.degree}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
