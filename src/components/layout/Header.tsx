import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTheme } from '../../contexts/ThemeContext';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const { language } = useLanguage();

  const navLinks = {
    en: [
      { path: '/', label: 'Home' },
      { path: '/about', label: 'About' },
      { path: '/projects', label: 'Projects' },
      { path: '/certifications', label: 'Certifications' },
      { path: '/resume', label: 'Resume' },
      { path: '/contact', label: 'Contact' },
    ],
    fr: [
      { path: '/', label: 'Accueil' },
      { path: '/about', label: 'À propos' },
      { path: '/projects', label: 'Projets' },
      { path: '/certifications', label: 'Certifications' },
      { path: '/resume', label: 'CV' },
      { path: '/contact', label: 'Contact' },
    ],
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentNavLinks = navLinks[language];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/70 dark:bg-gray-900/70 backdrop-blur-2xl shadow-lg shadow-gray-900/5 dark:shadow-primary-500/10 py-3 border-b border-gray-200/50 dark:border-primary-500/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center group flex-shrink-0">
          <motion.div 
            whileHover={{ scale: 1.05, rotate: 5 }} 
            whileTap={{ scale: 0.95 }}
            className="flex items-center"
          >
            <div className="relative">
              <img src="/images/k.png" alt="KASSIMI Logo" className="h-8 w-8 sm:h-10 sm:w-10 mr-1.5 sm:mr-2 drop-shadow-lg" />
              <div className="absolute inset-0 bg-primary-400/20 rounded-full blur-lg group-hover:bg-primary-400/40 transition-all"></div>
            </div>
            <span className="text-lg sm:text-xl font-bold bg-gradient-primary bg-clip-text text-transparent tracking-tight">
              ASSIMI
            </span>
          </motion.div>
        </Link>

        <nav className="hidden md:flex items-center space-x-1">
          {currentNavLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative px-4 py-2.5 text-sm font-semibold transition-all duration-300 rounded-xl group ${
                location.pathname === link.path
                  ? 'text-primary-600 dark:text-primary-400'
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
              }`}
            >
              {link.label}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="navbar-highlight"
                  className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-primary-500/20 to-accent-500/10 rounded-xl shadow-lg"
                  style={{ zIndex: -1 }}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 bg-primary-500/5 transition-opacity"></span>
            </Link>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className="ml-2 p-2.5 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-800 dark:text-gray-100 shadow-md hover:shadow-lg transition-all"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" /></svg>
            )}
          </motion.button>
          <LanguageSwitcher />
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2 md:hidden">
          <LanguageSwitcher />
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className="p-2 sm:p-2.5 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-800 dark:text-gray-100 shadow-md"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? (
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>
            ) : (
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" /></svg>
            )}
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 sm:p-2.5 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 text-white shadow-lg"
            aria-label="Toggle mobile menu"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl shadow-xl border-t border-gray-200/50 dark:border-primary-500/20 max-h-[80vh] overflow-y-auto"
        >
          <ul className="container py-4 space-y-1.5">
            {currentNavLinks.map((link, index) => (
              <motion.li 
                key={link.path}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
              >
                <Link
                  to={link.path}
                  className={`block py-2.5 px-4 rounded-lg text-sm font-semibold transition-all ${
                    location.pathname === link.path
                      ? 'bg-gradient-primary text-white shadow-lg'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-primary-500/10 dark:hover:bg-primary-500/20'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.nav>
      )}
    </header>
  );
};

export default Header;
