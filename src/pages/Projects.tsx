import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  link?: string;
  github?: string;
  period?: string;
}

const Projects = () => {
  // User's actual projects
  const projects: Project[] = [
    {
      id: 1,
      title: "Java OOP Project - Dental Office Management",
      description: "Development of a dental office management system with complete patient tracking, appointment scheduling, and billing features.",
      tags: ["Java", "Swing", "UML", "Maven", "IntelliJ IDEA"],
      period: "December 2024 - January 2025",
      github: "https://github.com/kassi-12/dental-office-java"
    },
    {
      id: 2,
      title: "ASP.NET Core MVC Project - Dental Office Management",
      description: "Web-based dental office management system with modern architecture and responsive UI.",
      tags: ["C#", "ReactJS", "SQL", "MVC", "SSMS", "Visual Studio"],
      period: "December 2024 - January 2025",
      github: "https://github.com/kassi-12/dental-office-aspnet"
    },
    {
      id: 3,
      title: "Restaurant Management System (PFA)",
      description: "Complete restaurant management system with order tracking, inventory management, and reporting features.",
      tags: ["Python", "Django", "SQLite", "Tkinter", "VS Code"],
      period: "May 2024 - June 2024",
      github: "https://github.com/kassi-12/restaurant-management"
    },
    {
      id: 4,
      title: "Android Bus Ticket Application",
      description: "Mobile app for managing and booking bus tickets with features for user accounts, seat selection, payment processing, and ticket confirmation.",
      tags: ["Java", "Android", "XML", "SQLite", "Android Studio"],
      period: "April 2024 - May 2024",
      github: "https://github.com/kassi-12/android-bus-ticket"
    },
    {
      id: 5,
      title: "Bill Management",
      description: "C++ application for invoice management with classes for Product, Client, Invoice; includes data persistence and calculation features.",
      tags: ["C++", "OOP", "Data Persistence"],
      github: "https://github.com/kassi-12/bill-management"
    },
    {
      id: 6,
      title: "Finger Vein Biometric Identification with Fused CNNs",
      description: "Biometric identification system using advanced CNN architecture for secure authentication through finger vein patterns.",
      tags: ["CNNs", "Biometrics", "Machine Learning", "Security"],
      github: "https://github.com/kassi-12/finger-vein-biometric"
    },
    {
      id: 7,
      title: "Gestion des Parcs de Jeux",
      description: "C++ amusement park management system using object-oriented programming, with features for game tracking and CSV export.",
      tags: ["C++", "OOP", "CSV Export", "Management System"],
      github: "https://github.com/kassi-12/park-management"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
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
          My Projects
        </motion.h1>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={item} className="card group">
              <div className="h-60 bg-gray-200 dark:bg-gray-800 overflow-hidden relative">
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
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex gap-3">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary py-2 text-sm"
                    >
                      View Project
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline py-2 text-sm"
                    >
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