// GuidingValues.js
import React from 'react';
import "./GuildingValues.css"
// import hand from "../../assets/hand.svg"
import hand from "../assets/hand.svg"
// import heart from "./../../assets/heart.svg"

const GuidingValues = () => {
  return (
      <div className="guiding-values">
        <h1 className='guid'>Our Guiding Values</h1>
    
      <div className="value-section1">
        <img src={heart} alt=""  className='heart'/>
        <h2>User Satisfaction</h2>
        <p>
          Our users are at the heart of everything we do. 
          We are dedicated to understanding and meeting
          their needs, ensuring every interaction with InciWatch 
          is a positive experience. From the ease of use of the
          platform to the responsiveness of our support team, we 
          strive to exceed expectations at every turn. Your safety
          and satisfaction are our top priorities, and we work 
          tirelessly to earn and maintain your trust.
        </p>
      </div>
      <div className="value-section2">
        <img src={hand} alt="" className='hand' />
        <h2>Team Work</h2>
        <p>
          We believe great things are achieved through collaboration. Our team is a diverse group of
          professionals who bring unique skills and perspectives to the table. By working together,
          we harness the power of collective expertise to solve complex problems and create innovative
          solutions. We extend this spirit of collaboration to our relationships with our customers, partners, and
          communities, believing that by working together, we can achieve more than we ever could alone.
        </p>
      </div>
    </div>
  );
};

export default GuidingValues;
