import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './Login.css';
import Alert from '../../assets/Alert.svg';

const Login = () => {
  // State to manage password visibility
  const [passwordVisible, setPasswordVisible] = useState(false);

  // Toggle password visibility function
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className='Login-maincontainer'>
      <div className="logo">
        <img src={Alert} alt="Alert Logo" />
      </div>
      
      <div className='reset'>
        <h2>Reset Password</h2>
      </div>
      <form>
        <div className='Form-group'>
          <label htmlFor="Email"></label>
          <input type="email" placeholder='email' />
        </div>
        <div className='Form-group'>
          <label htmlFor="Password"></label>
          <div className='password-container'>
            <input
              type={passwordVisible ? 'text' : 'password'}
              placeholder='password'
            />
            <button
              type="button"
              className='toggle-password'
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
        </div>
        <div className='Form-group'>
          <label htmlFor="comfirm password"></label>
          <div className='confirm password-container'>
            <input
              type={passwordVisible ? 'text' : 'password'}
              placeholder='confirm password'
            />
            <button
              type="button"
              className='toggle-password'
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
        </div>
        <button className='Reset-button'>
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default Login;
