import React from 'react'
import "./HeaderStyle.css"
import logo from "../../assets/logo.svg"
import { GoPerson } from "react-icons/go";
import { NavLink } from 'react-router-dom';

const Header = () => {
  return ( 
    <div className='Header'>
        <div className='Header-inner'> 
            <div className='logo'>
                <img src={logo} alt="Logo" />
            </div>
            <div className='Header-nav'>
               <NavLink to= "/"     className={({ isActive }) =>
                isActive ? "HeaderActive" : "HeaderNotActive"
              }> <p>Home</p></NavLink>
               
                <p>About us</p>
               <NavLink to= "/contact"     className={({ isActive }) =>
                isActive ? "HeaderActive" : "HeaderNotActive"
              }> <p>Contact Us</p></NavLink>
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
