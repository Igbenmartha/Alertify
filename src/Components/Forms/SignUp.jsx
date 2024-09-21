import React, { useState } from 'react'
import "./signup.css"
import alert from "../../assets/AlertifyLogo.svg"
import { FaEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa";
import { Toaster, toast } from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const SignUp = () => {
  const [continueSignUp, setContinueSignUp] = useState(0)
  const [showEye, setShowEye] = useState(true)
  const [eyeShow, setEyeShow] = useState(true)
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailErrorShow, setEmailErrorShow] = useState(false);
  const [password, setPassword] = useState(false)
  const [address, setAddress] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [gender, setGender] = useState()
  const [loading,setLoading] = useState(false)
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordErrorlow, setPasswordErrorLow] = useState("");
  const [passwordErrorUpper, setPasswordErrorUpper] = useState();
  const [passwordErrorNumber, setPasswordErrorNumber] = useState();
  const [passwordErrorSymbol, setPasswordErrorSymbol] = useState();
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [strengthLabel, setStrengthLabel] = useState('Weak');
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [showStrengthBar, setShowStrengthBar] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState()
  const [fullName, setFullName] = useState('')
  const [emergencyContacts, setEmergencyContacts] = useState([
    {
      name: "",
      phoneNumber: "",
      email: ""

    }
  ])

  // event.preventdefault()

const navigate= useNavigate()

  const handleEmail = (e) => {
    const validateEmail = (input) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(input);
    };
    const newEmail = e.target.value;
    setEmail(newEmail);
    setEmailError(false);
    if (newEmail.trim() === '') {
      toast.error('Email is required');
      setEmailErrorShow(false)
    } else if (!validateEmail(newEmail)) {
      setEmailErrorShow(true)
      setEmailError('Invalid email format');
    } else {
      setEmailError("")
    }
  };

  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (/[a-z]/.test(password)) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/\d/.test(password)) strength += 1;
    if (/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password)) strength += 1;

    return strength;
  };

  const handlePassword = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    const strength = calculatePasswordStrength(newPassword);
    setPasswordStrength(strength);

    if (strength === 1) setStrengthLabel('Weak');
    else if (strength === 2) setStrengthLabel('Fair');
    else if (strength === 3) setStrengthLabel('Good');
    else if (strength === 4) setStrengthLabel('Strong');
    else if (strength === 5) setStrengthLabel('Very Strong');

    setPasswordErrorLow(!/[a-z]/.test(newPassword));
    setPasswordErrorUpper(!/[A-Z]/.test(newPassword));
    setPasswordErrorNumber(!/\d/.test(newPassword));
    setPasswordErrorSymbol(!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(newPassword));

    // Show strength bar only if password is not strong enough
    if (strength < 5) {
      setShowStrengthBar(true);
    } else {
      setShowStrengthBar(false);
    }
  };
  const HandleConfirmPassword = (e) => {
    const confirmData = e.target.value;
    setConfirmPassword(confirmData);
    if (confirmData !== password) {
      setConfirmPasswordError("Passwords do not match!"); // Custom message when passwords don't match
    } else {
      setConfirmPasswordError(""); // Clear message when passwords match
    }
  };

  
  const Continue = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
  
    if (!fullName) {
      toast.error("Full Name is required");
      return;
    }
    
    if (!address) {
      toast.error("Address is required");
      return;
    }
     
    if (!gender) {
      toast.error("Gender is required");
      return;
    }
  
    if (!phoneNumber) {
      toast.error("Phone Number is required");
      return;
    }else if (phoneNumber.length !== 11) {
      toast.error("Phone Number must be exactly 11 digits long");
      return;
    }
    // console.log(phoneNumber.length);
    
  
    if (!email) {
      toast.error("Email is required");
      return;
    } else if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }
  
    if (!password) {
      toast.error("Password is required");
      return;
    } else if (password.length < 8) {
      toast.error("Password must be at least 8 characters long");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Password must include at least one uppercase letter");
      return;
    } else if (!/[a-z]/.test(password)) {
      toast.error("Password must include at least one lowercase letter");
      return;
    } else if (!/[0-9]/.test(password)) {
      toast.error("Password must include at least one number");
      return;
    } else if (!specialCharRegex.test(password)) {
      toast.error("Password must include at least one special character (!@#$%^&*)");
      return;
    }
  
    if (!confirmPassword) {
      toast.error("Confirm Password is required");
      return;
    } else if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
 
  
    // If all validations pass, move to the next step
    setContinueSignUp(1);
  };
  



