import { motion } from 'framer-motion';

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  image?: string;
  pdfLink?: string;
}

const Certifications = () => {
  // User's complete certifications
  const certifications: Certification[] = [
    {
      id: 1,
      title: "CCNA: Bridging, Introduction to Networks, Switching/Routing/Wireless",
      issuer: "Cisco",
      date: "June 2022",
      description: "Comprehensive training covering networking fundamentals, switching technologies, routing protocols, and wireless network configuration.",
      pdfLink: "https://linkedin.com/in/abderrahmane-kassimi"
    },
    {
      id: 2,
      title: "Microsoft Office Specialist: Master 2016",
      issuer: "Microsoft",
      date: "June 2022",
      description: "Advanced mastery certification of Microsoft Office 2016 applications including Word, Excel, PowerPoint, and Access.",
      pdfLink: "https://linkedin.com/in/abderrahmane-kassimi"
    },
    {
      id: 3,
      title: "Microsoft Certified: Azure Fundamentals",
      issuer: "Microsoft",
      date: "July 2024",
      description: "Validation of foundational knowledge of cloud concepts and Microsoft Azure services, workloads, security, and governance.",
      pdfLink: "https://linkedin.com/in/abderrahmane-kassimi"
    },
    {
      id: 4,
      title: "Interactivity with JavaScript",
      issuer: "University of Michigan",
      date: "December 2023",
      description: "Creating interactive web experiences using JavaScript, DOM manipulation, and event handling.",
      pdfLink: "https://linkedin.com/in/abderrahmane-kassimi"
    },
    {
      id: 5,
      title: "The Unix Workbench",
      issuer: "Johns Hopkins University",
      date: "March 2024",
      description: "Comprehensive training in Unix/Linux operating systems, shell scripting, bash programming, and command line tools.",
      pdfLink: "https://linkedin.com/in/abderrahmane-kassimi"
    },
    {
      id: 6,
      title: "Programming for Everybody (Python)",
      issuer: "University of Michigan",
      date: "March 2024",
      description: "Introduction to fundamental programming concepts in Python including variables, conditional execution, functions, and loops.",
      pdfLink: "https://linkedin.com/in/abderrahmane-kassimi"
    },
    {
      id: 7,
      title: "Software Design & Project Management",
      issuer: "HKUST",
      date: "March 2024",
      description: "Skills in software design principles, project management methodologies, and development lifecycle processes.",
      pdfLink: "https://linkedin.com/in/abderrahmane-kassimi"
    },
    {
      id: 8,
      title: "SQL",
      issuer: "University of Colorado Boulder",
      date: "January 2024",
      description: "Database design, SQL query writing, and data manipulation techniques for relational database systems.",
      pdfLink: "https://linkedin.com/in/abderrahmane-kassimi"
    },
    {
      id: 9,
      title: "Introduction to CSS3",
      issuer: "University of Michigan",
      date: "December 2023",
      description: "Creating responsive web layouts, styling web pages, and implementing modern CSS techniques.",
      pdfLink: "https://linkedin.com/in/abderrahmane-kassimi"
    },
    {
      id: 10,
      title: "Introduction to HTML5",
      issuer: "University of Michigan",
      date: "December 2023",
      description: "Core concepts of HTML5 including semantic markup, form elements, and multimedia integration.",
      pdfLink: "https://linkedin.com/in/abderrahmane-kassimi"
    },
    {
      id: 11,
      title: "C++ OOP",
      issuer: "EPFL",
      date: "December 2023",
      description: "Object-oriented programming concepts in C++ including classes, inheritance, polymorphism, and memory management.",
      pdfLink: "https://linkedin.com/in/abderrahmane-kassimi"
    },
    {
      id: 12,
      title: "Web Design Capstone",
      issuer: "University of Michigan",
      date: "December 2023",
      description: "Applied web design project showcasing HTML5, CSS3, JavaScript, and responsive design principles.",
      pdfLink: "https://linkedin.com/in/abderrahmane-kassimi"
    },
    {
      id: 13,
      title: "Cloud Foundations",
      issuer: "Great Learning",
      date: "October 2023",
      description: "Essential knowledge of cloud computing concepts, service models, and major cloud platforms.",
      pdfLink: "https://linkedin.com/in/abderrahmane-kassimi"
    },
    {
      id: 14,
      title: "Python Essentials 1 & 2",
      issuer: "Cisco",
      date: "October 2023",
      description: "Comprehensive Python programming from basics to advanced concepts including OOP and data structures.",
      pdfLink: "https://linkedin.com/in/abderrahmane-kassimi"
    },
    {
      id: 15,
      title: "Introduction to Machine Learning US",
      issuer: "Great Learning",
      date: "September 2023",
      description: "Fundamentals of machine learning algorithms, model training, and data preparation techniques.",
      pdfLink: "https://linkedin.com/in/abderrahmane-kassimi"
    },
    {
      id: 16,
      title: "PCAP: Programming Essentials in Python",
      issuer: "Cisco",
      date: "October 2022",
      description: "Professional-level Python programming skills including data structures, modules, packages, and OOP.",
      pdfLink: "https://linkedin.com/in/abderrahmane-kassimi"
    },
    {
      id: 17,
      title: "HTML Fundamentals",
      issuer: "Almdrasa",
      date: "2023",
      description: "Core HTML concepts including document structure, elements, attributes, and best practices.",
      pdfLink: "https://linkedin.com/in/abderrahmane-kassimi"
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
          My Certifications
        </motion.h1>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert) => (
            <motion.div key={cert.id} variants={item} className="card flex flex-col h-full group">
              <div className="h-40 bg-gray-200 dark:bg-gray-800 overflow-hidden relative">
                <div className="w-full h-full flex items-center justify-center flex-col gap-2 p-4 text-center">
                  <div className="w-full flex justify-center mb-1">
                    <div className="bg-primary/20 text-primary dark:bg-primary/40 dark:text-white px-3 py-1 rounded-full text-xs font-medium">
                      {cert.issuer}
                    </div>
                  </div>
                  <h4 className="text-lg font-bold">{cert.title}</h4>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{cert.date}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-5 flex-grow">
                <h3 className="text-lg font-bold mb-1">{cert.title}</h3>
                <p className="text-primary font-medium text-sm mb-1">{cert.issuer}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">{cert.date}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{cert.description}</p>
              </div>
              <div className="p-4 pt-0 mt-auto">
                {cert.pdfLink && (
                  <a
                    href={cert.pdfLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm w-full justify-center"
                  >
                    View on LinkedIn
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications; 