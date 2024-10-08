import React, { useState } from 'react'
import "./ModalProfileStyle.css"
import { useSelector } from 'react-redux'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const ModalProfile = ({setToggle}) => {
    const [name,setName]= useState('')
    const [email,setEmail]= useState('')
    const [phoneNumber,setPhoneNumber]= useState('')
    const [loading,setLoading]= useState(false)

    const token = useSelector((state) => state.user.token)
    const Nav = useNavigate()

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
            // console.log(data); 
            toast.success(data.message)
            setTimeout(()=>{
              Nav('/contact-setting')
            },2000)
            setLoading(false) 
          })
          .catch(error => {
            console.log(error);
            
            toast.error( error.message);  
            setLoading(false)
          });
    }
  return (
    <div className='ModalProfile'>
      <Toaster/>
        <div className='ModalProfile-inner'>
          <div className='ModalProfile-header'>Add trusted contacts and mails</div>
            {/* <div className='modalprofile-close' onClick={(()=>setToggle(false))}>X</div> */}
            <div className='div-holder'>

                <input type="text" 
                placeholder='Contact name'
                onChange={((e)=>setName(e.target.value))} />
            </div>
            <div className='div-holder'>
                

                <input type="email"
                placeholder='Emergency Email'

                 onChange={((e)=>setEmail(e.target.value))}/>
            </div>
            <div className='div-holder'>
                
            
                <input type="text" 
                placeholder='Emergency Contact'
             

                 onChange={((e)=>setPhoneNumber(e.target.value))}/>
            </div>
            <button className='ModalProfile-addBtn' onClick={addEmergencyContact}>{!loading? "Add":"loading..."}</button>
        </div>
    </div>
  )
}

export default ModalProfile