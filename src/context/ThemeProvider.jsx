import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [lightOff, setLightOff] = useState(false); // Controle do efeito de apagamento da luz

  function toggleTheme() {
    setLightOff((prevState) => !prevState); // Alterna o estado de apagamento
  }

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      {/* Overlay para o efeito de apagar a luz */}
      <div className={`light-off ${lightOff ? "active" : ""}`}></div>
      {children}
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useTheme() {
  return useContext(ThemeContext);
}
