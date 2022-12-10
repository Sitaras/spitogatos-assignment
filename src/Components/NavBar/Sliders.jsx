import React from "react";
import MobileMenu from "./MobileMenu/MobileMenu";
import Search from "./Search/Search";
import { useStateContext } from "../../Contexts/ContextProvider";

function Sliders({ children }) {
  const { desktopMenu, openMobileMenu, search } = useStateContext();

  return (
    <>
      {openMobileMenu && !desktopMenu ? (
        <MobileMenu />
      ) : search ? (
        <Search />
      ) : (
        children
      )}
    </>
  );
}

export default Sliders;
