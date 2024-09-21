import React from 'react';
import "./BuggerStyle.css";
import { AiOutlineClose } from "react-icons/ai";
import home from "../../assets/home.svg";
import about from "../../assets/about.svg";
import contact from "../../assets/contact.svg";
import emergent from "../../assets/emergent.svg";
import setting from "../../assets/setting.svg";
import logout from "../../assets/logout.svg";
import person from "../../assets/person.png";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BuggerMenu = ({ menuOpen, setMenuOpen }) => {
    const navigate = useNavigate();
    
    const closeMenu = () => {
        setMenuOpen(false);
    };

    const handleNavigation = (path) => () => {
        navigate(path);
        closeMenu(); 
    };

    const token = useSelector((state)=>state.user.token)

    return (
        <div className={`BuggerMenu ${menuOpen ? 'open' : ''}`}>
            <div className='Bugger-Header'>
                <div className='bugger-headerclose'>
                    <AiOutlineClose size={30} onClick={closeMenu} />
                </div>
                <div className='bugger-profile-holder'>
                    <div className='bugger-profile'>
                        <img src={person} alt="person" />
                    </div>
                    <div className='bugger-profile-text-holder'>
                        <h5>Username</h5>
                        <p>username@gmail.com</p>
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
                    <p>Profile</p>
                </div>

                {
                    token ? 
                   null
                 :
            <>
            
            <div className='bugger-main-div'  onClick={handleNavigation("/login")}>
                      Login
                    </div>
                    <div className='bugger-main-div' onClick={handleNavigation("/signup")}>
                      Sign Up
                    </div>
            </>

                }
               
            </div>

            {
                token ? 
                <div className='bugger-Logout-holder'>
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
