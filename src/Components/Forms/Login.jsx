import React, { useState } from 'react'
import "./login.css"
import alert from "../../assets/AlertifyLogo.svg";
 import { FaEye } from "react-icons/fa6";
 // import { TiEyeOutline } from "react-icons/ti";
  import { FaRegEyeSlash } from "react-icons/fa";

const Login = () => {
      const [showEye, setShowEye] = useState(true);

  return (
    <div className="loginbody">
      <div className="loginInner">
        <div className="logoBody">
          <img src={alert} alt="" />
        </div>
        <div className="loginDiv">
          <div className="loginDivText">
            <h2>Your Safety is our Priority</h2>
            <p>
              Login to quickly send your location and details to your emergency
              contacts
            </p>
          </div>
          <form className="loginFormDiv">
            <div className="LoginEmailDiv">
              <input
                type="email"
                placeholder="Email"
                className="LoginEmailInput"
              />
            </div>
            <div className="loginPasswordDiv">
              <input
                type={showEye ? "text" : "password"}
                placeholder="Password"
                className="loginPasswordInput"
              />
              {showEye ? (
                <FaEye size={25} onClick={() => setShowEye(false)} />
              ) : (
                <FaRegEyeSlash size={25} onClick={() => setShowEye(true)} />
              )}
            </div>
            <div className="lastLoginDiv">
              <div className="loginForgetPasswordDiv">
                <p>Forget Password</p>
              </div>
              <div className="loginBtnandTextDiv">
                {/* <div> */}
                  <button className="loginBtn">Login</button>
                  <p className='loginlastText'>Don't have an account? <span>Sign Up</span></p>
                {/* </div> */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login