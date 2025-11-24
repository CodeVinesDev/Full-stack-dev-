import { createContext, useState } from "react";
import PropTypes from "prop-types";

const ThemeContext = createContext();

const ContextProvide = ({ children }) => {
  const [theme, settheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, settheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ContextProvide.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ContextProvide, ThemeContext };
