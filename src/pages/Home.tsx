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
    title: "Full-Stack Engineer",
    subtitle: "Java/Spring Boot + React + Cloud Technologies",
    description: "Building scalable web applications with clean architecture and modern cloud technologies. Specialized in backend development with Java/Spring Boot, React frontends, and DevOps automation using Docker and Azure.",
    location: "Rabat, Morocco",
    remote: "Open to Remote",
    status: "Final Year Engineering Student",
    viewProjects: "View Projects",
    downloadResume: "Download Resume",
    contactMe: "Contact Me",
  },
  fr: {
    greeting: "Bonjour, je suis",
    name: "Abderrahmane KASSIMI",
    title: "Ingénieur Full-Stack",
    subtitle: "Java/Spring Boot + React + Technologies Cloud",
    description: "Développement d'applications web évolutives avec une architecture propre et des technologies cloud modernes. Spécialisé en développement backend avec Java/Spring Boot, frontends React et automatisation DevOps avec Docker et Azure.",
    location: "Rabat, Maroc",
    remote: "Ouvert au télétravail",
    status: "Étudiant ingénieur en dernière année",
    viewProjects: "Voir les projets",
    downloadResume: "Télécharger le CV",
    contactMe: "Contactez moi",
  },
};

const Home = () => {
  const { language } = useLanguage();
  const { greeting, name, title, subtitle, description, location, remote, status, viewProjects, downloadResume, contactMe } = content[language];

  return (
    <section className="relative py-12 md:py-20 min-h-[calc(100vh-80px)] flex items-center">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary-400/5 rounded-full blur-2xl animate-float pointer-events-none" style={{ willChange: 'transform' }}></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-400/5 rounded-full blur-2xl animate-float pointer-events-none" style={{ animationDelay: '2s', willChange: 'transform' }}></div>
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Text Content */}
            <div className="order-2 md:order-1 text-center md:text-left space-y-5 md:space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <p className="text-sm md:text-base font-medium text-primary-600 dark:text-primary-400 mb-2">
                  {greeting}
                </p>
                <h1 className="font-bold mb-3 leading-tight text-3xl md:text-4xl lg:text-5xl break-words">
                  <span className="text-gradient glow-text">{name}</span>
                </h1>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                  {title}
                </h2>
                <p className="text-base md:text-lg font-medium text-gray-600 dark:text-gray-400">
                  {subtitle}
                </p>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed"
              >
                {description}
              </motion.p>
              
              {/* Quick Info with Icons */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35, duration: 0.6 }}
                className="flex flex-wrap gap-4 justify-center md:justify-start"
              >
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <svg className="w-5 h-5 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <svg className="w-5 h-5 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  <span>{remote}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <svg className="w-5 h-5 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span>{status}</span>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4 pt-2"
              >
                <Link to="/projects" className="btn btn-primary group">
                  {viewProjects}
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a 
                  href={language === 'en' ? '/resume-en.pdf' : '/resume-fr.pdf'}
                  download={language === 'en' ? 'CV-Abderrahmane-KASSIMI-Full-Stack-Engineer-EN.pdf' : 'CV-Abderrahmane-KASSIMI-Ingenieur-Full-Stack-FR.pdf'}
                  className="btn btn-primary group"
                >
                  {downloadResume}
                  <svg className="w-5 h-5 ml-2 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </a>
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
