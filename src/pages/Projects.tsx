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
  // User's actual projects from CV & PFE
  const projects: Project[] = [
    {
      id: 1,
      title: "Dental Clinic Management System",
      description: "Desktop system for managing patient records, appointments, and billing using Java Swing and UML.",
      tags: ["Java", "Swing", "UML", "Maven", "IntelliJ IDEA"],
      period: "December 2024 – January 2025",
      github: "https://github.com/kassi-12/dental-office-java"
    },
    {
      id: 2,
      title: "Restaurant Management System",
      description: "Management platform built with ASP.NET and React for handling orders, inventory, and user interaction.",
      tags: ["ASP.NET", "React.js", "SQL", "MVC", "SSMS"],
      period: "December 2024 – January 2025",
      github: "https://github.com/kassi-12/restaurant-management"
    },
    {
      id: 3,
      title: "Restaurant Management with Python & Eel",
      description: "Lightweight restaurant system with Python and Eel for desktop-based management of orders and menus.",
      tags: ["Python", "Eel", "SQLite"],
      period: "May 2024 – July 2024",
      github: "https://github.com/kassi-12/restaurant-management"
    },
    {
      id: 4,
      title: "Banking Management System",
      description: "Java Spring application to manage accounts, clients, and transactions in a simulated banking environment.",
      tags: ["Java", "Spring Boot", "Hibernate", "SQL"],
      period: "June 2025 – June 2025",
      github: "https://github.com/kassi-12/banking-system"
    },
    {
      id: 5,
      title: "E-Commerce Platform",
      description: "Full-featured e-commerce website with product listing, cart, and order management built using Java Spring Boot.",
      tags: ["Java", "Spring Boot", "Thymeleaf", "SQL"],
      period: "May 2025 – July 2025",
      github: "https://github.com/kassi-12/ecommerce-platform"
    },
    {
      id: 6,
      title: "Cloud CDN with Azure",
      description: "Configuration and deployment of a Content Delivery Network (CDN) using Microsoft Azure services.",
      tags: ["Azure", "Cloud", "CDN", "Networking"],
      period: "May 2025 – May 2025",
      github: "https://github.com/kassi-12/cloud-cdn-azure"
    },
    {
      id: 7,
      title: "Virtualization with Master/Slave Communication",
      description: "Design and deployment of a virtualized infrastructure with master/slave communication using VMware.",
      tags: ["Virtualization", "VMware", "Networking"],
      period: "May 2025 – May 2025",
      github: "https://github.com/kassi-12/virtualization-project"
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
