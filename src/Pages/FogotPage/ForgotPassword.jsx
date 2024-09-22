import React from 'react'
import Alert from '../../assets/Alert.svg'
import { useNavigate } from 'react-router-dom'
import "./ForgotPassword.css"

const ForgetPassword = () => {

const navigate = useNavigate()

  return (
    <div className='main-forgetpassword'>
        <div className='LogoDivpart'>
         <img src= {Alert} alt=""/>
        </div>
    <div className='Forgotten-password'>
        <h3>Reset Password</h3>
        <p>Enter you mail to recover password</p>
        <input type="email" placeholder='email' className='input10' />
    </div>
    <div className='submit10'>
    <button  className='submit10-btn' onClick={(()=>navigate("/Reset"))}>Submit</button>
    </div>
    </div>
  )
}

export default ForgetPassword
