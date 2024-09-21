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

    // const Alert = (e)=>{
    //     e.preventDefault()
    //     setLoading(true)
    //     if (!token) {
    //             toast.error("Emergency action cannot be completed. Please log in to send a distress alert.");
    //             setLoading(false);
    //             return;
    //           }

    //     fetch(`https://alertify-9tr5.onrender.com/api/v1/user/distress`, {  
    //         method: "POST",  
    //         headers: {
    //           "Content-Type": "application/json",
    //           "Authorization": `Bearer ${token}`, 
    //         },
    //       })
    //       .then(response => response.json())
    //       .then(data => {
    //         toast.success(data.message); 
    //     setPopupVisible(true);

    //         setLoading(false) 
    //       })
    //       .catch(error => {
    //         console.error('Error:', error);
    //         setLoading(false)
    //       });
    // }

    // const Alert = async (e) => {
    //     e.preventDefault();
    //     setLoading(true);
        
    //     if (!token) {
    //         toast.error("Emergency action cannot be completed. Please log in to send a distress alert.");
    //         setLoading(false);
    //         return;
    //     }
    
    //     // Get user location
    //     try {
    //         const position = await new Promise((resolve, reject) => {
    //             navigator.geolocation.getCurrentPosition(resolve, reject);
    //         });
            
    //         const lat = position.coords.latitude;
    //         const lon = position.coords.longitude;
    
          
    //         const response = await fetch("https://alertify-9tr5.onrender.com/api/v1/user/distress", {  
    //             method: "POST",  
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 "Authorization":` Bearer ${token}`, 
    //             },
    //             body: JSON.stringify({ latitude: lat, longitude: lon }) // Sending coordinates
    //         });
            
    //         const data = await response.json();
    //         if (data.success) {
    //             setPopupVisible(true);
    //             toast.success(data.message);
    //         } else {
    //             setPopupVisible(true);
    //             toast.error(data.message);

    //         }
    //     } catch (error) {
    //         console.error('Error getting location:', error);
    //         toast.error("Unable to get your location. Please allow location access.");
    //     } finally {
    //         setLoading(false);
    //     }
    // };



    // const Alert = async (e) => {
    //     e.preventDefault();
    //     setLoading(true);
    
    //     if (!token) {
    //         toast.error("Emergency action cannot be completed. Please log in to send a distress alert.");
    //         setLoading(false);
    //         return;
    //     }
    
    //     // Get user location
    //     try {
    //         const position = await new Promise((resolve, reject) => {
    //             navigator.geolocation.getCurrentPosition(resolve, reject, {
    //                 enableHighAccuracy: true, // Enable high accuracy
    //                 timeout: 10000, // Timeout after 10 seconds
    //                 maximumAge: 5000, // Allow cached location up to 5 seconds old
    //             });
    //         });
    
    //         const lat = position.coords.latitude;
    //         const lon = position.coords.longitude;
    //         const accuracy = position.coords.accuracy;
    
    //         // Ensure location accuracy (e.g., under 30 meters is acceptable)
    //         if (accuracy > 30) {
    //             toast.warning("Location accuracy is too low. Try again for better accuracy.");
    //             setLoading(false);
    //             return;
    //         }
    
    //         const response = await fetch("https://alertify-9tr5.onrender.com/api/v1/user/distress", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 "Authorization": `Bearer ${token}`,
    //             },
    //             body: JSON.stringify({ latitude: lat, longitude: lon }) // Sending coordinates
    //         });
    
    //         const data = await response.json();
    //         if (data.success) {
    //             setPopupVisible(true);
    //             toast.success(data.message);
    //         } else {
    //             setPopupVisible(true);
    //             toast.error(data.message);
    //         }
    //     } catch (error) {
    //         console.error('Error getting location:', error);
    //         toast.error("Unable to get your location. Please allow location access.");
    //     } finally {
    //         setLoading(false);
    //     }
    // };


    const Alert = async (e) => {
        e.preventDefault();
        setLoading(true);
    
        if (!token) {
            toast.error("Emergency action cannot be completed. Please log in to send a distress alert.");
            setLoading(false);
            return;
        }
    
        // Check for geolocation permission before proceeding
        try {
            const permissionStatus = await navigator.permissions.query({ name: 'geolocation' });
    
            if (permissionStatus.state === 'denied') {
                toast.error("Location permission is denied. Please enable location services for your browser.");
                setLoading(false);
                return;
            }
        } catch (err) {
            console.error('Permission error:', err);
            toast.error("Unable to verify location permissions.");
            setLoading(false);
            return;
        }
    
        // Get user location
        try {
            const position = await new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(resolve, reject, {
                    enableHighAccuracy: true,  // Request more accurate results
                    timeout: 10000,            // Adjust the timeout for slower connections
                    maximumAge: 0              // Prevent using cached location data
                });
            });
    
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
    
            // Call the backend API with the location data
            const response = await fetch("https://alertify-9tr5.onrender.com/api/v1/user/distress", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify({ latitude: lat, longitude: lon }) // Send coordinates
            });
    
            const data = await response.json();
            if (data.success) {
                setPopupVisible(true);
                toast.success(data.message);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.error('Error getting location:', error);
            toast.error("Unable to get your location. Please allow location access or try again.");
        } finally {
            setLoading(false);
        }
    };
    
    
    
      
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
