import React, { useEffect, useState } from 'react';
import "./profilerStyle.css";
import cam from "../../assets/Cameraa.svg";
import person from "../../assets/person.png";
import { useSelector } from 'react-redux';
import axios from 'axios';
import "../contactProfile/style.css"
import logo from "../../assets/logo.svg"
import { HashLoader } from 'react-spinners';

const Profile = () => {
    const [imgP, setImgP] = useState(null);
    const [edit, setEdit] = useState(false);
    const [user, setUser] = useState({});
    const [fullName, setFullName] = useState('');
    const [profilePic, setProfilePic] = useState(null); 
    const [imageFile, setImageFile] = useState(null); 
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [loading,setLoading] = useState(false)


    const token = useSelector((state) => state.user.token);

    const posting = (e) => {
        const file = e.target.files[0];

        if (file) {
            const img = URL.createObjectURL(file);
            setProfilePic(img); 
            setImageFile(file); 
            console.log("Selected Image File:", file); 
        } else {
            console.log("No file selected");
        }
    };

    const userDetail = () => {
        setLoading(true)

        fetch(`https://alertify-9tr5.onrender.com/api/v1/user/one`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
        })
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                setUser(data.data);
                setFullName(data.data.fullName);
                setAddress(data.data.address);
                setPhoneNumber(data.data.phoneNumber);
            setLoading(false);

            })
            
            .catch(error => {
            setLoading(false);
                
            });
    };

    useEffect(() => {
        userDetail();
    }, []);

    const updateProfile = async () => {
        const url = `https://alertify-9tr5.onrender.com/api/v1/user/update`;

        const formData = new FormData();
        formData.append('fullName', fullName);
        formData.append('address', address);
        formData.append('phoneNumber', phoneNumber);
        if (imageFile) {
            formData.append('profilePic', imageFile);
        }

        try {
            const response = await axios.put(url, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}`,
                },
            });
            // console.log(response.data);
            setEdit(false);
            userDetail();
        } catch (error) {
            // console.error('Error updating profile:', error);
        }
    };

    return (
        <div className='Profile-MainBody'>


            {
                loading ? (
                    <div className='Loading'>
                  <HashLoader color="#072ACB" size="80px" />

                    </div>
                ):
                <>
                  <div className='profileImg'>
                {profilePic ? (
                    <img src={profilePic} alt="Profile" />
                ) : (
                    <img src={user.profilePic ? user.profilePic : person} alt="Default Profile" />
                )}                <label htmlFor="imageInput">
                    {edit ? (
                        <div className='pro-cam'>
                            <img src={cam} alt="Camera" />
                        </div>
                    ) : null}
                </label>
                <input type="file" id="imageInput" hidden onChange={posting} />
            </div>
            <div className='pro-inputbody'>
                <div className='InputHolder'>
                    <p>Full Name:</p>
                    {edit ? (
                        <input
                            type="text"
                            className='Profile-input'
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
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
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
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
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    ) : (
                        <div className='ProfileText'>{user.address}</div>
                    )}
                </div>

                {edit ? (
                    <div className='Div-btn'>
                        <button className='ProfileUpdbtn' onClick={() => setEdit(false)}>Cancel</button>
                        <button className='ProfileUpdbtn' onClick={updateProfile}>Update</button>
                    </div>
                ) : (       <button className='ProfileEditbtn' onClick={() => setEdit(true)}>Edit Profile</button>
            )}
        </div>
                </>
            }
          
                
             
        </div>
    );
};

export default Profile;
