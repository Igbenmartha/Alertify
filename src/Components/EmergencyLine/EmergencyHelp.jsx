import React from 'react'
import "./emergencyhelp.css"
import tongue from "../assets/RedTongue.svg"
import traffic from "../assets/TrafficLight.svg"
import  Frcs from "../assets/FrscGreenHead.svg"
import fire from "../assets/FireBox.svg"
import fineboy from "../assets/Boy.svg"
import boygirl from "../assets/BoyKickGirl.svg"

const EmergencyHelp = () => {
    const data = [
      {
        wd: "30%",
        he: "100%",
        img: fire,
        text1: "Fire help Lines (Lagos State)",
        text2: "01-7944929, 080-332358922, 080-33235890",
      },

      {
        wd: "30%",
        hg: "100",
        fontfamily:"Montserrat",
      
fontsize: "90px",
fontweight: 700,
lineheight: "29.26px",
textalign: "left",

        img: fineboy,
        text1: "Child Abuse Hotline (Lagos",
        text2: "08085753932, 08102678442",
      },
      {
        wd: "30%",
        hg: "100%",
        img: boygirl,
        text1: "Domestic Violence (Lagos)",
        text2: "08057542266, 08102678443",
      },
    ];
  return (
    <div className="emergencyhelpBody">
      <div className="emergencyhelpInner">
        <div className="firstEmergencyhelpText">
          <h1>Lagos Emergency HelpLine</h1>
        </div>
        <div className="secondEmergencyhelpText">
          <div className="lagosEmeregncyServiceBox">
            <div className="serviceBoxImageDiv">
              <img src={tongue} alt="" />
            </div>
            <div className="lagosEmergencyServiceText">
              <h1>Lagos Emergency Service</h1>
              <p>
                767 OR 112 (This cover police, Ambulance service and Traffic
                Service)
              </p>
            </div>
          </div>
          <div className="lagosStateTrafficBox">
            <div className="lagosStateTrafficBoxImageDiv">
              <img src={traffic} alt="" />
            </div>
            <div className="lagosTrafficTextBox">
              <h1>Lagos State Traffic Management Authority (LASTMAN)</h1>
              <p> 07075005411, 0802311742, 08023909364, ( Emergency Numbers)</p>
              <p> 08029228271(GM); 08023386921(provost)</p>
            </div>
          </div>
          <div className="FrcsDivBox">
            <div className="FrcsImageDiv">
              <img src={Frcs} alt="" className="FrcsImage" />
            </div>
            <div className="FrcsTextBox">
              <h1>FRSC Zonal Office (Lagos State)</h1>
              <p>08033706639, 01-7742771</p>
            </div>
          </div>
        </div>
        <div className="thirdEmergencyhelpText">
          {data.map((e) => (
            <div className="FireHelpLine" style={{ height: e.hg, width: e.wd,fontFamily:e.fontfamily, fontSize: e.fontSize,  }}>
              <div className="FireHelpLineImageBox">
                <img src={e.img} alt="" className="FireHelpLineImage" />
              </div>

              <div className="FireHelpLineText">
                <h1>{e.text1}</h1>
                <p>{e.text2}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EmergencyHelp