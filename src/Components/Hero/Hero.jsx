import React, { useState } from 'react';
import "./HeroStyle.css";
// import Description from '../Description/Description'
import Popup from '../Popup/Popup'
import { useSelector } from 'react-redux';
import { Toaster, toast } from 'react-hot-toast';


const Hero = () => {

    const [isPopupVisible, setPopupVisible] = useState(false);
    const [Loading,setLoading] = useState(false)

    const hidePopup = () => {
        setPopupVisible(false);

    };
  const token = useSelector((state) => state.user.token)

    const Alert = (e)=>{
        e.preventDefault()
        setPopupVisible(true);
        setLoading(true)

        fetch(`https://alertify-9tr5.onrender.com/api/v1/user/distress`, {  
            method: "POST",  
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`, 
            },
          })
          .then(response => response.json())
          .then(data => {
            toast.success(data.message); 
            setLoading(false) 
          })
          .catch(error => {
            console.error('Error:', error);
            setLoading(false)
          });
    }
    return (
        <div className='heroPage'>
        <Toaster/>

            <div className='HeroHolder'>
                <div className='HeroleftHolder'>
                    <div className='Heroinner-left-Holder'>
                        <div className='HeroinnerText-left-Holder'>
                            Safety at your <span>Fingertips</span>
                        </div>
                        <div className='HeroinnerPara-left-Holder'>
                            Feel unsafe? One tap alert your trusted contact with your location and details. Your safety is our priority.
                        </div>
                        <button className='HeroBtn' onClick={Alert}>{!Loading?"Report Now" :"Loading"}</button>
                    </div>
                </div>
                <div className='Heroinner-right-Holder'></div>
            </div>


            {/* Render the PopupComponent conditionally */}
            {isPopupVisible && <Popup onClose={hidePopup} setPopupVisible={setPopupVisible}/>}
        </div>
    );
}

export default Hero;
