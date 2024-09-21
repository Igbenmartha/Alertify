import React from 'react'
import "./modalStyle.css"
import Swal from 'sweetalert2';
import axios from 'axios';


const Modal = ({setToggle}) => {
   

    
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
           });


         }
 }
  return (
    <div  className='Modal'>
        <div className='Modal-header'> are you sure you want to delete this contact</div>
   <div className='Modal-text'> this will delete this contact permanently,you cannot undo this action</div>
   <div className='modalBtn-holder'>
    <button className='modal-btn' onClick={(()=>setToggle(false))}>Cancel</button>
    <button className='modal-Deletebtn'
    onClick={(e)=>deleteContact(e.contactId)}

     >Delete</button>
   </div>
    </div>
  )
}

export default Modal