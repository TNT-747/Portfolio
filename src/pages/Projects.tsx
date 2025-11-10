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
  // Projects from CV / LinkedIn
  const projects: Project[] = [
    {
      id: 1,
      title: "Water Quality Management System",
      description: "A comprehensive water quality monitoring and prediction system featuring a React.js and Tailwind CSS frontend, and a Django REST Framework backend with secure JWT authentication.",
      tags: ["React.js", "Django", "Tailwind CSS", "JWT"],
      period: "Aug 2025 – Sep 2025",
    },
    {
      id: 2,
      title: "E-Commerce Website",
      description: "Developed a full-featured e-commerce platform with a product catalog, shopping cart, order management, and payment simulation, following MVC architecture and Agile methodology.",
      tags: ["Java", "Spring Boot", "Spring Data", "Bootstrap", "PayPal"],
      period: "May 2025 – Jul 2025",
    },
    {
      id: 3,
      title: "Banking Management System",
      description: "Designed and developed a robust banking system supporting account creation, deposits/withdrawals, transaction history, and REST APIs secured with Spring Security.",
      tags: ["Java", "Spring Boot", "Spring Data", "REST APIs", "Spring Security"],
      period: "Jun 2025 – Jun 2025",
    },
    {
      id: 4,
      title: "Android Bus Ticket Application",
      description: "An Android mobile application for booking and managing bus tickets, with features like seat selection and local database support for offline access.",
      tags: ["Android", "Java", "SQLite"],
      period: "Apr 2025 – May 2025",
    },
    {
      id: 5,
      title: "Cloud CDN with Azure",
      description: "Configured and deployed a Content Delivery Network (CDN) on Microsoft Azure to enhance performance and availability, with integrated security policies for protection.",
      tags: ["Azure", "CDN", "DevOps", "Cloud"],
      period: "May 2025 – May 2025",
    },
    {
      id: 6,
      title: "Virtualization with Master/Slave Communication",
      description: "Designed and deployed a virtualized infrastructure with Master/Slave communication, ensuring synchronization and fault-tolerance through rigorous testing.",
      tags: ["Virtualization", "VMware", "Networking", "System Administration"],
      period: "May 2025 – May 2025",
    },
    {
      id: 7,
      title: "Dental Clinic Management Desktop Application",
      description: "A Java Swing application for managing patient records, appointment scheduling, billing, and treatment tracking, with file-based data persistence.",
      tags: ["Java", "Swing"],
      period: "Dec 2024 – Jan 2025",
    },
    {
      id: 8,
      title: "Restaurant Management Web Application",
      description: "A web application with a C# .NET backend and React frontend for managing menus, orders, billing, and reservations, integrated with SQL Server.",
      tags: ["C#", "ASP.NET", "React.js", "SQL Server"],
      period: "Dec 2024 – Jan 2025",
    },
    {
      id: 9,
      title: "ENCG Website",
      description: "Developed and optimized a schedule and timetable management platform with improved database handling and dynamic user interfaces.",
      tags: ["Web Development", "Database", "UI/UX"],
      period: "Aug 2024 – Sep 2024",
    },
    {
      id: 10,
      title: "Restaurant Management System (Python & Eel)",
      description: "A restaurant management system using Python and Eel, featuring menu management, order processing, billing, reservations, and local data persistence.",
      tags: ["Python", "Eel", "Data Management"],
      period: "May 2024 – Jul 2024",
    },
    {
      id: 11,
      title: "Invoice Management System",
      description: "A C++ application to manage invoices, products, and clients, built with OOP principles and featuring invoice calculations and file-based storage.",
      tags: ["C++", "OOP", "File Management"],
      period: "Dec 2023 – Dec 2023",
    },
    {
      id: 12,
      title: "Amusement Park Management System",
      description: "A C++ system for amusement park management, utilizing inheritance and polymorphism, with features like CSV export and game tracking.",
      tags: ["C++", "OOP", "STL", "CSV Export"],
    },
  ];

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
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary py-2 text-sm">
                      View Project
                    </a>
                  )}
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
