import React from "react";
import "./Footer.css";
import Logo from "../../imgs/Logo.svg";
import { useStateContext } from "../../Contexts/ContextProvider";

function Footer() {
  const { desktopMenu } = useStateContext();
  return (
    <footer>
      <div className="copyrightContainer">
        <p className="copyright">© The standard Copywrite 2020</p>
      </div>
      {desktopMenu ? <p className="cookies">Cookies. | Privacy.</p> : null}
      <div className="logoFooterContainer">
        <img src={Logo} alt="Logo" className="logoFooter" />
      </div>
    </footer>
  );
}

export default Footer;
