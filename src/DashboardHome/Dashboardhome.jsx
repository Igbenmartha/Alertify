import React from 'react'
import "./DashboardHome.css"
import "./DashboardHomeMobile.css"
// import Face from "../assets/Face.JPEG";
// import Face from "../assets/Face.JPEG";

export const Dashboardhome = () => {
  const data = [
    1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,161,171,181,191,20
  ]

  const Alertify = [
    1,2,3,4,5,6,7,8,9,10,11,12,13
  ]


  return (
    <div className='DashBoardHomeContainer'>

       <div className='DashboardHomeContainerInner'>

       <div className='DashboardHomeContaineroverflow'>

          <div className='DashboardHomeActiveReport'>
            <h1 className='DashBoardHomeh1'>Active Report OverView</h1>
              
                <div className='DashboardActiveReportInner'>
              {data.map(() =>(

                <div className='DashboardActiveReportCard'>
                  <div className='DashBaordActiveReportProfile'>
                    <img src={""} className='DashBoardActiveReportImahe'/>
                  </div>

                  <div className='DashBoardAvtiveReportText'>
                    <h3  style={{fontSize: "14px"}}>Ike Chiamaka</h3>
                    <p>ikeChiamaka@gmail.com</p>
                  </div>

                  <div className='DashBoardAvtiveReportText2'>
                    <p>Report Location: 23, sanusi Street Ajegunle lagos state</p>
                    <p>Received by: contact 1, contact 2, contact 3, mail 2: 23, sanusi Street Ajegunle lagos state</p>
                  </div>

                </div>
              ))}
                </div>
          </div>


          <div className='DashboardHomeActiveReport'>
            <h1 className='DashBoardHomeh1'>Previous Report OverView</h1>
            <div className='DashboardActiveReportInner'>
              {data.map(() =>(

                <div className='DashboardActiveReportCard'>
                  <div className='DashBaordActiveReportProfile'>
                    <img src={Face} className='DashBoardActiveReportImahe'/>
                  </div>

                  <div className='DashBoardAvtiveReportText'>
                    <h3  style={{fontSize: "14px"}}>Ike Chiamaka</h3>
                    <p>ikeChiamaka@gmail.com</p>
                  </div>

                  <div className='DashBoardAvtiveReportText2'>
                    <p>Report Location: 23, sanusi Street Ajegunle lagos state</p>
                    <p>Received by: contact 1, contact 2, contact 3, mail 2: 23, sanusi Street Ajegunle lagos state</p>
                  </div>

                </div>
              ))}
                </div>

          </div> 
            
          <div className='DashBoardHomeAlertifyContainer'>
            <h1  className='DashBoardHomeh1'>Alertify User</h1>
            <div className='DashBoardHomeAlertifyUser'>
              {
                Alertify.map(() => (
                  <div className='DashBoardalertifyProfileContainer'>
                <div className='DashBoardHomeProfilePicture'>
                  <img src={Face} alt="" />
                </div>
                <h5>Aka Victory</h5>
               </div>
                ))
              }
            </div>
          </div>
        
       </div>
       </div>

    </div>
  )
}
