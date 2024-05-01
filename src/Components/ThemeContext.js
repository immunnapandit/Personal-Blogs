// ThemeContext.js
import React, { createContext, useState, useContext } from 'react';

// Create a context for the theme
const ThemeContext = createContext();

// Create a provider for the theme context
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Default theme is 'light'

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light'); // Toggle between 'light' and 'dark' themes
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to consume the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
