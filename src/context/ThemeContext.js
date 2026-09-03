import React, { createContext, useContext, useState } from 'react';
import { ThemeProviderWrapper as StyledThemeProviderWrapper } from 'styled-components';
import { lightTheme, darkTheme } from './modes';

// Cria o contexto do tema
const ThemeContext = createContext();

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};

// Cria o provider para o tema
export const ThemeProviderWrapper = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const theme = isDark ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, theme }}>
      <StyledThemeProviderWrapper theme={theme}>
        {children}
      </StyledThemeProviderWrapper>
    </ThemeContext.Provider>
  );
};

export default ThemeContext;