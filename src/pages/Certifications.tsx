import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const content = {
  en: {
    myCertifications: "My Certifications",
    showCredential: "Show Credential",
    certifications: [
      {
        id: 1,
        title: "Oracle Database Administration",
        issuer: "Oracle",
        date: "Sep 2025",
        description: "Comprehensive training in core Oracle Database Administration, covering user, role, privilege, and password management, as well as backup and recovery strategies.",
        pdfLink: "https://linkedin.com/in/abderrahmane-kassimi"
      },
      {
        id: 2,
        title: "Microsoft Certified: Azure Fundamentals",
        issuer: "Microsoft",
        date: "Jul 2024",
        description: "Validation of foundational knowledge in cloud concepts and Microsoft Azure services, workloads, security, and governance.",
        pdfLink: "https://linkedin.com/in/abderrahmane-kassimi"
      },
      {
        id: 3,
        title: "Programming for Everybody (Getting Started with Python)",
        issuer: "University of Michigan",
        date: "Mar 2024",
        description: "Fundamental Python programming concepts, including variables, functions, conditionals, and loops.",
        pdfLink: "https://linkedin.com/in/abderrahmane-kassimi"
      },
      {
        id: 4,
        title: "Software Engineering: Software Design and Project Management",
        issuer: "HKUST",
        date: "Mar 2024",
        description: "Acquired skills in software design principles, project management methodologies, and development lifecycle processes.",
        pdfLink: "https://linkedin.com/in/abderrahmane-kassimi"
      },
      {
        id: 5,
        title: "The Unix Workbench",
        issuer: "Johns Hopkins University",
        date: "Mar 2024",
        description: "In-depth knowledge of Unix/Linux operating systems, shell scripting, bash programming, and command-line tools.",
        pdfLink: "https://linkedin.com/in/abderrahmane-kassimi"
      },
      {
        id: 6,
        title: "SQL",
        issuer: "University of Colorado Boulder",
        date: "Jan 2024",
        description: "Expertise in database design, SQL query writing, and data manipulation techniques for relational database systems.",
        pdfLink: "https://linkedin.com/in/abderrahmane-kassimi"
      },
      {
        id: 7,
        title: "Interactivity with JavaScript",
        issuer: "University of Michigan",
        date: "Dec 2023",
        description: "Proficiency in creating interactive web experiences using JavaScript, DOM manipulation, and event handling.",
        pdfLink: "https://linkedin.com/in/abderrahmane-kassimi"
      },
      {
        id: 8,
        title: "Introduction to CSS3",
        issuer: "University of Michigan",
        date: "Dec 2023",
        description: "Skills in creating responsive web layouts, styling web pages, and implementing modern CSS techniques.",
        pdfLink: "https://linkedin.com/in/abderrahmane-kassimi"
      },
      {
        id: 9,
        title: "Introduction to HTML5",
        issuer: "University of Michigan",
        date: "Dec 2023",
        description: "Mastery of core HTML5 concepts, including semantic markup, form elements, and multimedia integration.",
        pdfLink: "https://linkedin.com/in/abderrahmane-kassimi"
      },
      {
        id: 10,
        title: "Introduction to Object-Oriented Programming (in C++)",
        issuer: "EPFL",
        date: "Dec 2023",
        description: "Understanding of object-oriented programming concepts in C++, including classes, inheritance, polymorphism, and memory management.",
        pdfLink: "https://linkedin.com/in/abderrahmane-kassimi"
      },
      {
        id: 11,
        title: "Web Design for Everybody Capstone",
        issuer: "University of Michigan",
        date: "Dec 2023",
        description: "Completed an applied web design project showcasing proficiency in HTML5, CSS3, JavaScript, and responsive design principles.",
        pdfLink: "https://linkedin.com/in/abderrahmane-kassimi"
      },
      {
        id: 12,
        title: "Cloud Foundations",
        issuer: "Great Learning",
        date: "Oct 2023",
        description: "Essential knowledge of cloud computing concepts, service models, and major cloud platforms.",
        pdfLink: "https://linkedin.com/in/abderrahmane-kassimi"
      },
      {
        id: 13,
        title: "Python Essentials 1",
        issuer: "Cisco",
        date: "Oct 2023",
        description: "Fundamentals of Python programming with a focus on scripting, automation, and backend tasks.",
        pdfLink: "https://linkedin.com/in/abderrahmane-kassimi"
      },
      {
        id: 14,
        title: "Python Essentials 2",
        issuer: "Cisco",
        date: "Oct 2023",
        description: "Advanced Python programming concepts, including OOP, data structures, and application development.",
        pdfLink: "https://linkedin.com/in/abderrahmane-kassimi"
      },
      {
        id: 15,
        title: "Introduction to Machine Learning US",
        issuer: "Great Learning",
        date: "Sep 2023",
        description: "Fundamentals of machine learning algorithms, model training, and data preparation techniques.",
        pdfLink: "https://linkedin.com/in/abderrahmane-kassimi"
      },
      {
        id: 16,
        title: "PCAP: Programming Essentials in Python",
        issuer: "Cisco",
        date: "Oct 2022",
        description: "Professional-level Python programming skills, including data structures, modules, packages, and OOP.",
        pdfLink: "https://linkedin.com/in/abderrahmane-kassimi"
      },
      {
        id: 17,
        title: "CCNA: Bridging",
        issuer: "Cisco",
        date: "Jun 2022",
        description: "Networking fundamentals, including bridging and network infrastructure configuration.",
        pdfLink: "https://linkedin.com/in/abderrahmane-kassimi"
      },
      {
        id: 18,
        title: "CCNA: Introduction to Networks",
        issuer: "Cisco",
        date: "Jun 2022",
        description: "Covers foundational networking concepts, including IP addressing, switching, and routing basics.",
        pdfLink: "https://linkedin.com/in/abderrahmane-kassimi"
      },
      {
        id: 19,
        title: "CCNA: Switching, Routing, and Wireless Essentials",
        issuer: "Cisco",
        date: "Jun 2022",
        description: "Training in switching technologies, routing protocols, and wireless network configuration.",
        pdfLink: "https://linkedin.com/in/abderrahmane-kassimi"
      },
      {
        id: 20,
        title: "Microsoft Office Specialist: Master 2016",
        issuer: "Microsoft",
        date: "Jun 2022",
        description: "Advanced mastery certification of Microsoft Office 2016 applications, including Word, Excel, PowerPoint, and Access.",
        pdfLink: "https://linkedin.com/in/abderrahmane-kassimi"
      },
      {
        id: 21,
        title: "HTML Fundamentals",
        issuer: "Almdrasa",
        date: "2023",
        description: "Core HTML concepts, including document structure, elements, attributes, and best practices.",
        pdfLink: "https://linkedin.com/in/abderrahmane-kassimi"
      }
    ],
  },
  fr: {
    myCertifications: "Mes Certifications",
    showCredential: "Voir la certification",
    certifications: [
      {
        id: 1,
        title: "Administration de base de données Oracle",
        issuer: "Oracle",
        date: "Sept 2025",
        description: "Formation complète à l\'administration de base de données Oracle, couvrant la gestion des utilisateurs, des rôles, des privilèges et des mots de passe, ainsi que les stratégies de sauvegarde et de récupération.",
        pdfLink: "https://linkedin.com/in/abderrahmane-kassimi"
      },
      {
        id: 2,
        title: "Microsoft Certified: Azure Fundamentals",
        issuer: "Microsoft",
        date: "Juil 2024",
        description: "Validation des connaissances fondamentales sur les concepts du cloud et les services, les charges de travail, la sécurité et la gouvernance de Microsoft Azure.",
        pdfLink: "https://linkedin.com/in/abderrahmane-kassimi"
      },
      {
        id: 3,
        title: "La programmation pour tous (Débuter avec Python)",
        issuer: "University of Michigan",
        date: "Mar 2024",
        description: "Concepts fondamentaux de la programmation en Python, y compris les variables, les fonctions, les conditions et les boucles.",
        pdfLink: "https://linkedin.com/in/abderrahmane-kassimi"
      },
      {
        id: 4,
        title: "Génie logiciel : conception de logiciels et gestion de projets",
        issuer: "HKUST",
        date: "Mar 2024",
        description: "Acquisition de compétences en matière de principes de conception de logiciels, de méthodologies de gestion de projet et de processus de cycle de vie du développement.",
        pdfLink: "https://linkedin.com/in/abderrahmane-kassimi"
      },
      {
        id: 5,
        title: "The Unix Workbench",
        issuer: "Johns Hopkins University",
        date: "Mar 2024",
        description: "Connaissance approfondie des systèmes d\'exploitation Unix/Linux, des scripts shell, de la programmation bash et des outils de ligne de commande.",
        pdfLink: "https://linkedin.com/in/abderrahmane-kassimi"
      },
      {
        id: 6,
        title: "SQL",
        issuer: "University of Colorado Boulder",
        date: "Jan 2024",
        description: "Expertise en conception de bases de données, en écriture de requêtes SQL et en techniques de manipulation de données pour les systèmes de bases de données relationnelles.",
        pdfLink: "https://linkedin.com/in/abderrahmane-kassimi"
      },
      {
        id: 7,
        title: "Interactivité avec JavaScript",
        issuer: "University of Michigan",
        date: "Déc 2023",
        description: "Maîtrise de la création d\'expériences Web interactives à l\'aide de JavaScript, de la manipulation DOM et de la gestion d\'événements.",
        pdfLink: "https://linkedin.com/in/abderrahmane-kassimi"
      },
      {
        id: 8,
        title: "Introduction à CSS3",
        issuer: "University of Michigan",
        date: "Déc 2023",
        description: "Compétences en création de mises en page Web réactives, en stylisation de pages Web et en mise en œuvre de techniques CSS modernes.",
        pdfLink: "https://linkedin.com/in/abderrahmane-kassimi"
      },
      {
        id: 9,
        title: "Introduction à HTML5",
        issuer: "University of Michigan",
        date: "Déc 2023",
        description: "Maîtrise des concepts de base de HTML5, notamment le balisage sémantique, les éléments de formulaire et l\'intégration multimédia.",
        pdfLink: "https://linkedin.com/in/abderrahmane-kassimi"
      },
      {
        id: 10,
        title: "Introduction à la programmation orientée objet (en C++)",
        issuer: "EPFL",
        date: "Déc 2023",
        description: "Compréhension des concepts de la programmation orientée objet en C++, y compris les classes, l\'héritage, le polymorphisme et la gestion de la mémoire.",
        pdfLink: "https://linkedin.com/in/abderrahmane-kassimi"
      },
      {
        id: 11,
        title: "Web Design for Everybody Capstone",
        issuer: "University of Michigan",
        date: "Déc 2023",
        description: "Réalisation d\'un projet de conception Web appliquée démontrant la maîtrise de HTML5, CSS3, JavaScript et des principes de conception réactive.",
        pdfLink: "https://linkedin.com/in/abderrahmane-kassimi"
      },
      {
        id: 12,
        title: "Fondamentaux du cloud",
        issuer: "Great Learning",
        date: "Oct 2023",
        description: "Connaissance essentielle des concepts du cloud computing, des modèles de service et des principales plateformes cloud.",
        pdfLink: "https://linkedin.com/in/abderrahmane-kassimi"
      },
      {
        id: 13,
        title: "Python Essentials 1",
        issuer: "Cisco",
        date: "Oct 2023",
        description: "Les bases de la programmation Python avec un accent sur les scripts, l\'automatisation et les tâches backend.",
        pdfLink: "https://linkedin.com/in/abderrahmane-kassimi"
      },
      {
        id: 14,
        title: "Python Essentials 2",
        issuer: "Cisco",
        date: "Oct 2023",
        description: "Concepts avancés de la programmation Python, y compris la POO, les structures de données et le développement d\'applications.",
        pdfLink: "https://linkedin.com/in/abderrahmane-kassimi"
      },
      {
        id: 15,
        title: "Introduction à l\'apprentissage automatique US",
        issuer: "Great Learning",
        date: "Sept 2023",
        description: "Principes de base des algorithmes d\'apprentissage automatique, de la formation de modèles et des techniques de préparation des données.",
        pdfLink: "https://linkedin.com/in/abderrahmane-kassimi"
      },
      {
        id: 16,
        title: "PCAP : les bases de la programmation en Python",
        issuer: "Cisco",
        date: "Oct 2022",
        description: "Compétences en programmation Python de niveau professionnel, y compris les structures de données, les modules, les packages et la POO.",
        pdfLink: "https://linkedin.com/in/abderrahmane-kassimi"
      },
      {
        id: 17,
        title: "CCNA: Bridging",
        issuer: "Cisco",
        date: "Juin 2022",
        description: "Les bases des réseaux, y compris la configuration de ponts et d\'infrastructures réseau.",
        pdfLink: "https://linkedin.com/in/abderrahmane-kassimi"
      },
      {
        id: 18,
        title: "CCNA : Introduction aux réseaux",
        issuer: "Cisco",
        date: "Juin 2022",
        description: "Couvre les concepts de base des réseaux, y compris l\'adressage IP, la commutation et les bases du routage.",
        pdfLink: "https://linkedin.com/in/abderrahmane-kassimi"
      },
      {
        id: 19,
        title: "CCNA : les bases de la commutation, du routage et du sans-fil",
        issuer: "Cisco",
        date: "Juin 2022",
        description: "Formation aux technologies de commutation, aux protocoles de routage et à la configuration de réseaux sans fil.",
        pdfLink: "https://linkedin.com/in/abderrahmane-kassimi"
      },
      {
        id: 20,
        title: "Microsoft Office Specialist : Master 2016",
        issuer: "Microsoft",
        date: "Juin 2022",
        description: "Certification de maîtrise avancée des applications Microsoft Office 2016, y compris Word, Excel, PowerPoint et Access.",
        pdfLink: "https://linkedin.com/in/abderrahmane-kassimi"
      },
      {
        id: 21,
        title: "Principes de base de HTML",
        issuer: "Almdrasa",
        date: "2023",
        description: "Concepts de base de HTML, y compris la structure des documents, les éléments, les attributs et les meilleures pratiques.",
        pdfLink: "https://linkedin.com/in/abderrahmane-kassimi"
      }
    ],
  },
};

