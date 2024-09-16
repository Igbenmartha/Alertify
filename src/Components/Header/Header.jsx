import React, { useState } from 'react';
import "./HeaderStyle.css";
import logo from "../../assets/logo.svg";
import { NavLink, useNavigate } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { FiMenu } from "react-icons/fi"; // Import burger menu icon
 // Close icon for burger menu
import BuggerMenu from '../BuggerMenu/BuggerMenu';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(true);
  };
const token = useSelector((state)=>state.user.token)
console.log(token);


  return (
    <div className='Header'> 
      <div className='Header-inner'>
        <div className='logo'>
          <img src={logo} alt="Logo" />
        </div>
        <div className='burger-menu'   >
        <FiMenu size={30} onClick={toggleMenu}/>
       
          {
            menuOpen ? <BuggerMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/> : null
          }
        </div>
        <div className="Header-nav">
          <NavLink to="/" className={({ isActive }) => isActive ? "HeaderActive" : "HeaderNotActive"} >
            <p>Home</p>
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "HeaderActive" : "HeaderNotActive"} >
            <p>About</p>
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "HeaderActive" : "HeaderNotActive"}>
            <p>Contact Us</p>
          </NavLink>
         
         
        </div>

        {
          token ? (
              <div className='profileAuth'>
            <div className='Header-Profile'>
              <div className='Header-profile-inner'>
              <div className='Header-username-holder'>
                  <CgProfile className='Cg' onClick={(()=>navigate("/profile"))}/>
                </div> 
                <div className='Header-username-textholder'>
                  <h6>igben oghenfejiro Martha</h6>
                  <p>igbenji@gmail.com</p>
                </div>

              </div>
                  
            <button className='EmergencyCtbtn'> Emergency Contact</button>

                </div>
            </div> 
            
          ): (
            <div className='Auth'>
            <div className='AuthInner'>
              <p onClick={(()=>navigate('/login'))}>Log In</p>
              <p onClick={(()=>navigate('/signup'))}>Sign Up</p>
            </div>
            <button className='EmergencyCtbtn' onClick={() => navigate('/emergency')}>
              Emergency Contact
            </button>
          </div>
          )
        }
        {/* <div className='Auth'>
          <div className='AuthInner'>
            <p onClick={(()=>navigate('/login'))}>Log In</p>
            <p onClick={(()=>navigate('/signup'))}>Sign Up</p>
          </div>
          <button className='EmergencyCtbtn' onClick={() => navigate('/emergency')}>
            Emergency Contact
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Header;