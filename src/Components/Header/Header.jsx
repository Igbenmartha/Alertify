import React, { useState } from 'react';
import "./HeaderStyle.css";
import logo from "../../assets/logo.svg";
import { NavLink, useNavigate } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { FiMenu } from "react-icons/fi"; // Import burger menu icon
import { AiOutlineClose } from "react-icons/ai"; // Close icon for burger menu

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='Header'
      <div className='Header-inner'>
        <div className='logo'>
          <img src={logo} alt="Logo" />
        </div>
        {/* Burger Menu Icon */}
        <div className='burger-menu' onClick={toggleMenu}>
          {menuOpen ? <AiOutlineClose size={30} /> : <FiMenu size={30} />}
        </div>
        {/* Navigation Links */}
        <div className={`Header-nav ${menuOpen ? 'open' : ''}`}>
          <NavLink to="/" className={({ isActive }) => isActive ? "HeaderActive" : "HeaderNotActive"}>
            <p>Home</p>
          </NavLink>
          <p>About us</p>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "HeaderActive" : "HeaderNotActive"}>
            <p>Contact Us</p>
            

          </NavLink>
          <div className='Header-Auth'>
          <NavLink to="/Login" className={({ isActive }) => isActive ? "HeaderActive" : "HeaderNotActive"}>
            <p>Login</p
          </NavLink>
          <NavLink to="/signup" className={({ isActive }) => isActive ? "HeaderActive" : "HeaderNotActive"}>
            <p>Sign Up</p>
            

          </NavLink>
          <NavLink to="/emergency" className={({ isActive }) => isActive ? "HeaderActive" : "HeaderNotActive"}>
            <p>Emergency Contact</p>
            

          </NavLink>
          </div>
          
        </div>
        <div className='Auth'>
          <div className='AuthInner'>
            <p>Log In</p>
            <p>Sign Up</p>
          </div>
          <button className='EmergencyCtbtn' onClick={(()=> navigate("/emergency"))}>Emergency Contact</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
