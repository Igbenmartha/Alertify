import React, { useState } from 'react';
import "./ProfileStyle.css";
;
import Profile from '../../Components/profiler/Profile';
import ProfileContact from '../../Components/contactProfile/ProfileContact';

const ProfilePage = () => {
    const [activeComponent, setActiveComponent] = useState('true');
   

    return (
        <div className='Profile'>
            <div className='ProfilePageHeader'>
                <div className='ProfileLogo'></div>
            </div>
            <div className='Profile-Main'>
                <div className='Profile-SubHeader'>
                    <button className= {`ProfileCatBtn ${activeComponent ? 'active' :''}`}
                     onClick={(()=>setActiveComponent(true))}>Personal details</button>
                    <button className=  {`ProfileEmgBtn ${!activeComponent ? 'active' :''}`}
                    onClick={(()=>setActiveComponent(false))}>Emergency contact detail</button>
                </div>
                {
               
               activeComponent? <Profile/> :
               <ProfileContact/>
                }
            </div>
        </div>
    );
};

export default ProfilePage;
