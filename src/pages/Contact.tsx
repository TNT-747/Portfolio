import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const content = {
  en: {
    getInTouch: "Get In Touch",
    contactInfo: "Contact Information",
    email: "Email",
    location: "Location",
    phone: "Phone",
    socialProfiles: "Social Profiles",
    sendMessage: "Send Me a Message",
    name: "Name",
    subject: "Subject",
    message: "Message",
    sending: "Sending...",
    sendMessageBtn: "Send Message",
    successMsg: "Thank you! Your message has been sent successfully.",
    errorMsg: "There was an error sending your message. Please try again.",
    namePlaceholder: "Your full name",
    emailPlaceholder: "your.email@example.com",
    subjectPlaceholder: "What is this about?",
    messagePlaceholder: "Tell me about your project, opportunity, or question...",
  },
  fr: {
    getInTouch: "Contactez-moi",
    contactInfo: "Informations de contact",
    email: "E-mail",
    location: "Lieu",
    phone: "Téléphone",
    socialProfiles: "Profils sociaux",
    sendMessage: "Envoyez-moi un message",
    name: "Nom",
    subject: "Sujet",
    message: "Message",
    sending: "Envoi...",
    sendMessageBtn: "Envoyer le message",
    successMsg: "Merci ! Votre message a été envoyé avec succès.",
    errorMsg: "Une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer.",
    namePlaceholder: "Votre nom complet",
    emailPlaceholder: "votre.email@exemple.com",
    subjectPlaceholder: "De quoi s'agit-il ?",
    messagePlaceholder: "Parlez-moi de votre projet, opportunité ou question...",
  },
};

