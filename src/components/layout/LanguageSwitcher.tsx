import { useLanguage } from '../../contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <button onClick={toggleLanguage} className="btn btn-outline py-2 text-sm">
      {language === 'en' ? 'FR' : 'EN'}
    </button>
  );
};

export default LanguageSwitcher;
