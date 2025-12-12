import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';
import LogoCarousel from '../components/LogoCarousel.jsx';
import '../components/LogoCarousel.css';
import { useLanguage } from '../contexts/LanguageContext';

const content = {
  en: {
    greeting: "Hi, I'm",
    name: "Abderrahmane KASSIMI",
    title: "Software Development and Information Systems Engineer",
    description: "A passionate engineer specializing in backend development and cloud technologies, with a knack for automation (CI/CD) and building secure, high-quality applications. and I 'm always up for a challenge.",
    viewWork: "View My Work",
    contactMe: "Contact Me",
  },
  fr: {
    greeting: "Bonjour, je suis",
    name: "Abderrahmane KASSIMI",
    title: "Ingénieur en Développement Logiciel et Systèmes d'Information",
    description: "Un ingénieur passionné spécialisé dans le développement backend et les technologies cloud, avec un penchant pour l'automatisation (CI/CD) et la création d'applications sécurisées et de haute qualité. Je suis toujours prêt à relever un défi.",
    viewWork: "Voir mon travail",
    contactMe: "Contactez moi",
  },
};

const Home = () => {
  const { language } = useLanguage();
  const { greeting, name, title, description, viewWork, contactMe } = content[language];

  return (
    <section className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-10 md:mt-0"
          >
            <Tilt
              className="parallax-effect-glare-scale"
              perspective={500}
              glareEnable={true}
              glareMaxOpacity={0.45}
              scale={1.02}
            >
              <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-primary shadow-xl">
                <img 
                  src="/images/pic.png" 
                  alt="Abderrahmane KASSIMI" 
                  className="w-full h-full object-cover"
                />
              </div>
            </Tilt>
          </motion.div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {greeting} <span className="text-primary">{name}</span>
            </h1>
            <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
              {title}
            </p>
            <p className="text-lg mb-8 text-gray-500 dark:text-gray-400 max-w-2xl md:text-left text-center">
              {description}
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
                  {viewWork}
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
                  {contactMe}
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
        <LogoCarousel />
      </div>
    </section>
  );
};

export default Home;
