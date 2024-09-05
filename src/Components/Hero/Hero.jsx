import React from 'react'
import "./HeroStyle.css"

const Hero = () => {
    return (
        <div className='hero'>
            <div className='HeroHolder'>
            <div className='HeroleftHolder'>
                <div className='Heroinner-left-Holder'>
                    <div className='HeroinnerText-left-Holder'>Safety at your <span>Fingertips</span></div>
                    <div className='HeroinnerPara-left-Holder'>Feel  unsafe? One tap alert your trusted contact with your location and details. Your safety is our priority.</div>
                        <button className='HeroBtn'>Report Now</button>
                </div>

            </div>
            <div className='Heroinner-right-Holder'></div>

            
            </div>
        </div>
    )
}

export default Hero