const Contact = () => {
  const { language } = useLanguage();
  const { getInTouch, contactInfo, email, location, phone, socialProfiles, sendMessage, name, subject, message, sending, sendMessageBtn, successMsg, errorMsg, namePlaceholder, emailPlaceholder, subjectPlaceholder, messagePlaceholder } = content[language];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const errors = { name: '', email: '', subject: '', message: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = language === 'en' ? 'Name is required' : 'Le nom est requis';
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      errors.name = language === 'en' ? 'Name must be at least 2 characters' : 'Le nom doit contenir au moins 2 caractères';
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = language === 'en' ? 'Email is required' : 'L\'email est requis';
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      errors.email = language === 'en' ? 'Please enter a valid email' : 'Veuillez entrer un email valide';
      isValid = false;
    }

    if (!formData.subject.trim()) {
      errors.subject = language === 'en' ? 'Subject is required' : 'Le sujet est requis';
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = language === 'en' ? 'Message is required' : 'Le message est requis';
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      errors.message = language === 'en' ? 'Message must be at least 10 characters' : 'Le message doit contenir au moins 10 caractères';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(false);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section className="relative py-20 min-h-screen">
      {/* Decorative Background */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-accent-400/5 rounded-full blur-2xl pointer-events-none"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-primary-400/5 rounded-full blur-2xl pointer-events-none"></div>
      
      <div className="container relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-title mb-16"
        >
          {getInTouch}
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="card p-8 border-l-4 border-gradient-primary hover:shadow-glow transition-all"
          >
            <h2 className="text-3xl font-bold mb-8 text-gradient">{contactInfo}</h2>
            
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              {language === 'en' 
                ? "Feel free to reach out for collaboration opportunities, project inquiries, or just to connect. I'm always open to discussing new projects and ideas!" 
                : "N'hésitez pas à me contacter pour des opportunités de collaboration, des demandes de projet ou simplement pour échanger. Je suis toujours ouvert à discuter de nouveaux projets et idées !"}
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start group">
                <div className="bg-gradient-primary/10 dark:bg-primary-500/20 p-4 rounded-xl mr-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-1">{email}</h3>
                  <p className="text-gray-600 dark:text-gray-300">kassimi.docs@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="bg-gradient-primary/10 dark:bg-primary-500/20 p-4 rounded-xl mr-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-1">{location}</h3>
                  <p className="text-gray-600 dark:text-gray-300">Rabat, Morocco</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="bg-gradient-primary/10 dark:bg-primary-500/20 p-4 rounded-xl mr-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-1">{phone}</h3>
                  <p className="text-gray-600 dark:text-gray-300">+212 6 50 24 01 75</p>
                </div>
              </div>
            </div>
              
            <div className="mt-auto pt-8 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-6 text-gradient">{socialProfiles}</h3>
                <div className="flex flex-wrap gap-4">
                  <a href="https://linkedin.com/in/abderrahmane-kassimi" target="_blank" rel="noopener noreferrer" className="bg-gradient-primary/10 dark:bg-primary-500/20 p-4 rounded-xl text-primary-600 dark:text-primary-400 hover:bg-gradient-primary hover:text-white dark:hover:bg-primary-500 transition-all hover:scale-110 hover:shadow-lg" aria-label="LinkedIn">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="https://github.com/TNT-747" target="_blank" rel="noopener noreferrer" className="bg-gradient-primary/10 dark:bg-primary-500/20 p-4 rounded-xl text-primary-600 dark:text-primary-400 hover:bg-gradient-primary hover:text-white dark:hover:bg-primary-500 transition-all hover:scale-110 hover:shadow-lg" aria-label="GitHub">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="mailto:abderrahmanekassimi@gmail.com" className="bg-gradient-primary/10 dark:bg-primary-500/20 p-4 rounded-xl text-primary-600 dark:text-primary-400 hover:bg-gradient-primary hover:text-white dark:hover:bg-primary-500 transition-all hover:scale-110 hover:shadow-lg" aria-label="Email">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="card p-8 border-l-4 border-gradient-accent hover:shadow-accent-glow transition-all"
          >
            <h2 className="text-3xl font-bold mb-8 text-gradient">{sendMessage}</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold mb-2 text-gray-700 dark:text-gray-300">{name}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={namePlaceholder}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-primary-500 bg-white dark:bg-gray-900/50 transition-all ${
                    formErrors.name 
                      ? 'border-red-500 focus:border-red-500' 
                      : 'border-gray-300 dark:border-gray-700 focus:border-primary-500'
                  }`}
                />
                {formErrors.name && <p className="mt-1 text-sm text-red-500">{formErrors.name}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-bold mb-2 text-gray-700 dark:text-gray-300">{email}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={emailPlaceholder}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-primary-500 bg-white dark:bg-gray-900/50 transition-all ${
                    formErrors.email 
                      ? 'border-red-500 focus:border-red-500' 
                      : 'border-gray-300 dark:border-gray-700 focus:border-primary-500'
                  }`}
                />
                {formErrors.email && <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>}
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-bold mb-2 text-gray-700 dark:text-gray-300">{subject}</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={subjectPlaceholder}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-primary-500 bg-white dark:bg-gray-900/50 transition-all ${
                    formErrors.subject 
                      ? 'border-red-500 focus:border-red-500' 
                      : 'border-gray-300 dark:border-gray-700 focus:border-primary-500'
                  }`}
                />
                {formErrors.subject && <p className="mt-1 text-sm text-red-500">{formErrors.subject}</p>}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-bold mb-2 text-gray-700 dark:text-gray-300">{message}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder={messagePlaceholder}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-primary-500 bg-white dark:bg-gray-900/50 transition-all resize-none ${
                    formErrors.message 
                      ? 'border-red-500 focus:border-red-500' 
                      : 'border-gray-300 dark:border-gray-700 focus:border-primary-500'
                  }`}
                />
                {formErrors.message && <p className="mt-1 text-sm text-red-500">{formErrors.message}</p>}
              </div>
              
              {submitSuccess && (
                <div className="bg-green-100 dark:bg-green-900/30 border border-green-500 text-green-700 dark:text-green-400 px-4 py-3 rounded-xl">
                  {successMsg}
                </div>
              )}
              
              {submitError && (
                <div className="bg-red-100 dark:bg-red-900/30 border border-red-500 text-red-700 dark:text-red-400 px-4 py-3 rounded-xl">
                  {errorMsg}
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? sending : sendMessageBtn}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
