import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [desktopMenu, setDesktopMenu] = useState(true);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#mainone");
  const [activeENGR, setActiveENGR] = useState("EN");
  const [search, setSearch] = useState(false);

  return (
    <StateContext.Provider
      value={{
        activeNav,
        desktopMenu,
        screenSize,
        openMobileMenu,
        activeENGR,
        search,
        setActiveNav,
        setDesktopMenu,
        setScreenSize,
        setOpenMobileMenu,
        setActiveENGR,
        setSearch,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
