import React from 'react'
import "./ForgotpasswordStyle.css"

const ForgotPassword = () => {
  return (
    <div className='ForgotPassword'>
      <div className='ForgotPassword-leftHolder'></div>
      <div className='ForgotPassword-rightHolder'>
        <div className='ResetPassword-header'>Reset Password
        <p className='ResetPassword-textHolder'> Enter your email to recover password</p>

        </div>
        <input type="email" placeholder='Email' className='resetInput' />
        <button className='resetBtn'>Verify</button>
      </div>
    </div>
  )
}

export default ForgotPassword