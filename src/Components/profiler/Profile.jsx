import React, { useState } from 'react'
import "./profilerStyle.css"
import cam from "../../assets/Cameraa.svg";
import person from "../../assets/person.png";

const Profile = () => {
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
    <div className='Profile-MainBody'>
    <div className='profileImg'>
        {imgP ? <img src={imgP} alt="" /> : <img src={person} alt="" />}
        <label htmlFor="i">
            <div className='pro-cam'>
                <img src={cam} alt="" />
            </div>
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
                    value={editData.name}
                    onChange={handleInputChange} // Add onChange handler
                />
            ) : (
                <div className='ProfileText'>{profileData.name}</div>
            )}
        </div>

        <div className='InputHolder'>
            <p>Address:</p>
            {edit ? (
                <input
                    type="text"
                    className='Profile-input'
                    name="address"
                    value={editData.address}
                    onChange={handleInputChange}
                />
            ) : (
                <div className='ProfileText'>{profileData.address}</div>
            )}
        </div>

        <div className='InputHolder'>
            <p>Gender:</p>
            {edit ? (
                <input
                    type="text"
                    className='Profile-input'
                    name="gender"
                    value={editData.gender}
                    onChange={handleInputChange}
                />
            ) : (
                <div className='ProfileText'>{profileData.gender}</div>
            )}
        </div>

        <div className='InputHolder'>
            <p>Phone Number:</p>
            {edit ? (
                <input
                    type="text"
                    className='Profile-input'
                    name="phoneNumber"
                    value={editData.phoneNumber}
                    onChange={handleInputChange}
                />
            ) : (
                <div className='ProfileText'>{profileData.phoneNumber}</div>
            )}
        </div>

        <div className='InputHolder'>
            <p>Email:</p>
            {edit ? (
                <input
                    type="text"
                    className='Profile-input'
                    name="email"
                    value={editData.email}
                    onChange={handleInputChange}
                />
            ) : (
                <div className='ProfileText'>{profileData.email}</div>
            )}
        </div>

        {edit ? (
            <button className='ProfileUpdbtn' onClick={handleUpdateProfile}>Update Profile</button>
        ) : (
            <button className='ProfileEditbtn' onClick={() => setEdit(true)}>Edit Profile</button>
        )}
    </div>
</div>
  )
}

export default Profile