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
          className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-primary">Abderrahmane KASSIMI</span>
            </h1>
            <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
              Software Engineer – Windows/Linux Server Administration | Network/Cloud Management | IT Support
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/projects"
                  className="btn btn-primary"
                >
                  View My Work
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="btn btn-outline"
                >
                  Contact Me
                </Link>
              </motion.div>
            </div>
          </div>
          
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