import React from 'react'
import "./HeaderStyle.css"
import logo from "../../assets/logo.svg"
import { GoPerson } from "react-icons/go";
import { NavLink, useNavigate } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";

const Header = () => {
  const navigate= useNavigate()
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
            {/* <div className='Auth'>
            <div className='AuthInner'>
                <p>Log In</p> 
                <p>Sign Up</p>
               
               
            </div> 
            
            <button className='EmergencyCtbtn'> Emergency Contact</button>

            </div>  */}
            <div className='profileAuth'>
            <div className='Header-Profile'>
                   <div className='Header-username-holder'>
                  <CgProfile className='Cg' onClick={(()=>navigate("/profile"))}/>
                </div> 
                <div className='Header-username-textholder'>
                  <h6>igben oghenfejiro</h6>
                  <p>igbenji@gmail.com</p>
                </div>
            <button className='EmergencyCtbtn'> Emergency Contact</button>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
