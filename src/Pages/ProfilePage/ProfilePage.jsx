import React, { useState } from 'react';
import "./ProfileStyle.css";

import Profile from '../../Components/profiler/Profile';
import Header  from '../../Components/Header/Header'
import ProfileContact from '../../Components/contactProfile/ProfileContact';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
    const [activeComponent, setActiveComponent] = useState('true');
    const Nav = useNavigate()
    const personal = ()=>{
        Nav("/profile-setting")
        setActiveComponent(true)

    }
    const contact = ()=>{
        Nav("/contact-setting")
        setActiveComponent(false)

    }
   

    return (
        <div className='Profile'>
            <div className='ProfilePageHeader'>
                <div className='ProfileLogo' onClick={(()=>Nav('/'))}></div>
            </div>
         <div className='Mobile-header'></div>
            <div className='Profile-Main'>
                <div className='Profile-SubHeader'>
                    <button className= {`ProfileCatBtn ${activeComponent ? 'active' :''}`}
                     onClick={personal}>Personal details</button>
                    <button className=  {`ProfileEmgBtn ${!activeComponent ? 'active' :''}`}
                    onClick={contact}>Emergency contact detail</button>
                </div>
                {/* {
               
               activeComponent? <Profile/> :
               <ProfileContact/>
                } */}
            </div>
        </div>
    );
};

export default ProfilePage;
