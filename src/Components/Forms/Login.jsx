import React, { useState } from 'react'
import "./login.css"
import alert from "../../assets/AlertifyLogo.svg";
 import { FaEye } from "react-icons/fa6";
 // import { TiEyeOutline } from "react-icons/ti";
  import { FaRegEyeSlash } from "react-icons/fa";
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { userId, userinfo, userToken } from '../../Global/Slice';
import { useDispatch } from 'react-redux';


const Login = () => {
      const [showEye, setShowEye] = useState(true);
      const[email,setEmail] = useState('');
      const [password,setPassword] = useState('')
      const [loading,setLoading] = useState(false)

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const navigate = useNavigate()
      const dispatch = useDispatch()

      const handleLoginSubmit = async (e) => {
        e.preventDefault()

  const url = "https://alertify-9tr5.onrender.com/api/v1/user"
       
  const login = {email,password}

        e.preventDefault()
        setLoading(true)
        try {
          const response = await axios.post(
            `${url}/log-in`,login,
         
    
          )
          console.log(response.data.data.isAdmin);
   dispatch(userId (response.data.data._id))
  //  localStorage.setItem('userId', JSON.stringify(response.data.data._id))

          toast.success(response.data.message)
          // dispatch(userinfo(response.data))
          dispatch(userToken(response.data.token))
          const isAdmin = response.data.data.isAdmin

          setTimeout(() => {

            if(isAdmin) {
              (navigate('/dashboard'))
            }else {
              navigate('/');
            }
           
            setLoading(false); 
          }, 2000);
        } catch (error) {
          // console.log(error);
          toast.error(error.response.data.message);
        setLoading(false)
          
        }

      }

  return (
    <div className="loginbody">
      <div className="loginInner">
        <Toaster/>
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
          <form className="loginFormDiv" onSubmit={handleLoginSubmit}>
            <div className="LoginEmailDiv">
              <input
                type="email"
                placeholder="Email"
                className="LoginEmailInput"
                onChange={((e)=>setEmail(e.target.value))}
                required={true}
              />
            </div>
            <div className="loginPasswordDiv">
              <input
                type={!showEye ? "text" : "password"}
                placeholder="Password"
                className="loginPasswordInput"
                onChange={((e)=>setPassword(e.target.value))}
                required={true}

              />
              {!showEye ? (
                <FaEye size={25} onClick={() => setShowEye(true)} />
              ) : (
                <FaRegEyeSlash size={25} onClick={() => setShowEye(false)} />
              )}
            </div>
            <div className="lastLoginDiv">
              <div className="loginForgetPasswordDiv">
                <p>Forget Password</p>
              </div>
              <div className="loginBtnandTextDiv">
                {/* <div> */}
                  <button className="loginBtn" type='submit'>{!loading? "Login " :"loading..."}</button>

                  <p className='loginlastText'>Don't have an account? <span onClick={(()=> navigate("/signup"))}>Sign Up</span></p>
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