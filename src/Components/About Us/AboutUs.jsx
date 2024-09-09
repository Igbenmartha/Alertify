import React from 'react';
import about2 from "../../assets/about2.jpg"
import us from "../../assets/us.svg";
import './AboutUs.css';
import GuidingValues from '../../Guiding Values/GuidingValues';

const AboutUs = () => {
  return (
    <div className='main-container1'>
      <img src={us} alt="About Us" className='abt-img'/>
      <div className='us'>
        <h1>Hello, Welcome to <span className='inci'>Alertify</span></h1>

        <div className='text1'>
          <h3>At Alertify, we believe that everyone has to feel safe, no matter where</h3>
          <h3>they are or any situation they find themselves in. Our mission is to empower</h3>
          <h3>individuals with a reliable, easy-to-use tool that connects them to help when they</h3>
          <h3>need it most.</h3>
        </div>
      </div>

      <div className='us2'>
        <h3>Alertify was founded by a dedicated team of tech innovators who understand</h3>
        <h3>the importance of safety. We've combined our expertise and personal experiences</h3>
        <h3>to create an app that offers more than just technology—it offers peace of mind. Whether</h3>
        <h3>you are out for a jog, heading home late, or traveling in unfamiliar places, Alertify is</h3>
        <h3>designed to be your companion, providing security and support at the touch of a button.</h3>
      </div>

      <div className='us3'>
        <h1>Our Mission</h1>
        <h3>At Alertify, our mission is to empower individuals with the tools and confidence to protect</h3>
        <h3>themselves and their loved ones in moments of uncertainty. We are committed to</h3>
        <h3>making safety reliable, accessible, and intuitive by providing a platform that ensures</h3>
        <h3>that help is just one tap away. Through innovation, user-centric design, and a deep</h3>
        <h3>understanding of the challenges people face, we strive to create a safer world where</h3>
        <h3>everyone feels secure, no matter where they are.</h3>
      </div>

      <GuidingValues/>
      <h1 className='meet'>Meet Our Team</h1>
      <div className="circle-container">
        <div className="circle-item">
          <img src={about2} alt="Ibrahim Olaitan" className="circle-image" />
          <p className="circle-text"><h3>Ibrahim Olaitan</h3></p>
        </div>
        <div className="circle-item">
          <img src={about2} alt="Igben Martha" className="circle-image" />
          <p className="circle-text"><h3>Igben Martha</h3></p>
        </div>
        <div className="circle-item">
          <img src={about2} alt="Elechi Jude" className="circle-image" />
          <p className="circle-text"><h3>Elechi Jude</h3></p>
        </div>
      </div>
      <div className="circle-container">
        <div className="circle-item">
          <img src={about2} alt="Ama Victory" className="circle-image" />
          <p className="circle-text"><h3>Ama Victory</h3></p>
        </div>
        <div className="circle-item">
          <img src={about2} alt="Mbachu Charles" className="circle-image" />
          <p className="circle-text"><h3>Mbachu Charles</h3></p>
        </div>
        <div className="circle-item">
          <img src={about2} alt="Ejiogu Favour" className="circle-image" />
          <p className="circle-text"><h3>Ejiogu Favour</h3></p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
