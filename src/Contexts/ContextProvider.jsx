import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [desktopMenu, setDesktopMenu] = useState(true);
  const [activeENGR, setActiveENGR] = useState("EN"); // (note: user preferable language should save it at the local host)

  return (
    <StateContext.Provider
      value={{
        desktopMenu,
        screenSize,
        activeENGR,
        setDesktopMenu,
        setScreenSize,
        setActiveENGR,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
