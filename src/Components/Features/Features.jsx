import React from 'react' 
import "./FeatureStyle.css"
import  FeaturesIcon1 from "../../assets/FeaturesIcon1.svg"
import  FeaturesIcon2 from "../../assets/FeaturesIcon2.svg"
import  FeaturesIcon3 from "../../assets/FeaturesIcon3.svg"

const Features = () => {
    const item =[
        {
            icon: FeaturesIcon1,
            title: "Instant ",
            span: "alert",
            text: "This features allows user to quickly send a distress signal to their emergency contact and authorities with just one tap."
        },
        {
            icon:FeaturesIcon2,
            title: "Real-Time location ",
            span: "sharing",
            text: "This feature allow the app to send your real-time location to your emergency contacts when you triggered an alert."
        },
        {
            icon:FeaturesIcon3,
            title: "Emergency ",
            span: "contact",
            text: "This feature allow the trusted individuals you choose within the app to receive alert in case of an emergency."
        },
        
    ]
  return (
    <div className='Features'> 
    <div className='Features-inner'>
    <div className='Feature-Header'>FEATURES & BENEFITS</div>
        <div className='Feature-section1'>
            <div className='Features-section1-left'><span className='Together'>Together</span> for a <span className='safer'>safer</span> Nigeria.  </div>
            <div className='Features-section1-right'>
            “With this application, you can enjoy peace of mind
knowing fully well that you can send a distress alert
pin pointing your location to emergency services
and love ones. This app ensure your safety by
facilitating immediate alert on click of a button
during unsafe situation.”
            </div>
        </div>
        <div className='Features-section2'>
        <div className='Features-section2inner'>
           {
            item.map((e)=>
                <div className='Features-box'> 
            <div className='FeaturesIcon'>
                <img src={e.icon} alt="" />
            </div> 
            <div className='FeatureBox-holder'>
                <div className='FeatureBox-title'>{e.title} <span>{e.span}</span></div>
                <div className='FeatureBox-text'>{e.text}</div>
            </div>
         </div>
            )
           }
        </div>

        </div>
    </div>
       
            
    </div>
  )
}

export default Features