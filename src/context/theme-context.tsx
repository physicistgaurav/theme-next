import React, { useContext, useState } from 'react';

interface ThemeContextData {
  theme: string;
  toggleTheme: () => void;
}

export const ThemeContext = React.createContext<ThemeContextData>({
  theme: 'light',
  toggleTheme: () => {},
});



export interface IThemeProviderProps {
    children: React.ReactNode;
  }
  
  export const ThemeProvider: React.FC<IThemeProviderProps> = ({ children } ) => {
    const [theme, setTheme] = useState<string>("light");
  
    const toggleTheme = () => {
      setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };
  
    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }} >
          {children}
      </ThemeContext.Provider>
      
    );
  };