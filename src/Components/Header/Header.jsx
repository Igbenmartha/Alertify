import React, { useEffect, useState } from 'react';
import "./style.css"
import logo from "../../assets/logo.svg";
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { FiMenu } from "react-icons/fi"; // Import burger menu icon
// Close icon for burger menu
import BuggerMenu from '../BuggerMenu/BuggerMenu';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Setting from './Setting';
import person from "../../assets/person.png";


const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [setting,setSetting] = useState(false)
  const [user,setUser]= useState({})
  const [profilePic, setProfilePic] = useState(null); 


  const toggleMenu = () => {
    setMenuOpen(true);
  };
  const token = useSelector((state) => state.user.token)
    const dispatch = useDispatch()
  const userDetail = () => {

    fetch(`https://alertify-9tr5.onrender.com/api/v1/user/one`, {  
      method: "GET",  
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`, 
      },
    })
    .then(response => response.json())
    .then(data => {
      setUser(data.data);  
      setProfilePic(data.data.profilePic);
      
    })
    .catch(error => {
    });
  };
  useEffect(()=>{
    userDetail()
  },[])


  return (
    <div className='Header'>
      <div className='Header-inner'>


        <div className='header-logo'>
          <img src={logo} alt="Logo" />

        </div>
        <div className='burger-menu'>
          <FiMenu size={30} onClick={toggleMenu} />

          {
            menuOpen ? <BuggerMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> : null
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
                    <img src={profilePic ? profilePic : person} alt=""   className='Cg' onMouseEnter={(() => setSetting(true))}/>
                  </div> 
                  {
                    setting? <Setting setSetting={setSetting}/>: null
                  }
                  <div className='Header-username-textholder'>
                    {user?user.fullName
                    :"Username"}
                    {/* <p>igbenji@gmail.com</p> */}
                  </div>

                </div>


                <button className='EmergencyCtbtn'onClick={(()=>navigate('/emergency'))}> Emergency Service</button>


              </div>
            </div>

          ) : (
            <div className='Auth'>
              <div className='AuthInner'>
                <p onClick={(() => navigate('/login'))}>Log In</p>
                <p onClick={(() => navigate('/signup'))}>Sign Up</p>
              </div>
              <button className='EmergencyCtbtn' onClick={() => navigate('/emergency')}>
                Emergency Services
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