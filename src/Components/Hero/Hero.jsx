import React, { useState } from 'react';
import "./HeroStyle.css";
// import Description from '../Description/Description'
import Popup from '../Popup/Popup'
import { useSelector } from 'react-redux';

const Hero = () => {
    // State to manage the visibility of the popup
    const [isPopupVisible, setPopupVisible] = useState(false);

    // Function to show the popup
    // const showPopup = () => {
    //     setPopupVisible(true);
    // };

    // Function to hide the popup
    const hidePopup = () => {
        setPopupVisible(false);

    };
  const token = useSelector((state) => state.user.token)

    const Alert = ()=>{
        setPopupVisible(true);

        fetch(`https://alertify-9tr5.onrender.com/api/v1/user/distress`, {  
            method: "POST",  
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`, 
            },
          })
          .then(response => response.json())
          .then(data => {
            console.log(data.message);  
          })
          .catch(error => {
            console.error('Error:', error);  
          });
    }
    return (
        <div className='heroPage'>
            <div className='HeroHolder'>
                <div className='HeroleftHolder'>
                    <div className='Heroinner-left-Holder'>
                        <div className='HeroinnerText-left-Holder'>
                            Safety at your <span>Fingertips</span>
                        </div>
                        <div className='HeroinnerPara-left-Holder'>
                            Feel unsafe? One tap alert your trusted contact with your location and details. Your safety is our priority.
                        </div>
                        <button className='HeroBtn' onClick={Alert}>Report Now</button>
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
