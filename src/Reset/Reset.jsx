import React, { useState } from 'react';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './Reset.css';
import Alert from '../assets/alert.svg';

const Reset = () => {

  // const [passwordVisible, setPasswordVisible] = useState(false);

  // Toggle password visibility function
  // const togglePasswordVisibility = () => {
    // setPasswordVisible(!passwordVisible);
  // };

  return (
    <div className='Reset-maincontainer'>
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
          {/* <div className='password-container'> */}
            <input
              type='password'
              placeholder='password'
            />
            {/* <button
              type="button"
              className='toggle-password'
            >
            </button> */}
          {/* </div> */}
        </div>
        <div className='Form-group'>
          <label htmlFor="comfirm password"></label>
            <input
              type='password'
              placeholder='confirm password'
            />
            {/* <button
              type="button"
              className='toggle-password'
            > */}
            {/* </button> */}
        </div>
        <div className='reset-btn'>

        <button className='Reset-button'>
          Reset Password
        </button>
        </div>
      </form>
    </div>
  );
};

export default Reset;
