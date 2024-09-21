import React, { useEffect, useState } from 'react'
import "./DashboardUserManagement.css"
import "./DashboardUserManagementMobile.css"
import { FaUserAlt, } from 'react-icons/fa'; 
import { RiFolderUserFill } from "react-icons/ri";
import { useSelector } from 'react-redux';
import axios from 'axios';
import roundface from "../assets/RoundFace.svg"
// import Face from "../assets/Face.JPEG";

export const DashboardUser = () => {

  const [user, setUser]=useState([])
  console.log(user)
const token = useSelector((state)=>state.user.token)
console.log(token)
  // const getAllUser= (e)=>{
  //   e.preventDefault();
    
  //       fetch(`https://alertify-9tr5.onrender.com/api/v1/user/all`, {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${token}`,
  //         },
  //       })
  //         .then((response) => response.json())
  //         .then((data) => {
  //         console.log(data);
  //         })
  //         .catch((error) => {
  //           console.error("Error:", error);
  //         });

  // }

  const getAllUser=()=>{

    const url = "https://alertify-9tr5.onrender.com/api/v1/user/all";
    axios.get(url,{
      headers:{
        application:"application/json",
        Authorization:`Bearer ${token}`
      }
    })
    .then((res)=>{
      console.log(res?.data?.data)
      setUser(res?.data?.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  useEffect(()=>{
    getAllUser()
  },[])
  // {roundface}
console.log("gatall ",getAllUser)
  return (
    <div className='DashBoardUserMangemnetContainer'>
    <div className='DashboardUserManagementContainerInner'>
     <div className='DashBoardUsermangementContainerOverflow'>


    {
      user.map((e) => (
        <div className="userCardContainer">
      <div className="userImageContainer">
        <img src={user? e.profilePic : roundface}
          // src="https://via.placeholder.com/150"
          // alt="Ike Chiamaka"
          className="userImage"
        />
      </div>
      <h2 className="userName">{e.fullName}</h2>
      <p className="userEmail">{e.email}</p>
      <div className="buttonContainer">
        <div className="accountDetailsButton">
          <RiFolderUserFill  size={20} className="buttonIcon" /> <button className='DashBaordUserManagementBuuton'> Account details</button>
        </div>
        <div className="deactivateAccountButton">
          <FaUserAlt size={20} className="buttonIcon" /> <button className='DashBaordUserManagementBuuton'>Deactivate account</button>
        </div>
      </div>
    </div>
      ))
    }
     </div>
    </div>
    </div>
  )
}
