import React from "react";
import "./NavBar.css";
import Logo from "../../assets/Logo.svg";
import SearchIcon from "../../assets/Search.svg";
import Menu from "../../assets/Menu.svg";
import { useStateContext } from "../../Contexts/ContextProvider";
import MobileMenu from "./MobileMenu/MobileMenu";
import Search from "./Search/Search";

function NavBar() {
  const {
    desktopMenu,
    openMobileMenu,
    search,
    setOpenMobileMenu,
    activeNav,
    setActiveNav,
    activeENGR,
    setActiveENGR,
    setSearch,
  } = useStateContext();

  return (
    <>
      <header>
        <div className="headerContainer">
          <div className="logoContainer">
            <img src={Logo} alt="Logo" className="logo" />
          </div>
          {desktopMenu && (
            <div className="navigation">
              <a
                href="#mainone"
                onClick={() => setActiveNav("#mainone")}
                className={activeNav === "#mainone" ? "activeTab" : "anchor"}
              >
                Main One
              </a>
              <a
                href="#pagetwo"
                onClick={() => setActiveNav("#pagetwo")}
                className={activeNav === "#pagetwo" ? "activeTab" : ""}
              >
                Page Two
              </a>
              <a
                href="#pagethree"
                onClick={() => setActiveNav("#pagethree")}
                className={activeNav === "#pagethree" ? "activeTab" : ""}
              >
                Page Three
              </a>
              <a
                href="#aboutus"
                onClick={() => setActiveNav("#aboutus")}
                className={activeNav === "#aboutus" ? "activeTab" : ""}
              >
                About us
              </a>
              <a
                href="#ourwork"
                onClick={() => setActiveNav("#ourwork")}
                className={activeNav === "#ourwork" ? "activeTab" : ""}
              >
                Our Work
              </a>
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={activeNav === "#contact" ? "activeTab" : ""}
              >
                Contact
              </a>
            </div>
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
                setSearch(true);
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
      {search && <Search />}
      {openMobileMenu && <MobileMenu />}
    </>
  );
}

export default NavBar;
