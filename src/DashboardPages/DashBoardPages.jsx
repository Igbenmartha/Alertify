import React, { useState } from 'react';
import "./DashboardPages.css";
import "./DasboardPagesMobile.css"
import { IoMdHome } from "react-icons/io";
import { HiUsers } from "react-icons/hi2";
import { IoWarningSharp } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { RiLogoutCircleLine } from "react-icons/ri";
import { Dashboardhome } from '../DashboardHome/Dashboardhome';
import { DashboardUser } from '../DashboardUser/DashboardUser';
import { DashboardNotifyUser } from '../DashboardNotifyUser/DashboardNotifyUser';
import { Dashboardsettings } from '../DashboardSettings/Dashboardsettings';
import { MdDashboard } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { PiWarningDiamondFill } from "react-icons/pi";
import { FaUserAlt } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { cleartoken } from '../Global/Slice';



export const DashBoardPages = () => {
  const [activeItem, setActiveItem] = useState('home');
   const dispatch = useDispatch()
  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const getActiveComponent = () => {
    switch (activeItem) {
      case 'home':
        return <Dashboardhome />;
      case 'user-management':
        return <DashboardUser />;
      case 'notify-users':
        return <DashboardNotifyUser />;
      case 'settings':
        return <Dashboardsettings />;
    }
  };


  return (
    <div className="dashboardPagescontainer">
      <div className='DashboardPagesContainerinner'>

      <div className="DashBoradsidebar">
        <div
          className={`sidebaritem ${activeItem === 'home' ? 'active' : ''}`}
          onClick={() => handleItemClick('home')}
        >
          <IoMdHome size={20} color={activeItem === 'home' ? "white" : "#072ACB"} />
          <p>Home</p>
        </div>

        <div
          className={`sidebaritem ${activeItem === 'user-management' ? 'active' : ''}`}
          onClick={() => handleItemClick('user-management')}
        >
          <HiUsers size={20} color={activeItem === 'user-management' ? "white" : "#072ACB"} />
          <p>User Management</p>
        </div>

        <div
          className={`sidebaritem ${activeItem === 'notify-users' ? 'active' : ''}`}
          onClick={() => handleItemClick('notify-users')}
        >
          <IoWarningSharp size={20} color={activeItem === 'notify-users' ? "white" : "#072ACB"} />
          <p>Notify Users</p>
        </div>

        <div
          className={`sidebaritem ${activeItem === 'settings' ? 'active' : ''}`}
          onClick={() => handleItemClick('settings')}
        >
          <IoMdSettings size={20} color={activeItem === 'settings' ? "white" : "#072ACB"} />
          <p>Setting</p>
        </div>
      </div>

      <div className='DashBoardLogou'>
            <div className='DashBoardLogoutIcon'>
              <RiLogoutCircleLine size={20} color='blue' />
              <p onClick={()=> dispatch(cleartoken())}>Logout</p>
            </div>
          </div>

      </div>

      <div className="mainContent">
        {getActiveComponent()}
      </div>

      <div className='DashBoardHomeFooter'>
        <div className='DashBoardHomeFooterinner'>

        <MdDashboard size={23} color='white' className={`james ${activeItem === 'home' ? 'active' : ""}`}  onClick={() => handleItemClick('home')}/>
        <FaUserFriends  size={23} color='white' className={`james ${activeItem === 'user-management' ? 'active' : ""}`} onClick={() => handleItemClick('user-management')}/>
        <PiWarningDiamondFill  size={23} color='white'className={`james ${activeItem === 'notify-users' ? 'active' : ""}`} onClick={() => handleItemClick('notify-users')}/>
        <FaUserAlt  size={23} color='white'className={`james ${activeItem === 'settings' ? 'active' : ""}`} onClick={() => handleItemClick('settings')}/>

        </div>
      </div>
    </div>
  );
};