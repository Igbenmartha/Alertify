import React, { useState } from 'react';
import "./ProfileStyle.css";
import cam from "../../assets/Cameraa.svg";
import person from "../../assets/person.png";
import Profile from '../../Components/profiler/Profile';

const ProfilePage = () => {
    const [imgP, setImgP] = useState(null);
    const [edit, setEdit] = useState(false);
    const [profileData, setProfileData] = useState({
        name: 'John Doe',
        address: "46, community road",
        gender: "female",
        phoneNumber: "08099475775",
        email: 'john@example.com',
    });

    const [editData, setEditData] = useState({
        name: profileData.name,
        email: profileData.email,
        address: profileData.address,
        gender: profileData.gender,
        phoneNumber: profileData.phoneNumber,
    });

    const posting = (e) => {
        const file = e.target.files[0];
        const img = URL.createObjectURL(file);
        setImgP(img);
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

    // Function to handle updating profile data
    const handleUpdateProfile = () => {
        setProfileData(editData); // Save edited data
        setEdit(false); // Exit edit mode
    };

    return (
        <div className='Profile'>
            <div className='ProfilePageHeader'>
                <div className='ProfileLogo'></div>
            </div>
            <div className='Profile-Main'>
                <div className='Profile-SubHeader'>
                    <button className='ProfileCatBtn'>Personal details</button>
                    <button className='ProfileEmgBtn'></button>
                </div>
               <Profile/>
            </div>
        </div>
    );
};

export default ProfilePage;