const handleSubmit = async (e) => {
  e.preventDefault();

  const validEmergencyContacts = emergencyContacts.filter(
    contact => contact.name && contact.phoneNumber && contact.email
  );
  
  setLoading(true);

  try {
    const data = {
      fullName,
      email,
      address,
      gender,
      phoneNumber,
      password,
      confirmPassword,
      emergencyContacts: validEmergencyContacts
    };

    const response = await axios.post("https://alertify-9tr5.onrender.com/api/v1/user/sign-up", data);
    
    Swal.fire({
      title: 'Success!',
      text: response.data.message,
      icon: 'success',
      confirmButtonText: 'OK'
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/login'); 
      }
    });
    // console.log(response.data);

  } catch (error) {
    console.log(error);

    if (error.response) {
      toast.error(error.response.data.message || "An error occurred during signup.");
      console.error(error.response.data);
    } else {
      toast.error(error.message || "An error occurred.");
      // console.error("Error:", error.message);
    }

  } finally {
    setLoading(false);
  }
};


const Navigate = useNavigate()
  return (
    <div className="signupbody">
      <form className="signupbodyInner" >
        <Toaster />
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
                      required={true}
                      onChange={((e)=>setFullName(e.target.value))}
                    />
                  </div>
                  <div className="fullnameInputDiv">
                    <input
                      type="text"
                      placeholder="Address"
                      className="fullnameInput"
                      required={true}

                      onChange={((e)=>setAddress(e.target.value))}

                    />
                  </div>
                  <select name="geneder" className="fullnameInputDiv"
                      required={true}

                  onChange={((e)=>setGender(e.target.value))}>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                  <div className="fullnameInputDiv">
                    <input
                      type="number"
                      placeholder="Phone Number"
                      className="fullnameInput"
                      required={true}

                      onChange={((e) => setPhoneNumber(e.target.value))}

                    />
                  </div>
                  <div className="fullnameInputDiv">
                    <input
                      onChange={handleEmail}
                      type="email"
                      placeholder="Email"
                      className="fullnameInput"
                      required={true}

                    />
                    {emailErrorShow ? (
                      <p style={{ color: "red" }}>{emailError}</p>
                    ) : null}
                  </div>
                  <div className="passwordDiv">
                    <input
                      type={showEye ? "password" : "text"}
                      placeholder="Password"
                      className="passwordInput"
                      required={true}

                      onChange={handlePassword}
                      onFocus={() => setPasswordFocused(true)}
                      onBlur={() => setPasswordFocused(false)}
                    // value={password}
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
                      required={true}

                      onChange={HandleConfirmPassword}


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
                  {passwordFocused && showStrengthBar && (
                    <div className="passwordStrengthBar">
                      <div
                        className="passwordStrengthProgress"
                        style={{
                          width: `${(passwordStrength / 5) * 100}%`,
                          backgroundColor:
                            passwordStrength < 2
                              ? 'red'
                              : passwordStrength < 4
                                ? 'orange'
                                : 'green',
                        }}
                      />
                    </div>
                  )}
                  {passwordFocused && showStrengthBar && (
                    <p className="passwordStrengthLabel">{strengthLabel}</p>
                  )}
                  {confirmPasswordError && <p style={{ color: "red" }}>{confirmPasswordError}</p>}
                </form>

                <div className="haveAccountTextDiv">
                  <button
                    className="firstNextButton"
                    onClick={Continue}
                  >
                    Next
                  </button>
                  <p className="alreadyHaveAnAccountText">
                    Already have an account? <span onClick={(()=>Navigate("/login"))}>Login</span>
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
                      onChange={(e) =>
                        setEmergencyContacts((prevContacts) =>
                          prevContacts.map((contact, index) =>
                            index === 0 ? { ...contact, name: e.target.value } : contact
                          )
                        )
                      }
                      
                      value={emergencyContacts.name}
                    />
                  </div>
                  <div className="emergencyMailDiv">
                    <input
                      type="text"
                      placeholder="Emergency Email"
                      className="emergencyNameInput"
                      onChange={(e) =>
                        setEmergencyContacts((prevContacts) =>
                          prevContacts.map((contact, index) =>
                            index === 0 ? { ...contact, email: e.target.value } : contact
                          )
                        )
                      }
                      
                      value={emergencyContacts.email}
                    />
                  </div>

                  <div className="emergencyMailDiv">
                    <input
                      type="number"
                      placeholder="Emergency Number"
                      className="emergencyNameInput"
                      onChange={(e) =>
                        setEmergencyContacts((prevContacts) =>
                          prevContacts.map((contact, index) =>
                            index === 0 ? { ...contact, phoneNumber: e.target.value } : contact
                          )
                        )
                      }
                      
                      value={emergencyContacts.phoneNumber}
                    />
                  </div>
                  {/* <div>
                    <button className='addBtn'>Add</button>
                  </div> */}
                  <button
                    className="newNextButton"
                   onClick={handleSubmit}
                  >
                    {!loading? "Sign Up": "Loading..."}
                  </button>
                </div>
              </div>
            </>
          ) : null
         
        }
      </form>
    </div>
  );
}

export default SignUp