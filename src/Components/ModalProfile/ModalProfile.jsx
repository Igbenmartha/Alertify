import React, { useState } from 'react'
import "./ModalProfileStyle.css"
import { useSelector } from 'react-redux'

const ModalProfile = ({setToggle}) => {
    const [name,setName]= useState('')
    const [email,setEmail]= useState('')
    const [phoneNumber,setPhoneNumber]= useState('')
    const [loading,setLoading]= useState(false)

    const token = useSelector((state) => state.user.token)

    const addEmergencyContact=()=>{
        const data={name,email,phoneNumber}
        console.log(data);
        
        setLoading(true)
        fetch(`https://alertify-9tr5.onrender.com/api/v1/user/add-emergencyContact`, {  
            method: "POST",  
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`, 
            },
            body: JSON.stringify(data)
          })
          .then(response => response.json())
          .then(data => {
            console.log(data); 
            console.log(data.message)
            setLoading(false) 
          })
          .catch(error => {
            console.error('Error:', error);  
            setLoading(false)
          });
    }
  return (
    <div className='ModalProfile'>
        <div className='ModalProfile-inner'>
            <div className='modalprofile-close' onClick={(()=>setToggle(false))}>X</div>
            <div className='div-holder'>
               <div className='div-holdername'>Name:</div>
                <input type="text" onChange={((e)=>setName(e.target.value))} />
            </div>
            <div className='div-holder'>
                
            <div className='div-holdername'>Email:</div>

                <input type="email" onChange={((e)=>setEmail(e.target.value))}/>
            </div>
            <div className='div-holder'>
                
            <div className='div-holdername'>Number:</div>
            
                <input type="text"  onChange={((e)=>setPhoneNumber(e.target.value))}/>
            </div>
            <button className='ModalProfile-addBtn' onClick={addEmergencyContact}>{!loading? "Add":"loading..."}</button>
        </div>
    </div>
  )
}

export default ModalProfile