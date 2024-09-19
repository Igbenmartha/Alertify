import React from 'react'
import "./settingStyle.css"
import { useNavigate } from 'react-router-dom'

const Setting = ({setSetting}) => {
    const Nav = useNavigate()
    const handleSetting = ()=>{
        Nav('/profile')
        setSetting(false)
    }
  return (
    <div className='Setting' onMouseLeave={(()=>setSetting(false))}>
        <div className='Setting-holder' onClick={handleSetting}>
            <div className='setting-icon-holder'></div>
            Setting
        </div>
        <div className='Setting-holder'>
            <div className='setting-logout'></div>
            Logout
        </div>
    </div>
  )
}

export default Setting