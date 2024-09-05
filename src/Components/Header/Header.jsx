import React from 'react'
import "./HeaderStyle.css"
import logo from "../../assets/logo.svg"
import { GoPerson } from "react-icons/go";

const Header = () => {
  return ( 
    <div className='Header'>
        <div className='Header-inner'> 
            <div className='logo'>
                <img src={logo} alt="Logo" />
            </div>
            <div className='Header-nav'>
                <p> Home</p>
                <p>About us</p>
                <p>Contact Us</p>
            </div>
            <div className='Auth'>
            <div className='AuthInner'>
                <p>Log In</p> 
                <p>Sign Up</p>
            </div> 
            <button className='EmergencyCtbtn'> Emergency Contact</button>

            </div> 
        </div>
    </div>
  )
}

export default Header
