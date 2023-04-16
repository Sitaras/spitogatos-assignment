import React from "react";
import "./Home.css";
import Background from "../../assets/background.png";
import Carousel from "./Carousel";

function Home() {

  return (
    <section id="mainone">
      <Carousel>
        <div style={{ position: "relative" }}>
          <img src={Background} alt="background" className="background" />
          <div className="textBlock">
            <h1>S.und Co</h1>
            <p className="greenLine" />
            <p>
              To take a trivial example, which of us ever undertakes laborious
              physical exercise, except to obtain some advantage from it?
            </p>
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <img src={Background} alt="background" className="background" />
          <div className="textBlock">
            <h1>Spitogatos</h1>
            <p className="greenLine" />
            <p>Dimitrios Sitaras Assignment</p>
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <img src={Background} alt="background" className="background" />
          <div className="textBlock">
            <h1>Spitogatos</h1>
            <p className="greenLine" />
            <p>Dimitrios Sitaras Assignment</p>
          </div>
        </div>
      </Carousel>
    </section>
  );
}

export default Home;
