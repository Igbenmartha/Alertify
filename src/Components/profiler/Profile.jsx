import React, { useEffect, useState } from 'react'
import "./profilerStyle.css"
import cam from "../../assets/Cameraa.svg";
import person from "../../assets/person.png";
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

const Profile = () => {
    const [imgP, setImgP] = useState(null);
    const [edit, setEdit] = useState(false);
    const [user,setUser] = useState({})
    const [fullName,setFullName] = useState('')
    const [profilePic, setProfilePic] = useState(null);
    const [address,setAddress] = useState('')
    const [phoneNumber,setPhoneNumber] = useState('')
   


    const userId = useSelector((state) => state.user.id)

    const posting = (e) => {
        const file = e.target.files[0];
        const img = URL.createObjectURL(file);
        setImgP(img);
        setProfilePic(file)
        console.log(img);
    };


    // Update editData as user types
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditData({
            ...editData,
            [name]: value, // Dynamically update the corresponding field
        });
    };
    const startEditMode = () => {
        setFullName(user.fullName || '');
        setPhoneNumber(user.phoneNumber || '');
        setAddress(user.address || '');
    
        if (user.profilePic) {
            setProfilePic(user.profilePic);
        } else {
            setProfilePic(person);
        }
    
        setEdit(true);
    };


    // Function to handle updating profile data
    const handleUpdateProfile = () => {
        setProfileData(editData); // Save edited data
        setEdit(false); // Exit edit mode
    };
  const token = useSelector((state) => state.user.token)

    const userDetail = () => {

        fetch(`https://alertify-9tr5.onrender.com/api/v1/user/one`, {  
          method: "GET",  
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`, 
          },
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            
          setUser(data.data);  
        })
        .catch(error => {
          console.error('Error:', error);  
        });
      };
      useEffect(()=>{
        userDetail()
      },[])


    //   const updateProfile = ()=>{
    //     const formData = new FormData();
    //     formData.append('fullName', fullName);
    //     formData.append('phoneNumber', phoneNumber);
    //     formData.append('address', address);
    //     if (profilePic) {
    //         formData.append('profilePic', profilePic);
    //     }
        
    //     fetch(`https://alertify-9tr5.onrender.com/api/v1/user/update`, {  
    //         method: "PUT",  
    //         headers: {
    //           "Content-Type": "application/json",
    //           "Authorization": `Bearer ${token}`, 
    //         },
    //         body:formData
    //       })
    //       .then(response => response.json())
    //       .then(data => {
    //           console.log(data);
              
    //         setUser(data.data);  
    //       })
    //       .catch(error => {
    //         console.error('Error:', error);  
    //       });
    //   }

  return (
    <div className='Profile-MainBody'>
    <div className='profileImg'>
        
        {imgP? <img src={imgP} alt="" /> : <img src={person} alt="" />}
        <label htmlFor="i">
            {
                edit? 
                  <div className='pro-cam'>

                <img src={cam} alt="" />
            </div>: null
            }
          
        </label>
        <input type="file" id="i" hidden onChange={posting} />
    </div>
    <div className='pro-inputbody'>
        <div className='InputHolder'>
            <p>Full Name:</p>
            {edit ? (
                <input
                    type="text"
                    className='Profile-input'
                    name="name" // Add a name to match with state key
                    value={fullName}
                    onChange={((e)=>setFullName(e.target.value))} // Add onChange handler
                />
            ) : (
                <div className='ProfileText'>{user.fullName}</div>
            )}
        </div>
                <div className='InputHolder'>
                    <p>Phone Number:</p>
                    {edit ? (
                        <input
                            type="text"
                            className='Profile-input'
                            name="phoneNumber"
                            value={phoneNumber}
                            onChange={((e)=>setPhoneNumber(e.target.value))}
                        />
                    ) : (
                        <div className='ProfileText'>{user.phoneNumber}</div>
                    )}
                </div>
                <div className='InputHolder'>
                    <p>Address:</p>
                    {edit ? (
                        <input
                            type="text"
                            className='Profile-input'
                            name="phoneNumber"
                            value={address}
                            onChange={((e)=>setAddress(e.target.value))}
                        />
                    ) : (
                        <div className='ProfileText'>{user.address}</div>
                    )}
                </div>

             

                {edit ? (
                    <div className='Div-btn'>

                        <button className='ProfileUpdbtn' onClick={(()=>setEdit(false))}>Cancel</button>
                        <button className='ProfileUpdbtn'onClick={updateProfile}>Update Profile</button>
                    </div>
                ) : (
                    <button className='ProfileEditbtn' onClick={startEditMode}>Edit Profile</button>
                )}
            </div>
        </div>
    )
}

export default Profile