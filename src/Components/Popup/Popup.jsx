import React from 'react';
import './Popup.css'; 
import Description from '../../../Description/Description';

const Popup = ({ onClose,setPopupVisible }) => {
    return (
        <div className='popup-overlay'>
            <div className='popup-content'>
                <button className='close-button' onClick={onClose}>x</button>
            <Description onClose={onClose} setPopupVisible={setPopupVisible}/>
            </div>
        </div>
    );
}

export default Popup;
