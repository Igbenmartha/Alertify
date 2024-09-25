import React, { useEffect, useState } from 'react';
import "./BuggerStyle.css";
import { AiOutlineClose } from "react-icons/ai";
import home from "../../assets/home.svg";
import about from "../../assets/about.svg";
import contact from "../../assets/contact.svg";
import emergent from "../../assets/emergent.svg";
import setting from "../../assets/setting.svg";
import logout from "../../assets/logout.svg";
import signup from "../../assets/signup.svg";
import person from "../../assets/person.png";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cleartoken } from '../../Global/Slice';

const BuggerMenu = ({ menuOpen, setMenuOpen }) => {
    const [user,setUser]= useState({})
    const [profilePic, setProfilePic] = useState(null); 
  const dispatch = useDispatch()


    const navigate = useNavigate();

    
    const closeMenu = () => {
        setMenuOpen(false);
    };

    const handleNavigation = (path) => () => {
        navigate(path);
        closeMenu(); 
    };
const handleLogout=()=>{
    dispatch(cleartoken())
}
    const token = useSelector((state)=>state.user.token)
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
        <div className={`BuggerMenu ${menuOpen ? 'open' : ''}`}>
            <div className='Bugger-Header'>
                <div className='bugger-headerclose'>
                    <AiOutlineClose size={30} onClick={closeMenu} />
                </div>
                <div className='bugger-profile-holder'>
                    <div className='bugger-profile'>
                    <img src={profilePic ? profilePic : person} alt=""   />

                    </div>
                    <div className='bugger-profile-text-holder'>
                        <h5>
                            {
                                user?  user.fullName :"userName"
                            }
                        </h5>
                    </div>
                </div>
            </div>
            <div className='bugger-main'>
                <div className='bugger-main-div' onClick={handleNavigation("/")}>
                    <div className='bugger-icon'>
                        <img src={home} alt="home" />
                    </div>
                    <p>Home</p>
                </div>
                <div className='bugger-main-div' onClick={handleNavigation("/about")}>
                    <div className='bugger-icon'>
                        <img src={about} alt="about" />
                    </div>
                    <p>About us</p>
                </div>
                <div className='bugger-main-div' onClick={handleNavigation("/contact")}>
                    <div className='bugger-icon'>
                        <img src={contact} alt="contact" />
                    </div>
                    <p>Contact us</p>
                </div>
                <div className='bugger-main-div' onClick={handleNavigation("/emergency")}>
                    <div className='bugger-icon'>
                        <img src={emergent} alt="emergent" />
                    </div>
                    <p>Emergency contact</p>
                </div>
                <div className='bugger-main-div' onClick={handleNavigation("/profile-setting")}>
                    <div className='bugger-icon'>
                        <img src={setting} alt="setting" />
                    </div>
                    <p>Setting</p>
                </div>

                {
                    token ? 
                   null
                 :
            <>
            
            <div className='bugger-main-div'  onClick={handleNavigation("/signup")}>
            <div className='bugger-icon'>
            <img src={signup} alt="" />

            </div>
                   <p>Sign Up</p>
                    </div>
                    <div className='bugger-main-div' onClick={handleNavigation("/login")}>
                    <div className='bugger-icon'>
            <img src={logout} alt="" />

            </div>
                 <p>Login</p>
                    </div>
            </>

                }
               
            </div>

            {
                token ? 
                <div className='bugger-Logout-holder'onClick={handleLogout}>
                <div className='bugger-logouticon'>
                    <img src={logout} alt="" />
                </div>
                <p>Logout</p>
            </div>
            : null
            }
           
        </div>
    );
}

export default BuggerMenu;
