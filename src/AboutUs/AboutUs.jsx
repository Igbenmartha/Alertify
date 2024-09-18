import React from 'react';
import about2 from "../assets/about2.jpg"
import us from "../assets/us.svg"
import './AboutUs.css';
import Jude from '../assets/Jude.png'
import Martha from '../assets/Martha.png'
import Victory from '../assets/Victory.png'
import Olaitan from '../assets/Olaitan.png'
import Charles from '../assets/Charles.png'
import Favour from '../assets/Favour.png'
import GuidingValues from '../GuidingValues/GuidingValues'

const AboutUs = () => {
  return (
    <div className='main-container1'>
      <img src={us} alt="AboutUs" className='abt-img'/>
      <div className='us'>
        <h1>Hello, Welcome to <span className='inci'>Alertify</span></h1>

        <div className='text1'>
          <p>At Alertify, we believe that everyone has to feel safe, no matter where</p>
          <p>they are or any situation they find themselves in. Our mission is to empower</p>
          <p>individuals with a reliable, easy-to-use tool that connects them to help when they</p>
          <p>need it most.</p>
        </div>
      </div>

      <div className='us2'>
        <p>Alertify was founded by a dedicated team of tech innovators who understand</p>
        <p>the importance of safety. We've combined our expertise and personal experiences</p>
        <p>to create an app that offers more than just technology—it offers peace of mind. Whether</p>
        <p>you are out for a jog, heading home late, or traveling in unfamiliar places, Alertify is</p>
        <p>designed to be your companion, providing security and support at the touch of a button.</p>
      </div>

      <div className='us3'>
        <h1>Our Mission</h1>
        <p>At Alertify, our mission is to empower individuals with the tools and confidence to protect</p>
        <p>themselves and their loved ones in moments of uncertainty. We are committed to</p>
        <p>making safety reliable, accessible, and intuitive by providing a platform that ensures</p>
        <p>that help is just one tap away. Through innovation, user-centric design, and a deep</p>
        <p>understanding of the challenges people face, we strive to create a safer world where</p>
        <p>everyone feels secure, no matter where they are.</p>
      </div>

      <GuidingValues/>
      <h1 className='meet'>Meet Our Team</h1>
      <div className="circle-container">
        <div className="circle-item">
          <img src={Olaitan} alt="Ibrahim Olaitan" className="circle-image" />
          <p className="circle-text"><h3>Ibrahim Olaitan</h3></p>
        </div>
        <div className="circle-item">
          <img src={Martha} alt="Igben Martha" className="circle-image" />
          <p className="circle-text"><h3>Igben Martha</h3></p>
        </div>
        <div className="circle-item">
          <img src={Jude} alt="Elechi Jude" className="circle-image" />
          <p className="circle-text"><h3>Elechi Jude</h3></p>
        </div>
      </div>
      <div className="circle-container">
        <div className="circle-item">
          <img src={Victory} alt="Ama Victory" className="circle-image" />
          <p className="circle-text"><h3>Amasiatu Victory</h3></p>
        </div>
        <div className="circle-item">
          <img src={Charles} alt="Mbachu Charles" className="circle-image" />
          <p className="circle-text"><h3>Mbachu Charles</h3></p>
        </div>
        <div className="circle-item">
          <img src={Favour} alt="Ejiogu Favour" className="circle-image" />
          <p className="circle-text"><h3>Ejiogu Favour</h3></p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
