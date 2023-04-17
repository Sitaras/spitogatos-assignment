import React, { useState } from "react";
import Logo from "../../assets/Logo.svg";
import SearchIcon from "../../assets/Search.svg";
import Menu from "../../assets/Menu.svg";
import { useStateContext } from "../../Contexts/ContextProvider";
import MobileMenu from "./MobileMenu/MobileMenu";
import Search from "./Search/Search";

import styles from  "./NavBar.module.css";

function NavBar() {
  const { desktopMenu, activeENGR, setActiveENGR } =
    useStateContext();

  const [openSearch, setOpenSearch] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <>
      <header>
        <div className={styles.headerContainer}>
          <div className={styles.logoContainer}>
            <img src={Logo} alt="Logo" className={styles.logo} />
          </div>
          {desktopMenu && (
            <nav className={styles.navigation}>
              <a
                data-scroll="mainone"
                href="#mainone"
                className={styles.activeTab}
              >
                Main One
              </a>
              <a data-scroll="pagetwo" href="#pagetwo">
                Page Two
              </a>
              <a data-scroll="pagethree" href="#pagethree">
                Page Three
              </a>
              <a data-scroll="aboutus" href="#aboutus">
                About us
              </a>
              <a data-scroll="ourwork" href="#ourwork">
                Our Work
              </a>
              <a data-scroll="contact" href="#contact">
                Contact
              </a>
            </nav>
          )}

          <div className={styles.changeLangAndSearch}>
            {desktopMenu && (
              <div className={styles.changeLang}>
                <button
                  className={
                    activeENGR === "EN"
                      ? styles.changeLanguageActive
                      : styles.changeLanguage
                  }
                  onClick={() => {
                    setActiveENGR("EN");
                  }}
                >
                  EN
                </button>
                <p style={{ color: "#858585", margin: "auto" }}>|</p>
                <button
                  className={
                    activeENGR === "GR"
                      ? styles.changeLanguageActive
                      : styles.changeLanguage
                  }
                  onClick={() => {
                    setActiveENGR("GR");
                  }}
                >
                  GR
                </button>
              </div>
            )}
            <img
              src={SearchIcon}
              alt="Search"
              className={styles.searchLogo}
              onClick={() => {
                const body = document.body;
                body.className = "modal-open";
                setOpenSearch(true);
              }}
            />
            {!desktopMenu && (
              <img
                src={Menu}
                alt="Menu"
                className={styles.menuLogo}
                onClick={() => {
                  const body = document.body;
                  body.className = "modal-open";
                  setOpenMobileMenu(true);
                }}
              />
            )}
          </div>
        </div>
      </header>
      {openSearch && (
        <Search
          handleCloseSearch={() => {
            setOpenSearch(false);
          }}
        />
      )}
      {openMobileMenu && (
        <MobileMenu
          handleCloseMobileMenu={() => {
            setOpenMobileMenu(false);
          }}
        />
      )}
    </>
  );
}

export default NavBar;
