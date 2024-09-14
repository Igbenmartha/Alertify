import React from 'react'
import "./FooterStyle.css"
import logo from "../../assets/logo.svg"
import { FaFacebookF } from "react-icons/fa";
import { RxTwitterLogo } from "react-icons/rx";
import { RxInstagramLogo } from "react-icons/rx";

const Footer = () => {
  return (
    <div className='Footer'>
        <div className='Footer-section1'>
            <div className='Fotter-logo'>
                <img src={logo} alt="Logo" />
            </div>
            <div className='footer-contact-text'>Contact us through our social media platforms</div>
            <div className='footericon'>
                <div className='Footer-icon'>
                    <FaFacebookF color="white" size="20px"/>
                </div>
                <div className='Footer-icon'>
                    <RxTwitterLogo color="white" size="20px"/>
                </div>
                <div className='Footer-icon'>
                    <RxInstagramLogo color="white" size="20px"/>
                </div>
            </div>
        </div>
        <div className='Footer-section2'>
            <div className=' Footer-section2-inner'>
                <div className='Footer-section-2A'>
                    <div className='Fotter-section2-QuicklinkHolder'> QUICK LINK</div>
                    <div className='Footer-section2-aboutusHolder'>
                        <p>About Us</p>
                        <p>Terms & Agreement</p>
                        <p>Pricing</p>
                    </div>
                </div>
                <div className='Footer-section-2b'>
               
                <div className='Fotter-section2-ContactHolder'>CONTACT INFORMATION</div>
                <div className='Footer-section2-infoHolder'>
                        <p>Info@InciWatch.com</p>
                        <p>+234-000-000-0000-Ajeromi
                        Ifelodun, Lagos State</p>
                    </div>
                </div>
                <div className='Footer-section-2c'>
                <div className='Fotter-section2-NewsHolder'>News Letter</div>
                    <button className='suscribeBtn'>Suscribe</button>
                </div>
                
                
            </div>
        </div>
    </div>
  )
}

export default Footer
 