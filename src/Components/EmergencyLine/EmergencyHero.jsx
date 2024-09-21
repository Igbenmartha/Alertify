import React from "react";
import "./emergencycallline.css";
import "./emergencyMobile.css";
import Emergencypic from "../../assets/Emergency-Illustration.svg";
const EmergencyHero = () => {
  return (
    <div className="HomePgeContainerInner">
      <div className="HomePageHerosection">
        <div className="HomePageHeroInnerSideOne">
          <h1>In danger?</h1>
          <h1>help is closer than you think</h1>
          <p>instantly notify emergency services</p>
        </div>
        <div className="HomePageHeroInnerSideTwo">
          <img src={Emergencypic} className="CallImage" />
        </div>
      </div>
    </div>
  );
};

export default EmergencyHero;
