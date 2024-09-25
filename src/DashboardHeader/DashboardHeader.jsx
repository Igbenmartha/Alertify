import React, { useState } from 'react';
import "./DashboardHeaderMobile.css";
import "./DashboardHeader.css";
import Logo from "../assets/AlertifyLogo.svg";
import { RiMenu2Line } from "react-icons/ri";
import { IoMdHome } from "react-icons/io";
import { MdOutlineRoundaboutLeft, MdPermContactCalendar, MdDashboard } from "react-icons/md";
import { HiExclamationTriangle } from "react-icons/hi2";
import { RiLogoutCircleLine } from "react-icons/ri";
import Alert from "../assets/AlertifyLogo.svg"
import { useSelector } from 'react-redux';
import roundface from "../assets/RoundFace.svg";
import { userId, userinfo, userToken } from '../Global/Slice';

export const DashboardHeader = () => {
  const [menuChange, setMenuChange] = useState(false);
  // const [get, setGetone]=useState([])
  // const[one, setOne]=useState([])
  const userInfo=useSelector((state)=>state.user.userdata)
  // console.log(userInfo)

  const handleMenuChange = () => {
    setMenuChange(!menuChange);
  };


  // const getone=()=>{
  //   const url = "https://alertify-9tr5.onrender.com/api/v1/user/one";
  //   axios.get(url,{
  //     headers:{
  //       application:"application/json",
  //       Authorization:`Bearer ${token}`
  //     }
  //   })
  //   .then((res)=>{
  //     console.log(data)
  //     setOne(res?.datadata)
  //   })
  //   .catch((err)=>{
  //     console.log(err)
  //   })

  // }

  //   useEffect(() => {
  //     getone();
  //   }, []);


  return (
    <div className="DashBoardHeaderContainer">
      <div className="DashBoardHeaderInnerContainer">
        <div className="DashboardHeaderLeftCornerone">
          <img src={Alert} className="DashBoardHeaderLogo" alt="Logo" />
        </div>

        <div className="DashboardHeaderLeftCornerTwo">
          <div className="DashBoardUserProfile">
            <div className="DashBoardImageProfile">
              {/* <img src={user? e.profilePic : roundface} */}
              <img
                src={userInfo ? userInfo.profilePic : roundface}
                className="DashBoardActiveReportImahe"
              />
            </div>
            <div>
              <h4>{userInfo.fullName}</h4>
              <p style={{ fontSize: "12px" }}>{userInfo.email}</p>
            </div>
          </div>

          <div className="DashBoardMenuIcon">
            <RiMenu2Line size={24} onClick={handleMenuChange} />
          </div>
        </div>
      </div>

      {
        <div
          className={`DashBoardMobileMenu ${menuChange ? "show" : ""}`}
          onClick={handleMenuChange}
        >
          <div className="DashBoardHeaderMenuUpside">
            <div className="DashBoardHeaderMenuUpsideInner">
              <div className="DashBoardHeaderMenuUpsideInnerCircle">
                <img
                  src={userInfo ? userInfo.profilePic : roundface}
                  className="DashBoardFaceImage"
                  alt="User Face"
                />
              </div>
              <div className="DashBoardHeaderMenuUpsideInnerText">
                <h4>{userInfo.fullName}</h4>
                <p style={{ fontSize: "12px" }}>{userInfo.email}</p>
              </div>
            </div>
          </div>
          <div className="DashBoardHeaderMenDownside">
            <div className="DashBoardMenuList">
              <div className="DashBoardHome">
                <IoMdHome size={20} color="blue" />
                <p>Home</p>
              </div>
              <div className="DashBoardHome">
                <MdOutlineRoundaboutLeft size={20} color="blue" />
                <p>About us</p>
              </div>
              <div className="DashBoardHome">
                <MdPermContactCalendar size={20} color="blue" />
                <p>Contact us</p>
              </div>
              <div className="DashBoardHome">
                <HiExclamationTriangle size={20} color="blue" />
                <p>Emergency services</p>
              </div>
              <div className="DashBoardHome">
                <MdDashboard size={20} color="blue" />
                <p>Dashboard</p>
              </div>
            </div>
          </div>
          <div className="DashBoardLogout">
            <div className="DashBoardLogoutIcon">
              <RiLogoutCircleLine size={20} color="blue" />
              <p>Logout</p>
            </div>
          </div>
        </div>
      }
    </div>
  );
};
