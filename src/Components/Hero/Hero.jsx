import React, { useState } from 'react';
import "./HeroStyle.css";
// import Description from '../Description/Description'
import Popup from '../Popup/Popup'

const Hero = () => {
    // State to manage the visibility of the popup
    const [isPopupVisible, setPopupVisible] = useState(false);

    // Function to show the popup
    const showPopup = () => {
        setPopupVisible(true);
    };

    // Function to hide the popup
    const hidePopup = () => {
        setPopupVisible(false);
    };

    return (
        <div className='hero'>
            <div className='HeroHolder'>
                <div className='HeroleftHolder'>
                    <div className='Heroinner-left-Holder'>
                        <div className='HeroinnerText-left-Holder'>
                            Safety at your <span>Fingertips</span>
                        </div>
                        <div className='HeroinnerPara-left-Holder'>
                            Feel unsafe? One tap alert your trusted contact with your location and details. Your safety is our priority.
                        </div>
                        <button className='HeroBtn' onClick={showPopup}>Report Now</button>
                    </div>
                </div>
                <div className='Heroinner-right-Holder'></div>
            </div>


            {/* Render the PopupComponent conditionally */}
            {isPopupVisible && <Popup onClose={hidePopup} />}
        </div>
    );
}

export default Hero;
