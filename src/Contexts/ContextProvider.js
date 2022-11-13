import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [desktopMenu, setDesktopMenu] = useState(true);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#mainone");
  const [activeENGR, setActiveENGR] = useState("EN");

  return (
    <StateContext.Provider
      value={{
        activeNav,
        desktopMenu,
        screenSize,
        openMobileMenu,
        activeENGR,
        setActiveNav,
        setDesktopMenu,
        setScreenSize,
        setOpenMobileMenu,
        setActiveENGR,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
