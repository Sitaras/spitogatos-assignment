import React from "react";
import { useStateContext } from "../../../Contexts/ContextProvider";
import CloseButton from "../../../assets/CloseButton.svg";
import Facebook from "../../../assets/facebook.svg";
import Instagram from "../../../assets/instagram.svg";
import Twitter from "../../../assets/twitter.svg";
import World from "../../../assets/world.svg";

import styles from "./MobileMenu.module.css";

function MobileMenu({ handleCloseMobileMenu }) {
  const { activeENGR, setActiveENGR } = useStateContext();

  const closeMobileMenu = () => {
    const body = document.body;
    body.className = "";
    handleCloseMobileMenu();
  };

  return (
    <div className={styles.mobileMenuSection}>
      <div className={styles.mobileMenuContainer}>
        <div className={styles.mobileMenuHeader}>
          <h1 style={{ marginTop: "auto" }}>MENU</h1>
          <img
            src={CloseButton}
            alt="close menu"
            className={styles.closeMenu}
            onClick={() => {
              closeMobileMenu();
            }}
          />
        </div>
        <div className={styles.menuOptions}>
          <a
            href="#mainone"
            onClick={() => {
              closeMobileMenu();
            }}
          >
            Main One
          </a>
          <a href="#pagetwo">Page Two</a>
          <a href="#pagethree">Page Three</a>
          <a
            href="#aboutus"
            onClick={() => {
              closeMobileMenu();
            }}
          >
            About us
          </a>
          <a href="#ourwork">Our Work</a>
          <a
            href="#contact"
            onClick={() => {
              closeMobileMenu();
            }}
          >
            Contact
          </a>
          <div className={styles.changeLangMobile}>
            <button
              className={
                activeENGR === "EN"
                  ? styles.changeLanguageActiveMobile
                  : styles.changeLanguageMobile
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
                  ? styles.changeLanguageActiveMobile
                  : styles.changeLanguageMobile
              }
              onClick={() => {
                setActiveENGR("GR");
              }}
            >
              GR
            </button>
          </div>
        </div>
        <div className={styles.menuFooter}>
          <div className={styles.socials}>
            <img src={Facebook} alt="facebook" className={styles.socialIcon} />
            <img
              src={Instagram}
              alt="instagram"
              className={styles.socialIcon}
            />
            <img src={Twitter} alt="twitter" className={styles.socialIcon} />
            <img src={World} alt="website" className={styles.socialIcon} />
          </div>
          <p>Cookies. | Privacy.</p>
          <hr />
          <div className={styles.contact}>
            <p>S.und@themail.com</p>
            <p>+30 210 1234 567</p>
            <p>© The standard Copywrite 2020</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
