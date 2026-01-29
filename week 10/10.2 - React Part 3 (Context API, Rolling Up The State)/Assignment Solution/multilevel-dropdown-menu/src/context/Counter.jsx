import { useState } from "react";
import { createContext } from "react";

const CounterContext = createContext();

// eslint-disable-next-line react/prop-types
const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);
  const plus = () => {
    setCounter((prev) => prev + 1);
  };
  const minus = () => {
    setCounter((prev) => prev - 1);
  };
  return (
    <CounterContext.Provider value={{ minus, counter, plus }}>
      {children}
    </CounterContext.Provider>
  );
};

export { CounterProvider, CounterContext };
