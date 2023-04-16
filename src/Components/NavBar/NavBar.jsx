import React, { useState } from "react";
import "./NavBar.css";
import Logo from "../../assets/Logo.svg";
import SearchIcon from "../../assets/Search.svg";
import Menu from "../../assets/Menu.svg";
import { useStateContext } from "../../Contexts/ContextProvider";
import MobileMenu from "./MobileMenu/MobileMenu";
import Search from "./Search/Search";

function NavBar() {
  const { desktopMenu, activeENGR, setActiveENGR } =
    useStateContext();

  const [openSearch, setOpenSearch] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <>
      <header>
        <div className="headerContainer">
          <div className="logoContainer">
            <img src={Logo} alt="Logo" className="logo" />
          </div>
          {desktopMenu && (
            <nav className="navigation">
              <a data-scroll="mainone" href="#mainone" className={"activeTab"}>
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

          <div className="changeLangAndSearch">
            {desktopMenu && (
              <div className="changeLang">
                <button
                  className={
                    activeENGR === "EN"
                      ? "changeLanguageActive"
                      : "changeLanguage"
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
                      ? "changeLanguageActive"
                      : "changeLanguage"
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
              className="searchLogo"
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
                className="menuLogo"
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
