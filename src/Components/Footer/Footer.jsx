import React from "react";
import Logo from "../../assets/Logo.svg";
import { useStateContext } from "../../Contexts/ContextProvider";

import styles from "./Footer.module.css";

function Footer() {
  const { desktopMenu } = useStateContext();
  return (
    <footer className={styles.footer}>
      <div className={styles.copyrightContainer}>
        <p className={styles.copyright}>© The standard Copywrite 2020</p>
      </div>
      {desktopMenu && <p className={styles.cookies}>Cookies. | Privacy.</p>}
      <div className={styles.logoFooterContainer}>
        <img src={Logo} alt="Logo" className={styles.logoFooter} />
      </div>
    </footer>
  );
}

export default Footer;
