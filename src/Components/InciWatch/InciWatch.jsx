import React from 'react'
 import "./InciWatchStyle.css"
 import Line1 from "../../assets/Line1.svg"
 import Polygon from "../../assets/Polygon.svg"

const InciWatch = () => {
  return (
    <div className='InciWatch'>
        <div className='InciWatch-Header'> Why choose Alertify</div>
        <div className='InciWatch-Holder'>
            <div className='InciWatch-circle-holder'>
                <div className='InciWatch-circle'>
                <div className='InciWatch-innercircle'>Send a distress message on one click of a button
                </div>

                </div>
                <div className='InciWatch-smallerNumber'> 01</div>

                </div> 
            <div className='InciWatch-circle-holderb'>
                <div className='InciWatch-circleb'>
                <div className='InciWatch-innercircleb'>Customizable emergency contacts list to choose who receive distress alerts
                </div>

                </div>
                <div className='InciWatch-smallerNumberb'> 02</div>

                </div> 
            <div className='InciWatch-circle-holderc'>
                <div className='InciWatch-circlec'>
                <div className='InciWatch-innercirclec'>Discreet alert option to avoid detection
                </div>

                </div>
                <div className='InciWatch-smallerNumberc'> 03</div>

                </div> 
        </div>
        <div className='InciWatch-Text'> Sign up now to enjoy this features</div>
        <button className='InciBtn'> Sign Up Now</button>
        <div className='InciWatch-Icon'>
            <div className='InciWatch-Icon1'>
            </div>
            <div className='InciWatch-Icon2'>
                <img src={Polygon}alt="Line" />
            </div>
            <div className='InciWatch-Icon1'>
            </div>
        </div>
        <div className='InciWatch-Iconb'>
            <div className='InciWatch-Icon1'>
            </div>
            <div className='InciWatch-Icon2'>
                <img src={Polygon}alt="Line" />
            </div>
            <div className='InciWatch-Icon1'>
            </div>
        </div>
    </div>
  )
}

export default InciWatch