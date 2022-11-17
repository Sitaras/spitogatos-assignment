import React, { useState } from "react";
import "./Home.css";
import Background from "../../imgs/background.png";

function Home() {
  const [activeDot, setActiveDot] = useState(1);

  const heroBanner = () => {
    if (activeDot === 1) {
      return (
        <>
          <img src={Background} alt="background" className="background" />
          <div className="textBlock">
            <h1>S.und Co</h1>
            <p className="greenLine" />
            <p>
              To take a trivial example, which of us ever undertakes laborious
              physical exercise, except to obtain some advantage from it?
            </p>
          </div>
        </>
      );
    } else if (activeDot === 2) {
      return (
        <>
          <img src={Background} alt="background" className="background" />
          <div className="textBlock">
            <h1>Custom Banner</h1>
            <p className="greenLine" />
            <p>
              Maybe transition needed.
            </p>
          </div>
        </>
      );
    } else if (activeDot === 3) {
      return (
        <>
          <img src={Background} alt="background" className="background" />
          <div className="textBlock">
            <h1>Spitogatos</h1>
            <p className="greenLine" />
            <p>
              Dimitrios Sitaras Assignment
            </p>
          </div>
        </>
      );
    }
  };

  return (
    <section id="mainone">
      {heroBanner()}
      <div className="heroBannerDotContainer">
        <div
          className={activeDot === 1 ? "heroBannerDotActive" : "heroBannerDot"}
          onClick={() => {
            setActiveDot(1);
          }}
        />
        <div
          className={activeDot === 2 ? "heroBannerDotActive" : "heroBannerDot"}
          onClick={() => {
            setActiveDot(2);
          }}
        />
        <div
          className={activeDot === 3 ? "heroBannerDotActive" : "heroBannerDot"}
          onClick={() => {
            setActiveDot(3);
          }}
        />
      </div>
    </section>
  );
}

export default Home;
