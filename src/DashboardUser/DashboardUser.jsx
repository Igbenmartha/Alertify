import React from 'react'
import "./DashboardUserManagement.css"
import "./DashboardUserManagementMobile.css"
import { FaUserAlt, } from 'react-icons/fa'; 
import { RiFolderUserFill } from "react-icons/ri";
import Face from "../assets/Face.JPEG";

export const DashboardUser = () => {

  const user = [
    1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19
  ]

  return (
    <div className='DashBoardUserMangemnetContainer'>
    <div className='DashboardUserManagementContainerInner'>
     <div className='DashBoardUsermangementContainerOverflow'>


    {
      user.map(() => (
        <div className="userCardContainer">
      <div className="userImageContainer">
        <img src={Face}
          // src="https://via.placeholder.com/150"
          alt="Ike Chiamaka"
          className="userImage"
        />
      </div>
      <h2 className="userName">Ike Chiamaka</h2>
      <p className="userEmail">ikechiamaka123@gmail.com</p>
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
