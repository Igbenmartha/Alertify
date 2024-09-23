import React from 'react'
// import done2 from "../../assets/done2.png"
import "./EmailVerified.css"
import { useNavigate } from 'react-router-dom'

const EmailVerified = () => {
     const navigate = useNavigate()
  return (
    <div className='Verify-container'>
     <div className='verify-box'>
        <div className='Verify-icon'></div>
        <div className='Verified-text-holder'>Email Verified
            <p>your email address successfully verified</p>
        </div>
        <button className='Verified-home' onClick={(()=>navigate('/'))}>Home</button>
     </div>
    </div>
  )
}

export default EmailVerified