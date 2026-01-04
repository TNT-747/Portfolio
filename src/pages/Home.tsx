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
    description: "Passionate software engineer specializing in backend development, cloud technologies, and DevOps automation. Experienced in building scalable applications with Java, Spring Boot, and modern frameworks. Committed to delivering high-quality, secure solutions through continuous integration and best practices.",
    viewWork: "View My Work",
    contactMe: "Contact Me",
  },
  fr: {
    greeting: "Bonjour, je suis",
    name: "Abderrahmane KASSIMI",
    title: "Ingénieur en Développement Logiciel et Systèmes d'Information",
    description: "Ingénieur logiciel passionné spécialisé dans le développement backend, les technologies cloud et l'automatisation DevOps. Expérimenté dans la création d'applications évolutives avec Java, Spring Boot et les frameworks modernes. Engagé à fournir des solutions sécurisées et de haute qualité grâce à l'intégration continue et aux meilleures pratiques.",
    viewWork: "Voir mon travail",
    contactMe: "Contactez moi",
  },
};

const Home = () => {
  const { language } = useLanguage();
  const { greeting, name, title, description, viewWork, contactMe } = content[language];

  return (
    <section className="relative py-12 md:py-20 min-h-[calc(100vh-80px)] flex items-center">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary-400/5 rounded-full blur-2xl animate-float pointer-events-none" style={{ willChange: 'transform' }}></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-400/5 rounded-full blur-2xl animate-float pointer-events-none" style={{ animationDelay: '2s', willChange: 'transform' }}></div>
      
      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Text Content */}
              <div className="order-2 md:order-1 text-center md:text-left space-y-4 md:space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <p className="text-sm md:text-lg font-medium text-primary-600 dark:text-primary-400 mb-2">
                  {greeting}
                </p>
                <h1 className="font-bold mb-3 md:mb-4 leading-snug text-3xl md:text-4xl lg:text-5xl xl:text-6xl break-words">
                  <span className="text-gradient glow-text">{name}</span>
                </h1>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-base md:text-xl lg:text-2xl font-semibold text-gray-700 dark:text-gray-200 leading-relaxed break-words"
              >
                {title}
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-400 leading-loose max-w-2xl mx-auto md:mx-0 text-justify"
              >
                {description}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-wrap justify-center md:justify-start gap-4 pt-4"
              >
                <Link to="/projects" className="btn btn-primary group">
                  {viewWork}
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link to="/contact" className="btn btn-outline">
                  {contactMe}
                </Link>
              </motion.div>
            </div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="order-1 md:order-2 flex justify-center"
            >
              <Tilt
                className="parallax-effect-glare-scale"
                perspective={500}
                glareEnable={true}
                glareMaxOpacity={0.3}
                scale={1.05}
              >
                <div className="relative">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-40 animate-glow"></div>
                  
                  {/* Image Container */}
                  <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/20 dark:border-gray-800/20 shadow-2xl backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-primary opacity-20"></div>
                    <img 
                      src="/images/pic.png" 
                      alt="Abderrahmane KASSIMI" 
                      className="w-full h-full object-cover relative z-10"
                    />
                  </div>
                  
                  {/* Decorative Ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-primary-400/30 scale-110 animate-pulse"></div>
                </div>
              </Tilt>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Logo Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20"
        >
          <LogoCarousel />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
