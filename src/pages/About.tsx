import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    'Network & System Administration', 'Development & Programming', 'Databases',
    'OS: Unix/Linux, Windows', 'UML & Merise Modeling', 
    'SCRUM Methodologies', 'GitHub Collaboration', 
    'Git', 'Shell', 'SqlPlus', 'SSMS', 'VS Code', 'PyCharm',
    'VMware', 'Azure', 'PuTTY'
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
                I'm a versatile software engineer based in Beni Mellal, Morocco, with a comprehensive skillset 
                encompassing programming languages, software development principles, business management acumen, 
                networking proficiency, and administrative capabilities.
              </p>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                With experience in technologies across development and system administration, I offer a versatile approach
                to complex technical challenges. My strengths include network infrastructure, database management,
                Linux/Windows systems, cloud services, and development methodologies.
              </p>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                I'm fluent in Arabic and French, with technical working knowledge of English. I hold a driver's license (B)
                and enjoy travel, e-sports, and cooking in my free time.
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
                <h3 className="text-xl font-bold">Ecole Marocaine des Sciences de l'Ingénieur</h3>
                <p className="text-gray-500 dark:text-gray-400">Computer and Network Engineering | 2023 - Present</p>
                <p className="mt-2 text-gray-600 dark:text-gray-300">Engineer's Degree in Computer and Network Engineering.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4 py-2">
                <h3 className="text-xl font-bold">ALX Academy</h3>
                <p className="text-gray-500 dark:text-gray-400">Software Engineering | 2023 - 2025</p>
                <p className="mt-2 text-gray-600 dark:text-gray-300">Comprehensive software engineering program.</p>
              </div>

              <div className="border-l-4 border-primary pl-4 py-2">
                <h3 className="text-xl font-bold">ENCG Beni Mellal</h3>
                <p className="text-gray-500 dark:text-gray-400">Developer | August 2024 - October 2024</p>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Optimized a slot management platform using PHP, HTML, CSS, and JavaScript.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4 py-2">
                <h3 className="text-xl font-bold">Agence du Bassin Hydraulique de l'Oum Er Rbia</h3>
                <p className="text-gray-500 dark:text-gray-400">System Administrator | April 2022</p>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Recovered a RAID 5 server (HP ProLiant DL380 G7) and collaborated with
                  network technicians and developers.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4 py-2">
                <h3 className="text-xl font-bold">Institut Spécialisé des Arts Traditionnels</h3>
                <p className="text-gray-500 dark:text-gray-400">Network Maintenance Technician | April 2022</p>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Installed and configured network printers.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4 py-2">
                <h3 className="text-xl font-bold">ISTA NTIC, Beni Mellal</h3>
                <p className="text-gray-500 dark:text-gray-400">Administrative Assistant | April 2022</p>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Processed registration files and updated data.
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