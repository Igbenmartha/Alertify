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
  const closeMenu = () => {
    setMenuOpen(false);
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
          <NavLink to="/" className={({ isActive }) => isActive ? "HeaderActive" : "HeaderNotActive"} onClick={closeMenu}>
            <p>Home</p>
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "HeaderActive" : "HeaderNotActive"} onClick={closeMenu}>
            <p>About</p>
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "HeaderActive" : "HeaderNotActive"} onClick={closeMenu}>
            <p>Contact Us</p>
          </NavLink>
          <div className='Header-Auth'> 
          <NavLink to="/login" className={({ isActive }) => isActive ? "HeaderActive" : "HeaderNotActive"} onClick={closeMenu}>
            <p>Login</p>
          </NavLink>
          <NavLink to="signup" className={({ isActive }) => isActive ? "HeaderActive" : "HeaderNotActive"} onClick={closeMenu}>
            <p>Sign Up</p>
          </NavLink>
          <NavLink to="/emergency" className={({ isActive }) => isActive ? "HeaderActive" : "HeaderNotActive"} onClick={closeMenu}>
            <p>Emergency</p>
          </NavLink>
          </div>
         
        </div>
        <div className='Auth'>
          <div className='AuthInner'>
            <p onClick={(()=>navigate('/login'))}>Log In</p>
            <p onClick={(()=>navigate('/signup'))}>Sign Up</p>
          </div>
          <button className='EmergencyCtbtn' onClick={() => navigate('/emergency')}>
            Emergency Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;