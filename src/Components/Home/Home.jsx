import React from "react";
import "./Home.css";
import Background from "../../imgs/background.png";

function Home() {
  return (
    <section id="mainone">
      <img src={Background} alt="background" className="background" />
      <div className="textBlock">
        <h1>S.und Co</h1>
        <div className="greenLine"></div>
        <p>
          To take a trivial example, which of us ever undertakes laborious
          physical exercise, except to obtain some advantage from it?
        </p>
      </div>
    </section>
  );
}

export default Home;
