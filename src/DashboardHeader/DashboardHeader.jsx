import React, { useState } from 'react';
import "./DashboardHeaderMobile.css";
import "./DashboardHeader.css";
import Logo from "../assets/AlertifyLogo.svg";
import { RiMenu2Line } from "react-icons/ri";
import Face from "../assets/Face.JPEG";
import { IoMdHome } from "react-icons/io";
import { MdOutlineRoundaboutLeft, MdPermContactCalendar, MdDashboard } from "react-icons/md";
import { HiExclamationTriangle } from "react-icons/hi2";
import { RiLogoutCircleLine } from "react-icons/ri";

export const DashboardHeader = () => {
  const [menuChange, setMenuChange] = useState(false);

  const handleMenuChange = () => {
    setMenuChange(!menuChange);
  };

  return (
    <div className='DashBoardHeaderContainer'>
      <div className='DashBoardHeaderInnerContainer'>
        <div className='DashboardHeaderLeftCornerone'>
          <img src={Logo} className='DashBoardHeaderLogo' alt="Logo"/>
        </div>

        <div className='DashboardHeaderLeftCornerTwo'>
          <div className='DashBoardUserProfile'>
            <div className='DashBoardImageProfile'>
            <img src={Face} className='DashBoardActiveReportImahe'/>

            </div>
            <div>
              <h4>Victory Aboy</h4>
              <p style={{ fontSize: "12px" }}>Victory@gmail.com</p>
            </div>
          </div>

          <div className='DashBoardMenuIcon'>
            <RiMenu2Line size={24} onClick={handleMenuChange} />
          </div>
        </div>
      </div>

      {
        <div className={`DashBoardMobileMenu ${menuChange ? 'show' : ''}`} onClick={handleMenuChange}>
          <div className='DashBoardHeaderMenuUpside'>
            <div className='DashBoardHeaderMenuUpsideInner'>
              <div className='DashBoardHeaderMenuUpsideInnerCircle'>
                <img src={Face} className='DashBoardFaceImage' alt="User Face"/>
              </div>
              <div className='DashBoardHeaderMenuUpsideInnerText'>
                <h4>Victory Aboy</h4>
                <p style={{ fontSize: "12px" }}>Victory@gmail.com</p>
              </div>
            </div>
          </div>
          <div className='DashBoardHeaderMenDownside'>
            <div className='DashBoardMenuList'>
              <div className='DashBoardHome'>
                <IoMdHome size={20} color='blue' />
                <p>Home</p>
              </div>
              <div className='DashBoardHome'>
                <MdOutlineRoundaboutLeft size={20} color='blue' />
                <p>About us</p>
              </div>
              <div className='DashBoardHome'>
                <MdPermContactCalendar size={20} color='blue' />
                <p>Contact us</p>
              </div>
              <div className='DashBoardHome'>
                <HiExclamationTriangle size={20} color='blue' />
                <p>Emergency services</p>
              </div>
              <div className='DashBoardHome'>
                <MdDashboard size={20} color='blue' />
                <p>Dashboard</p>
              </div>
            </div>
          </div>
          <div className='DashBoardLogout'>
            <div className='DashBoardLogoutIcon'>
              <RiLogoutCircleLine size={20} color='blue' />
              <p>Logout</p>
            </div>
          </div>
        </div>
      }
    </div>
  );
};
