import React, { useEffect, useState } from 'react';
import "./style.css"
import logo from "../../assets/logo.svg";
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { FiMenu } from "react-icons/fi"; // Import burger menu icon
// Close icon for burger menu
import BuggerMenu from '../BuggerMenu/BuggerMenu';
import { useSelector } from 'react-redux';
import axios from 'axios';

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(true);
  };
  const token = useSelector((state) => state.user.token)
  const userId = useSelector((state) => state.user.id)
  // console.log(token);
  // const {userId} = useParams();
  console.log("this is happening", userId);

  // const userDetail = async (e) => {
  //   e.preventDefault();
  //   const url = "https://alertify-9tr5.onrender.com/api/v1/user"

  //   try {
  //       const res = await axios.get(`${url}/${userId}`


  //       )
  //       console.log(res);

  //   } catch (error) {
  //           console.log(error);

  //   }
  // }

  const userDetail = async (e) => {
    e.preventDefault();
    const url = "https://alertify-9tr5.onrender.com/api/v1/user";

    if (!userId) {
      console.error('userId is not defined');
      return;
    }

    console.log(`Requesting URL: ${url}/${userId}`);

    try {
      const res = await axios.get(`${url}/${userId}`);
      console.log('API Response:', res);
    } catch (error) {
      console.error('API Error:', error);
    }
  }

  useEffect(() => {
    if (userId) {
      userDetail();
    }
  }, [userId]);
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
                    <CgProfile className='Cg' onClick={(() => navigate(`/profile`))} />
                  </div>
                  <div className='Header-username-textholder'>
                    <h6>igben oghenfejiro</h6>
                    {/* <p>igbenji@gmail.com</p> */}
                  </div>

                </div>

                <button className='EmergencyCtbtn'> Emergency Contact</button>

              </div>
            </div>

          ) : (
            <div className='Auth'>
              <div className='AuthInner'>
                <p onClick={(() => navigate('/login'))}>Log In</p>
                <p onClick={(() => navigate('/signup'))}>Sign Up</p>
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