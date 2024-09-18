import React from 'react'
import "./DashboardNotifyUser.css"
import "./DashboardNotifyUserMobile.css"



export const DashboardNotifyUser = () => {
  return (
    <div className='DashBoardNotifyMobileContainer'>
      <div className='DashBoardNotifyMobileContainerInner'>
        <input type='text' placeholder='Email' className='DashBoardNotifyUserInput'/>
        <input type='text' placeholder='Subject' className='DashBoardNotifyUserInput'/>
        <textarea type='text' placeholder='Message' className='DashBoardNotifyUserInputtextArea'/>
        <button className='DashBoardNotifyuserButton'>Send</button>
      </div>
    </div>
  )
}
