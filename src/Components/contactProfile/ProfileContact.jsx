import React, { useState } from 'react'
import "./ProfileContactStyle.css"
import ModalProfile from '../ModalProfile/ModalProfile'
import axios from 'axios'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'


const ProfileContact = () => {
    const [toggle, setToggle] = useState(false)
    const [allContact, setAllContact] = useState([])
    const  [edit,setEdit] = useState(false)
    const token = useSelector((state) => state.user.token)
    const Nav= useNavigate()
    const allEmergencyContact = async () => {
        const url = 'https://alertify-9tr5.onrender.com/api/v1/user/all-contacts'
        try {
            const response = await axios.get(url, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
            })
         
            // console.log(response.data.data);

            setAllContact(response.data.data);



        } catch (error) {
            // console.log(error);


        }
    }


    useEffect(() => {
        allEmergencyContact()
    }, [])
    // const contactId = allContact.filter((e) => e.contactId)
    const deleteContact = async (contactId) => {
        const url = 'https://alertify-9tr5.onrender.com/api/v1/user/delete-contact'

        try {
            const response = await axios.put(url, { contactId }, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
            })
         
            Swal.fire({
                title: 'Succrss!',
                text: response.data.message,
                icon: 'Success',
                confirmButtonText: 'OK'
              });
            



        } catch (error) {
            // console.log(error); 
            Swal.fire({
                title: 'Error!',
                text: error.response.data.message,
                icon: 'Error',
                confirmButtonText: 'OK'
              });
            // console.log(error.response.data.message);


        }
    }
  
    return (
        <div className='ProfileContact'>


         
                        <button className='ProfileCatAddBtn' onClick={(() => Nav('/add-emergency-contact'))}>Add contact</button>
                        <div className='ProfileContactBoxHolder'>
                            {
                                allContact.map((e) =>
                                    <div className='ProfileContactBox'>
                                        <div className='ProfileContactBoxCont'>{}
                                            contact Id: <span >{e.contactId}</span>
                                        </div>
                                        <div className='ProfileContactBoxCont'>
                                            Name: <span>{e.name}</span>
                                        </div>
                                        <div className='ProfileContactBoxCont'>
                                            Contact: <span> {e.phoneNumber}</span>
                                        </div>
                                        <div className='ProfileContactBoxCont'>
                                            Email: <span>{e.email}</span>
                                        </div>
                                        <div className='ProfileContactBtnDiv'>
                                            <div className='ProfileContacDeleteBtn' onClick={()=>deleteContact(e.contactId)}>Delete</div>
                                            <div className='ProfileContacEditBtn'>Edit</div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                


        </div>
    )
}

export default ProfileContact