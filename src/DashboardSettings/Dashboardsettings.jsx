import React, { useState } from 'react'
import "./dashboardSettings.css"
import camera from "../assets/camera.svg";
import userIcon from "../assets/RoundFace.svg";

export const Dashboardsettings = () => {
    const [edit,setEdit] = useState(false)
    const [img, setImg] = useState();

    const showImg = (e) => {
      const file = e.target.files[0];
      const img = URL.createObjectURL(file);
      setImg(img);
    };
  return (
    <div className="SettingssMainCon">
      {/* <div className='settingsinner'></div> */}
      <div className="SettingssImage">


        {img ? <img src={img} alt="" /> : <img src={userIcon} alt="" />}
      </div>
      
      <div className="camera9">
        <input type="file" name="" id="i" hidden onChange={showImg} />

        <label htmlFor="i">
            {edit? <img src={camera} alt="" className="cameraicon" />:null }
          
        </label>
      </div>

      <div className="Box-container">
        {!edit ? (
          <div className="jude">Name</div>
        ) : (
          <input type="text" className="jude2" />
        )}
      </div>
      <div className="Box-container">
        {!edit ? (
          <div className="jude">PhoneNumber</div>
        ) : (
          <input type="text" className="jude2" />
        )}
      </div>
      <div className="Box-container">
        {!edit ? (
          <div className="jude">Address</div>
        ) : (
          <input type="text" className="jude2" />
        )}
      </div>
      <div className="update-info">
        {!edit ? (
          <button onClick={() => setEdit(true)} className="btn-UpInfo">
            {" "}
            Edit
          </button>
        ) : (
          <>
            <div className="update">
              <button className="update-info2">Update information</button>
              <button onClick={() => setEdit(false)} className="update-info3">
                Cancel
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
