import React, { useState } from 'react'
import ProfilePage from './ProfilePage'
import { Outlet } from 'react-router-dom'
import Modal from '../../Components/contactProfile/Modal'

const SettingLayout = ({toggle,setToggle}) => {
  
  return (
    <div className='setting-layout'>
        <ProfilePage />
        <Outlet/>
        <>
          {
            toggle ? 
            <div className='ModalHolder'>
             <Modal  setToggle={setToggle}/> 
            </div> : null
          }
        </>
    </div>
  )
}

export default SettingLayout