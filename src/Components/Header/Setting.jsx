import React from 'react'
import "./settingStyle.css"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { RiErrorWarningLine } from 'react-icons/ri'

const Setting = ({setSetting}) => {
    const Nav = useNavigate()
    const handleSetting = ()=>{
        Nav('/profile-setting')
        setSetting(false)
    }
    // const Logout = async()=>{
    //     try {
    //         const response = await axios.post('https://alertify-9tr5.onrender.com/api/v1/user/sign-out')
    //         console.log(response);
    //         Nav('/login')
            
    //     } catch (error) {
    //         console.log(error);
            
            
    //     }

    // }
  return (
    <div className='Setting' onMouseLeave={(()=>setSetting(false))}>
        <div className='Setting-holder' onClick={handleSetting}>
            <div className='setting-icon-holder'></div>
            Setting
        </div>
        <div className='Setting-holder'onClick={Logout}>
            <div className='setting-logout'></div>
            Logout
        </div>
    </div>
  )
}

export default Setting