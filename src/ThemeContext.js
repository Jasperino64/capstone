import { createContext, useContext,  useState } from "react";

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");
    return (
        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme: () => theme === "light" ? setTheme("dark") : setTheme("light")}}
        >{children}</ThemeContext.Provider>
    );
};

export const useTheme = () => (useContext(ThemeContext));
