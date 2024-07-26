import React, { createContext, useContext, useState } from "react";

const CountContext = createContext();

export const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const addToCart = (amount) => {
    setCount((prevCount) => prevCount + amount);
  };

  return (
    <CountContext.Provider value={{ count, addToCart }}>
      {children}
    </CountContext.Provider>
  );
};

export const useCount = () => useContext(CountContext);