import { createContext, useContext,  useState } from "react";

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const localTheme = window.localStorage.getItem('theme');
    const [theme, setTheme] = useState(localTheme || "light");

    // Toggle theme and store it in local storage
    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        console.log(newTheme);
        window.localStorage.setItem('theme', newTheme);
    };

    return (
        <ThemeContext.Provider
            value={[
                theme,
                toggleTheme
            ]}
        >{children}</ThemeContext.Provider>
    );
};

export function useTheme() {
    return useContext(ThemeContext);
  }