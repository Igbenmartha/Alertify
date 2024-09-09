import React from 'react'
import './SuccessForm.css'
import check from '../assets/checkbox.svg'

const SuccessForm = () => {
  return (
    <div className="SuccesFormMain">
      <div className="successform">
        <div className='checkimageDiv'>
          <img src={check} alt="" />
        </div>
        <div className='sucesstext'>
         <div className='text1'>

         <p>Your report is submitted successfully
         </p>
         <p>
            To enjoy real-time notification of incident with preference to your location
         </p>
         </div>
         <button className='sucessbutton'>Sign Up Now</button>

        </div>
      </div>
    </div>
  );
}

export default SuccessForm