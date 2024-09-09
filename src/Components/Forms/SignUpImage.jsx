import React, { useState } from 'react'
import "./signup.css"
import "./signupimage.css"


import camera from "../../assets/camera.svg"
import round from "../../assets/RoundFace.svg"

const SignUpImage = ({ alert }) => {
    const [img, setImg] = useState()

    const showImg = (e)=>{
        const file = e.target.files[0];
        const img = URL.createObjectURL(file);
        setImg(img)
    }
  return (
    <>
      <div className="signupbodyLogo">git pull origin main

        <img src={alert} alt="" />
      </div>
      <div className='imageBox'>
        <div className='signupimageDiv'>
            {/* <div className='imgHolder'>
                hello
            </div> */}
            {
                img ? 
                <img src={img} alt="" />:
            <img src={round} alt="" />
            }

        </div>
  <div className='cameraIcon'>
    <input type="file" name="" id="i" hidden onChange={showImg}/>
    <label htmlFor="i">
        <img src={camera} alt="" className='cameraicon' />
    </label>
  </div>
      </div>
      <div className='signupBtnDiv'>
<button className='signupBtn'>Sign Up</button>
      </div>
      

    </>
  );
};

export default SignUpImage