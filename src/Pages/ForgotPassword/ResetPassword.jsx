import React from 'react'
import "./ForgotpasswordStyle.css"
import { useNavigate } from 'react-router-dom'

const ResetPassword = () => {
  const navigate= useNavigate()
  return (
    <div className='ForgotPassword'>
      <div className='ForgotPassword-leftHolder'>
        <div className='forgotpassword-logo' onClick={(()=>navigate('/'))}></div>
      </div>
      <div className='ForgotPassword-rightHolder'>
        <div className='ResetPassword-header'>Reset Password

        </div>
        <input type="password" placeholder='Password' className='resetInput' />
        <input type="password" placeholder='Confirm Password' className='resetInput' />
        <button className='resetBtn'>Done</button>
      </div>
    </div>
  )
}

export default ResetPassword