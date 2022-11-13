import React, { useState } from "react";
import "./MobileMenu.css";
import { useStateContext } from "../../Contexts/ContextProvider";
import CloseButton from "../../imgs/CloseButton.svg";
import Facebook from "../../imgs/facebook.svg";
import Instagram from "../../imgs/instagram.svg";
import Twitter from "../../imgs/twitter.svg";
import World from "../../imgs/world.svg";

function MobileMenu({ children }) {
  const {
    openMobileMenu,
    setOpenMobileMenu,
    activeNav,
    setActiveNav,
    activeENGR,
    setActiveENGR,
  } = useStateContext();

  return (
    <>
      {!openMobileMenu ? (
        children
      ) : (
        <div className="mobileMenuContainer">
          <div className="mobileMenuHeader">
            <h1 style={{marginTop: "auto"}}>MENU</h1>
            <img
              src={CloseButton}
              alt="closeMenu"
              className="closeMenu"
              onClick={() => setOpenMobileMenu(false)}
            />
          </div>
          <div className="menuOptions">
            <a
              href="#mainone"
              onClick={() => {
                setOpenMobileMenu(false);
                setActiveNav("#mainone");
              }}
              className={activeNav === "#mainone" ? "activeTab" : ""}
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
              onClick={() => {
                setOpenMobileMenu(false);
                setActiveNav("#aboutus");
              }}
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
          <div className="changeLangMobile">
            <button
              className={
                activeENGR === "EN"
                  ? "changeLanguageActiveMobile"
                  : "changeLanguageMobile"
              }
              onClick={() => {
                setActiveENGR("EN");
              }}
            >
              EN
            </button>
            <p style={{ color: "#CFCFCF" }}>|</p>
            <button
              className={
                activeENGR === "GR"
                  ? "changeLanguageActiveMobile"
                  : "changeLanguageMobile"
              }
              onClick={() => {
                setActiveENGR("GR");
              }}
            >
              GR
            </button>
          </div>
          </div>
          <div className="menuFooter">
            <div className="socials">
              <img src={Facebook} alt="facebook" className="socialIcon" />
              <img src={Instagram} alt="instagram" className="socialIcon" />
              <img src={Twitter} alt="twitter" className="socialIcon" />
              <img src={World} alt="website" className="socialIcon" />
            </div>
            <p>Cookies. | Privacy.</p>
            <hr />
            <div className="contact">
              <p>S.und@themail.com</p>
              <p>+30 210 1234 567</p>
              <p>© The standard Copywrite 2020</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MobileMenu;
