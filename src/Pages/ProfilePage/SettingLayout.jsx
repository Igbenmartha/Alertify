import React from 'react'
import ProfilePage from './ProfilePage'
import { Outlet } from 'react-router-dom'

const SettingLayout = () => {
  return (
    <div className='setting-layout'>
        <ProfilePage/>
        <Outlet/>
    </div>
  )
}

export default SettingLayout