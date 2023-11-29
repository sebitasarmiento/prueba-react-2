import React, { useState, createContext } from "react";
import data from "../data/pizzas.json"; 

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [pizza] = useState(data);
  const [cartItems, setCartItems] = useState([]);

  return (
    <GlobalContext.Provider
      value={{ pizza, cartItems, setCartItems }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