const Certifications = () => {
  const { language } = useLanguage();
  const { myCertifications, showCredential, certifications } = content[language];

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
          {myCertifications}
        </motion.h1>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certifications.map((cert) => (
            <motion.div 
              key={cert.id} 
              variants={item} 
              className="card group flex flex-col overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              {/* Certificate Header */}
              <div className="relative h-48 bg-gradient-to-br from-primary-500/20 to-accent-500/20 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center flex-col gap-3 p-6 text-center bg-gradient-primary">
                  <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-white/90 drop-shadow-lg">{cert.issuer}</span>
                </div>
                
                {/* Date Badge */}
                <div className="absolute bottom-4 right-4">
                  <span className="px-3 py-1.5 text-xs font-medium bg-white/90 dark:bg-gray-900/90 text-gray-700 dark:text-gray-300 backdrop-blur-sm rounded-full shadow-lg flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {cert.date}
                  </span>
                </div>
              </div>

              {/* Certificate Content */}
              <div className="p-6 flex flex-col flex-grow bg-gradient-to-b from-transparent to-primary-50/30 dark:to-primary-950/10">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100 group-hover:text-gradient transition-all">
                  {cert.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6 flex-grow leading-relaxed text-sm">
                  {cert.description}
                </p>
                
                {/* Action Button */}
                <div className="mt-auto">
                  {cert.pdfLink && (
                    <a
                      href={cert.pdfLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary w-full py-2.5 text-sm group/btn"
                    >
                      <svg className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      {showCredential}
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

export default Certifications;
