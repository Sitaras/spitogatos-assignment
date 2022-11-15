import React from "react";
import "./AboutUs.css";
import Picture1 from "../../imgs/Picture1.png";
import Picture2 from "../../imgs/Picture2.png";

function AboutUs() {
  return (
    <section id="aboutus" className="autoScreens">
      <div className="containerAboutUs">
        <img src={Picture1} alt="photoshooter" className="photo1" />
        <div className="textBlockColumn1">
          <h4>Since the 1500s</h4>
          <h2>The standard</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt.
          </p>
        </div>
        <div className="textBlockColumn2">
          <h4>Since the 1500s</h4>
          <h2>The standard</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="searchBtn">Search</button>
        </div>
        <img src={Picture2} alt="photoshooter" className="photo2" />
      </div>
    </section>
  );
}

export default AboutUs;
