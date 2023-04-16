import { useEffect } from "react";

import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import AboutUs from "./Components/AboutUs/AboutUs";
import ContactUs from "./Components/ContactUs/ContactUs";
import Footer from "./Components/Footer/Footer";
import { useStateContext } from "./Contexts/ContextProvider";

function App() {
  const {
    setDesktopMenu,
    setScreenSize,
    screenSize,
  } = useStateContext();
  
  const documentHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
  };

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);
    window.addEventListener("resize", documentHeight);

    documentHeight();
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("resize", documentHeight);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (screenSize <= 1024) {
      setDesktopMenu(false);
    } else {
      setDesktopMenu(true);
    }
  }, [screenSize]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <NavBar />
      <Home />
      <AboutUs />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
