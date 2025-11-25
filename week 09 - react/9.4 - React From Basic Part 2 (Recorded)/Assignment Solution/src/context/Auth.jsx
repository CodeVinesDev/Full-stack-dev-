import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setuser] = useState("");

  useEffect(() => {
    const userna = localStorage.getItem("user");
    setuser(userna);
  }, []);

  const login = (username) => {
    setuser(username);
    localStorage.setItem("user", username);
  };
  const logout = () => {
    setuser("");
    localStorage.removeItem("user");
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AuthContext, AuthProvider };
