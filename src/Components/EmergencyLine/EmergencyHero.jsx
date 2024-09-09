import React from 'react'
import "./EmergencyHero.css"
const EmergencyHero = () => {
  return (
    <div className="emergencyHeroBody">
      <div className="emergencyHeroBodyInner">
        <div className='emergencyHeroTextDiv'>
            <div className='emergencyHeroTexts'>
                <h1>In danger? <br/>Help is closer than you think.</h1>
                <p>Instantly notify Emergency Services</p>
            </div>
        </div>
        <div className='emergencyHeroImageDiv'></div>
      </div>
    </div>
  );
}

export default EmergencyHero