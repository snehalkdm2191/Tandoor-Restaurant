// NPM Packages
import { useContext, createContext, useReducer } from "react";

// Project files

import MenuReducer from "./MenuReducer";

// Properties
const MenuContext = createContext(null);

export function MenuProvider({ children }) {
  // Local state
  const [bbqMenu, dispatch] = useReducer(MenuReducer, []);

  return (
    <MenuContext.Provider value={{ bbqMenu, dispatch }}>
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu() {
  const context = useContext(MenuContext);

  return context;
}
