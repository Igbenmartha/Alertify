import React from 'react'
import "./ScenerioStyle.css"
import rafiki from '../../assets/rafiki.svg'
import amico from '../../assets/amico.svg'
import pana1 from '../../assets/pana1.svg'
import pana2 from '../../assets/pana2.svg'
import pana3 from '../../assets/pana3.svg'
import bro from '../../assets/bro.svg'

const Scenerio = () => {
    const item = [
        {
            img: rafiki,
            title:"Domestic violence  victims",
            text: "Individuals in abusive relationship or at risk of domestic violence need a discreet and reliable tool to seek help without alerting the abuser, and this app can serve as a life line in critical situations."
        },
        {
            img: amico,
            title:"Elderly & vulnerable individual",
            text: "Elderly people or people with limited mobility will be more prone to incident and medical emergencies which makes them need this app to quickly and easily notify caregivers or relatives. "
        },
        {
            img: pana1,
            title:"Chronic health condition",
            text: "Individuals with chronic health condition will need this application to quickly and easily notify caregivers or relative when they need them the most."
        },
        {
            img: pana2,
            title:"High-Risk jobs",
            text: "Individuals working late night shifts might find themselves in situation where they are alone or in unsafe condition and need a quick way to send a distress signal."
        },
        {
            img: pana3,
            title:"Travelers & Tourist",
            text: "Individuals traveling for leisure or business, especially in unfamiliar or high-risk areas might face unsafe situations in new environment and need an easy way to contact loved ones."
        },
        {
            img: bro,
            title:"Parent & families",
            text: "Parents who wants to ensure the safety of their children, whether they are young kids, teenagers or college students would appreciate an app that allows their kids to quickly send alert’s if they are in danger."
        },
        
    ]
    return (
        <div className='scenerio'>
            <div className='Scenerio-holder'>
                <div className='Scenerio-title'>
                Scenarios on who can use <span>Alertify</span>

                </div>
                <main>
                    {
                        item.map((e)=>
                            <div className='Main-box'>
                        <div className='Main-boxImg'>
                            <img src={e.img} alt="" />
                        </div>
                        <div className='Main-boxText'>
                            <div className='Main-box-title'>{e.title}</div>
                            <div className='Main-box-text'>{e.text}</div>
                        </div>
                    </div>
                        )
                    }
                    

                </main>
            </div>

        </div>
    )
}

export default Scenerio