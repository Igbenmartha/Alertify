import React, { useState } from 'react'
import "./ProfileContactStyle.css"
import ModalProfile from '../ModalProfile/ModalProfile'
import axios from 'axios'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const ProfileContact = () => {
    const [toggle, setToggle] = useState(false)
    const [allContact, setAllContact] = useState([])
    const  [edit,setEdit] = useState(false)
    const token = useSelector((state) => state.user.token)
    const allEmergencyContact = async () => {
        const url = 'https://alertify-9tr5.onrender.com/api/v1/user/all-contacts'
        try {
            const response = await axios.get(url, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
            })
            console.log(response.data.data);

            setAllContact(response.data.data);



        } catch (error) {
            console.log(error);


        }
    }


    useEffect(() => {
        allEmergencyContact()
    }, [])
    // const contactId = allContact.filter((e) => e.contactId)
    const deleteContact = async (contactId) => {
        const url = 'https://alertify-9tr5.onrender.com/api/v1/user/delete-contact'
        console.log(contactId);

        try {
            const response = await axios.put(url, { contactId }, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
            })
            console.log(response.data.data);



        } catch (error) {
            console.log(error);


        }
    }
    const getContactId = () => {

    }
    return (
        <div className='ProfileContact'>


            {
                toggle ? <ModalProfile setToggle={setToggle} /> :
                    <>
                        <button className='ProfileCatAddBtn' onClick={(() => setToggle(true))}>Add contact</button>
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
                    </>
            }


        </div>
    )
}

export default ProfileContact