import React, { useState } from 'react';
import "./HeaderStyle.css";
import logo from "../../assets/logo.svg";
import { NavLink, useNavigate } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { FiMenu } from "react-icons/fi"; // Import burger menu icon
import { AiOutlineClose } from "react-icons/ai"; // Close icon for burger menu

const Header = () => {
<<<<<<< HEAD
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
            <button className='EmergencyCtbtn'>
                

                 Emergency Contact</button>
                
=======
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
>>>>>>> 90c593f529b2090f31cadbe82f77e20295cf1407

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='Header'> 
      <div className='Header-inner'>
        <div className='logo'>
          <img src={logo} alt="Logo" />
        </div>
        <div className='burger-menu' onClick={toggleMenu}>
          {menuOpen ? <AiOutlineClose size={30} /> : <FiMenu size={30} />}
        </div>
        <div className={`Header-nav ${menuOpen ? 'open' : ''}`}>
          <NavLink to="/" className={({ isActive }) => isActive ? "HeaderActive" : "HeaderNotActive"}>
            <p>Home</p>
          </NavLink>
          <p>About us</p>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "HeaderActive" : "HeaderNotActive"}>
            <p>Contact Us</p>
          </NavLink>
         
        </div>
        <div className='Auth'>
          <div className='AuthInner'>
            <p>Log In</p>
            <p>Sign Up</p>
          </div>
          <button className='EmergencyCtbtn' onClick={() => navigate("/emergency")}>
            Emergency Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
