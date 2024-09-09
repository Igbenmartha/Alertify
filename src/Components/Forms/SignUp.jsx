import React, { useState } from 'react'
import "./signup.css"
import alert from "../../assets/AlertifyLogo.svg"
 import { FaEye } from "react-icons/fa6";
 // import { TiEyeOutline } from "react-icons/ti";
 import { FaRegEyeSlash } from "react-icons/fa";

import SignUpImage from './SignUpImage';

const SignUp = () => {
    const [continueSignUp, setContinueSignUp]=useState(0)
    const [showEye, setShowEye]=useState(true)
    const[eyeShow, setEyeShow]=useState(true)
     const [email, setEmail] = useState("");
     const [emailError, setEmailError] = useState(false);

// event.preventdefault()



    const handleEmail = (e) => {
        // e.preventdefault()
      "";
      const newEmail = e.target.value;
      setEmail(newEmail);
      setEmailError(false);
      if (newEmail === "") {
        setEmailError("Email is required");
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setEmailError("Email is not valid");
      }
    };
  return (
    <div className="signupbody">
      <div className="signupbodyInner">
        {
          continueSignUp === 0 ? (
            <>
              <div className="signupbodyLogo">
                <img src={alert} alt="" />
              </div>
              <div className="signUpDiv">
                <div className="signupDivText">
                  <h2>Sign Up to stay safe</h2>
                  <p>
                    Share your location and details with emergency contact
                    instantly. Your peace of mind, one tap away
                  </p>
                </div>

                <form className="formDiv">
                  <div className="fullnameInputDiv">
                    <input
                      type="text"
                      placeholder="Fullname"
                      className="fullnameInput"
                    />
                  </div>
                  <div className="fullnameInputDiv">
                    <input
                      type="text"
                      placeholder="Address"
                      className="fullnameInput"
                    />
                  </div>
                  <select name="geneder" className="fullnameInputDiv">
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                  <div className="fullnameInputDiv">
                    <input
                      type="number"
                      placeholder="Phone Number"
                      className="fullnameInput"
                    />
                  </div>
                  <div className="fullnameInputDiv">
                    <input
                      onChange={handleEmail}
                      type="email"
                      placeholder="Email"
                      className="fullnameInput"
                    />
                    {emailError ? (
                      <p style={{ color: "red" }}>{emailError}</p>
                    ) : null}
                  </div>
                  <div className="passwordDiv">
                    <input
                      type={showEye ? "password" : "text"}
                      placeholder="Password"
                      className="passwordInput"
                    />
                    {showEye ? (
                      <FaEye size={25} onClick={() => setShowEye(false)} />
                    ) : (
                      <FaRegEyeSlash
                        size={25}
                        onClick={() => setShowEye(true)}
                      />
                    )}
                  </div>
                  <div className="passwordDiv">
                    <input
                      type={showEye ? "password" : "text"}
                      placeholder="ConfirmPassword"
                      className="passwordInput"
                    />
                    {eyeShow ? (
                      <FaEye size={25} onClick={() => setEyeShow(false)} />
                    ) : (
                      <FaRegEyeSlash
                        size={25}
                        onClick={() => setEyeShow(true)}
                      />
                    )}
                  </div>
                </form>

                <div className="haveAccountTextDiv">
                  <button
                    className="firstNextButton"
                    onClick={() => setContinueSignUp(1)}
                  >
                    Next
                  </button>
                  <p className="alreadyHaveAnAccountText">
                    Already have an account? <span>Login</span>
                  </p>
                </div>
              </div>
            </>
          ) : continueSignUp === 1 ? (
            <>
              <div className="signupbodyLogo">
                <img src={alert} alt="" />
              </div>
              <div className="signUpDiv">
                <div className="signupDivText">
                  <h2>Add trusted contacts and mails</h2>
                </div>

                <div className="formDiv2">
                  <div className="emergencyMailDiv">
                    <input
                      type="text"
                      placeholder="Contact Name"
                      className="emergencyNameInput"
                    />
                  </div>
                  <div className="emergencyMailDiv">
                    <input
                      type="text"
                      placeholder="Emergency Email"
                      className="emergencyNameInput"
                    />
                  </div>

                  <div className="emergencyMailDiv">
                    <input
                      type="number"
                      placeholder="Emergency Number"
                      className="emergencyNameInput"
                    />
                  </div>
                  {/* <div>
                    <button className='addBtn'>Add</button>
                  </div> */}
                  <button
                    className="newNextButton"
                    onClick={() => setContinueSignUp(2)}
                  >
                    Next
                  </button>
                </div>
              </div>
            </>
          ) : continueSignUp === 2 ? (
            <SignUpImage alert={alert} />
          ) : null
          // (
          //   2
          // )
        }
      </div>
    </div>
  );
}

export default SignUp