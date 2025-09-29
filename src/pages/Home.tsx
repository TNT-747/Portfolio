import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* LEFT CONTENT */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-primary">Abderrahmane KASSIMI</span>
            </h1>
            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
              Final Year Software Engineering Student | PFE Internship Seeker
            </h2>
            <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
              Software Engineer & DevOps Enthusiast – Windows/Linux Administration | Cloud & Network Management | 
              Full-Stack Development | IT Support | Automation & CI/CD
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/projects" className="btn btn-primary">
                  View My Work
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className="btn btn-outline">
                  Contact Me
                </Link>
              </motion.div>
            </div>

            {/* Links Section */}
            <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-6 text-sm md:text-base">
              <a
                href="https://www.linkedin.com/in/abderrahmane-kassimi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/kassi-12"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 dark:text-gray-200 hover:underline"
              >
                GitHub
              </a>
              <a
                href="https://kassimi-portfolio.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Portfolio
              </a>
            </div>

            {/* Skills */}
            <p className="mt-6 text-gray-700 dark:text-gray-300">
              <span className="font-semibold">Skills:</span> Java, Spring Boot, React.js, Django, Python, C++, C#, 
              Oracle, SQL Server, Azure, Networking (CCNA), DevOps (CI/CD), Virtualization, Agile (SCRUM), Git/GitHub
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-10 md:mt-0"
          >
            <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-primary shadow-xl">
              <img
                src="/images/pic.jpeg"
                alt="Abderrahmane KASSIMI"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
