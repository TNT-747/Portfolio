import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    'Network & System Administration (Unix/Linux, Windows)',
    'Programming: Java, Python, C, C++, C#, PHP, JavaScript, HTML, CSS',
    'Frameworks: Spring Boot, React.js, Django, Eel, ASP.NET',
    'Databases: Oracle, Microsoft SQL Server',
    'UML & Merise Modeling',
    'SCRUM Methodologies & GitHub Collaboration',
    'Tools: Git, Shell, SqlPlus, SSMS, VS Code, PyCharm, Geany, IntelliJ IDEA',
    'Virtualization & Cloud: VMware, Azure, Docker',
    'PowerBI & Data Analysis',
    'Soft Skills: Teamwork, Time Management, Adaptability'
  ];

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
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-8 text-center"
          >
            About Me
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-16"
          >
            <div>
              <h2 className="text-2xl font-bold mb-4">Who I Am</h2>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                Through my academic background and professional experiences, I have built strong skills in programming 
                (Java, C, C++, C#), Windows/Linux administration, and Cloud & virtualized infrastructure management.
              </p>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                Passionate about automation and Continuous Integration/Deployment (CI/CD), I also have solid knowledge 
                of databases, Agile methodologies (SCRUM), and collaborative tools (Git, GitHub, Azure, VMware, PowerBI).
              </p>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                Versatile and motivated, I am fluent in French and English, and I strongly value security, quality, and 
                efficiency in every project I contribute to.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-6 text-center">My Skills</h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  custom={index}
                  variants={fadeIn}
                  initial="initial"
                  animate="animate"
                  className="px-4 py-2 bg-primary/10 text-primary dark:bg-primary/20 rounded-full"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-center">My Journey</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-4 py-2">
                <h3 className="text-xl font-bold">Ecole Marocaine des Sciences de l'Ingénieur (EMSI)</h3>
                <p className="text-gray-500 dark:text-gray-400">Engineer's Degree, Computer & Network Engineering | 2023 - Present</p>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Specialized in software development, databases, networks, and cloud computing.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4 py-2">
                <h3 className="text-xl font-bold">ALX Academy</h3>
                <p className="text-gray-500 dark:text-gray-400">Software Engineering Program | 2023 - 2025</p>
                <p className="mt-2 text-gray-600 dark:text-gray-300">Comprehensive training in software development and engineering practices.</p>
              </div>

              <div className="border-l-4 border-primary pl-4 py-2">
                <h3 className="text-xl font-bold">Agence du Bassin Hydraulique de l'Oum Er-Rbia</h3>
                <p className="text-gray-500 dark:text-gray-400">Web Developer Intern | Aug 2025 - Sep 2025</p>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Built a web application for interactive mapping, monitoring, and predictive analytics using React.js, 
                  Django REST, AI models, and OpenWeatherMap API.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4 py-2">
                <h3 className="text-xl font-bold">ENCG Beni Mellal</h3>
                <p className="text-gray-500 dark:text-gray-400">Web Developer Intern | Aug 2024 - Sep 2024</p>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Developed a scheduling and timetable management platform with dynamic UI and optimized database performance.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4 py-2">
                <h3 className="text-xl font-bold">Agence du Bassin Hydraulique de l'Oum Er-Rbia</h3>
                <p className="text-gray-500 dark:text-gray-400">System Administrator Intern | Apr 2023</p>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Resolved RAID 5 server failure on HP ProLiant DL380 G7, restored availability, and implemented a backup solution.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4 py-2">
                <h3 className="text-xl font-bold">Institut Spécialisé des Arts Traditionnels</h3>
                <p className="text-gray-500 dark:text-gray-400">Network Maintenance Intern | Apr 2023</p>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Installed and configured network printers and managed user access.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4 py-2">
                <h3 className="text-xl font-bold">ISTA NTIC, Beni Mellal</h3>
                <p className="text-gray-500 dark:text-gray-400">Administrative Assistant Intern | Jul 2022 - Sep 2022</p>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Handled registration processes, updated databases, and provided trainee support.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4 py-2">
                <h3 className="text-xl font-bold">Mohamed V Technical High School</h3>
                <p className="text-gray-500 dark:text-gray-400">Baccalaureate, Computers & Networks Maintenance | 2018 - 2021</p>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Gained foundation in IT, networking, system administration, and security.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
