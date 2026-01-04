import { useLanguage } from '../../contexts/LanguageContext';
import { motion } from 'framer-motion';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <motion.button 
      whileTap={{ scale: 0.95 }}
      onClick={toggleLanguage} 
      className="px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-800 dark:text-gray-100 shadow-md hover:shadow-lg transition-all"
    >
      {language === 'en' ? 'FR' : 'EN'}
    </motion.button>
  );
};

export default LanguageSwitcher;
