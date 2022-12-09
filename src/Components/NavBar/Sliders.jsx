import React from "react";
import MobileMenu from "./MobileMenu/MobileMenu";
import Search from "./Search/Search";
import { useStateContext } from "../../Contexts/ContextProvider";
import { Helmet  } from "react-helmet-async";

function Sliders({ children }) {
  const { desktopMenu, openMobileMenu, search } = useStateContext();

  return (
    <>
    <Helmet>
       <title>Sitaras</title>
       <meta name="description" content="lalal" data-rh="true" />
       <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://metatags.io/"/>
        <meta property="og:title" content="Meta Tags — Preview, Edit and Generate"/>
        <meta property="og:description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!"/>
        <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"/>
    </Helmet>
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
