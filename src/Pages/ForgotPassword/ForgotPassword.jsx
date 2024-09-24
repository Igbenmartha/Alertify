import React, { useState } from 'react'
import "./ForgotpasswordStyle.css"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'

const ForgotPassword = () => {
  const [email,setEmail] = useState('')
  const [loading,setLoading] = useState(false)

  const navigate= useNavigate()

  const url = "https://alertify-9tr5.onrender.com/api/v1/user"

  const handleResetPassword = async(e)=>{
    e.preventDefault();
    const data ={email}
    try {
      setLoading(true)
      const res = await axios.post(`${url}/forgot-password`,data)
      toast.success(res.data.message);
      setTimeout(()=>{
        navigate('/login')
      },2000)
      
      setLoading(false)
    } catch (error) {
      toast.error(error.response.data.message);
      
      setLoading(false)
    }

  }

  return (
    <div className='ForgotPassword'>
      <div className='ForgotPassword-leftHolder'>
        <div className='forgotpassword-logo' onClick={(()=>navigate('/'))}></div>
      </div>
      <div className='ForgotPassword-rightHolder'>
        <div className='ResetPassword-header'>Reset Password
        <p className='ResetPassword-textHolder'> Enter your email to recover password</p>

        </div>
        <input type="email" placeholder='Email' className='resetInput' onChange={((e)=>setEmail(e.target.value))} />
        <button className='resetBtn'onClick={handleResetPassword}>{loading? "loading..." : "Verify"}</button>
      </div>
      <Toaster/>
    </div>
  )
}

export default ForgotPassword