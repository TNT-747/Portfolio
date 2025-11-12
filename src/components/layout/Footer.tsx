import { useLanguage } from '../../contexts/LanguageContext';

const content = {
  en: {
    text: `© ${new Date().getFullYear()} Abderrahmane KASSIMI. All Rights Reserved.`,
  },
  fr: {
    text: `© ${new Date().getFullYear()} Abderrahmane KASSIMI. Tous droits réservés.`,
  },
};

const Footer = () => {
  const { language } = useLanguage();
  const { text } = content[language];

  return (
    <footer className="bg-gray-100 dark:bg-dark/50 py-5">
      <div className="container text-center text-gray-600 dark:text-gray-400">
        <p>{text}</p>
      </div>
    </footer>
  );
};

export default Footer;
