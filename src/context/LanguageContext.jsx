import  { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import pt from '../components/pt.json';
import en from '../components/en.json';

// Crie o contexto
export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('pt');
  
  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'pt' ? 'en' : 'pt'));
  };
  
  LanguageProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
  const texts = language === 'pt' ? pt : en;

  return (
    <LanguageContext.Provider value={{ texts, toggleLanguage, language }}>
      {children}
    </LanguageContext.Provider>
  );
};
