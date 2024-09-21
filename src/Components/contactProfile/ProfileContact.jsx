import React, { useState } from 'react'
import "./ProfileContactStyle.css"
import ModalProfile from '../ModalProfile/ModalProfile'
import axios from 'axios'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'
import Modal from './Modal'
import "./style.css"
import { HashLoader } from 'react-spinners'


const ProfileContact = () => {
    const [allContact, setAllContact] = useState([])
    const [edit, setEdit] = useState(false)
    const [loading,setLoading] = useState(false)
    const token = useSelector((state) => state.user.token)
    
    const Nav = useNavigate()
    const allEmergencyContact = async () => {
        const url = 'https://alertify-9tr5.onrender.com/api/v1/user/all-contacts'
        setLoading(true)
        try {
            const response = await axios.get(url, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
            })

            // console.log(response.data.data);
                    setLoading(false)
            setAllContact(response.data.data);



        } catch (error) {
            // console.log(error);
            setLoading(false)

        }
    }


    useEffect(() => {
        allEmergencyContact()
    }, [])
    const deleteContact = async (contactId) => {
        // Show a confirmation SweetAlert
        Swal.fire({
            title: 'Are you sure?',
            text: 'Do you really want to delete this contact?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#072AC8',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel',
            customClass: {
                popup: 'custom-swal-popup'
            }
        }).then(async (result) => {
            // If the user clicks "Yes, delete it"
            if (result.isConfirmed) {
                const url = 'https://alertify-9tr5.onrender.com/api/v1/user/delete-contact';
    
                try {
                    // Perform the API call to delete the contact
                    const response = await axios.put(url, { contactId }, {
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`,
                        },
                    });
    
                    // Show success message if API call was successful
                    Swal.fire({
                        title: 'Success!',
                        text: response.data.message,
                        icon: 'success',
                        confirmButtonText: 'OK'
                    });
    
                } catch (error) {
                    // Handle any errors and show an error message
                    Swal.fire({
                        title: 'Error!',
                        text: error.response?.data?.message || 'Something went wrong!',
                        icon: 'error',
                    });
                }
            }
        });
    }
    
    

    // onClick={()=>deleteContact(e.contactId)}

    return (
        <div className='ProfileContact'>
            {
                loading ? (
                    <div className='Loading'>
                  <HashLoader color="#072ACB" size="80px" />
              
                    </div>

                ) : 
                <>
                  <button className='ProfileCatAddBtn' onClick={(() => Nav('/add-emergency-contact'))}>Add contact</button>

<div className='ProfileContactBoxHolder'>
    {
        allContact.map((e) =>
            <div className='ProfileContactBox'>
                <div className='ProfileContactBoxCont'>{ }
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