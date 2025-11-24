import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ Children }) => {
  const [user, setuser] = useState("");

  const login = (username) => {
    setuser(username);
  };
  const logout = () => {
    setuser("");
  };
  return (
    <AuthContext.Provider value={{ user, setuser, login, logout }}>
      {Children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
