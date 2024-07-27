import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Define o estado inicial com um valor padrão se o localStorage estiver vazio
  const [theme, setTheme] = useState(
    () => localStorage.getItem("app:theme") || "light"
  );

  useEffect(() => {
    // Atualiza a classe do elemento raiz com base no tema atual
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("app:theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("app:theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    // Alterna entre os temas claro e escuro
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
