import React, { useState } from 'react'
import "./ProfileContactStyle.css"
import ModalProfile from '../ModalProfile/ModalProfile'

const ProfileContact = () => {
    const [toggle,setToggle] = useState(false)
    const item = [1,2,3,4,5,]
  return (
    <div className='ProfileContact'> 
    
        <button className='ProfileCatAddBtn' onClick={(()=>setToggle(true))}>Add contact</button>
        <div className='ProfileContactBoxHolder'>
        {
            item.map(()=>
                <div className='ProfileContactBox'>
            <div className='ProfileContactBoxCont'>
                Name: <span>Igben Oghenefejiro</span>
            </div>
            <div className='ProfileContactBoxCont'>
                 Contact: <span> 08066888888</span>
            </div>
            <div className='ProfileContactBoxCont'>
                 Email: <span> Joedoeeeee@gmail.com</span>
            </div>
            <div className='ProfileContactBtnDiv'>
                <button className='ProfileContacEditBtn'>Edit</button>
                <button className='ProfileContacDeleteBtn'>Delete</button>
            </div>
        </div>
            )
        }
        </div>
        {
            toggle ?<ModalProfile setToggle={setToggle}/> : null
        }
        
       
    </div>
  )
}

export default ProfileContact