import React from 'react'
import "./ModalProfileStyle.css"

const ModalProfile = ({setToggle}) => {
  return (
    <div className='ModalProfile'>
        <div className='ModalProfile-inner'>
            <div className='modalprofile-close' onClick={(()=>setToggle(false))}>X</div>
            <div className='div-holder'>
               <div className='div-holdername'>Name:</div>
                <input type="text" />
            </div>
            <div className='div-holder'>
                
            <div className='div-holdername'>Email:</div>

                <input type="text" />
            </div>
            <div className='div-holder'>
                
            <div className='div-holdername'>Number:</div>
            
                <input type="text" />
            </div>
            <button className='ModalProfile-addBtn'>Add</button>
        </div>
    </div>
  )
}

export default ModalProfile