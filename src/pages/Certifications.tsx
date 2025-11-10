import { motion } from 'framer-motion';

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  pdfLink?: string;
}

const Certifications = () => {
  const certifications: Certification[] = [
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
      title: "Introduction à la programmation orientée objet (en C++)",
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
                    Show Credential
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
