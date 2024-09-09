import React from 'react'
import "./emergencycallline.css"
import police from "../assets/PoliceImage.svg"
import helipcopter from "../assets/HelicopterImage.svg"
import boykick from "../assets/BoyKickGirl.svg"
import ArmyMan from "../assets/SoldierMan.svg"
import rope from "../assets/HangRope.svg"
import FederalRoadSafetyLogo from "../assets/FrscGreenHead.svg"
import domesticBoy from "../assets/DomesticBoy.svg"
import shortNikaGirl from "../assets/ShortNika.svg"

const EmergencyCallLine = () => {
  return (
    <div className="emergencyCallIneBody">
      <div className="emergencyCallIneBodyInner">
        <div className="PlsCallOnlyDiv">
          <h1>
            Please call this lines <span>ONLY</span> when you need help
          </h1>
        </div>
        <div className="emergencyCallLineFirstImages">
          <div className="emergencyCallLineImage1Div">
            <div className="emergencycallLinePoliceImageDiv">
              <div className="policeImage">
                <img src={police} alt="" />
              </div>
              <div className="policeImageText">
                <h1>Police emergency Phone Numbers</h1>
                <p>01-4931260, 01-4978899</p>
              </div>
            </div>
            <div className="emergencyRapidSquad">
              <div className="helipCopterImage">
                <img src={helipcopter} alt="" />
              </div>
              <div className="HelipcopterText">
                <h1>Rapid response squad</h1>
                <p>070-55350249, 070-35068242, 080-79279349</p>
              </div>
            </div>
          </div>

          <div className="emergencyCallLineImage2Div">
            <div className="boyGirlImageDiv">
              <div className="BoyGirlImage">
                <img src={boykick} alt="" />
              </div>
              <div className="BoyKickImageText">
                <h1>Rape Helpline</h1>
                <p>080072732255</p>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="emergencycallLineArmyRightsBox">
          <div className="emencygencyCallLineArmyBox1">
            <div className="emergencyArmyBox1Div">
              <div className="emergencyArmyBox1ImageDiv">
                <img src={ArmyMan} alt="" />
              </div>
              <div className="emergencyArmyBox1TextDiv">
                <h1>Nigerian army human right</h1>
                <p>
                  If you’re harassed by an army officials, call 08160134303 or
                  08161507644
                </p>
              </div>
            </div>
            <div className="EmergencyDepressionBoxDiv">
              <div className="emergencyDepressionImageDiv">
                <img src={rope} alt="" />
              </div>
              <div className="emergencydepressionTextDiv">
                <h1>Depression / suicide prevention initiatives</h1>
                <p>08062106393, 08092106493,</p>
                <p>09080217555, 09034400009,</p>
                <p>08111909909, 0801311143</p>
              </div>
            </div>
          </div>

          <div className=" emencygencyCallLineArmyBox2">
            <div className="emengencyFederalRoadServiceDiv">
              <div className="emergencyFederalRoadServiceImageDiv">
                <img src={FederalRoadSafetyLogo} alt="" />
              </div>
              <div className="emergencyFederalRoadServiceTextDiv">
                <h1>Federal road safety services (fRSC)</h1>
                <p>08132222105-9</p>
              </div>
            </div>
          </div>
        </div>
        <div className="emergencyCallLineLastDiv">
          <div className="emergencyChildViolenceDiv">
            <div className="ChildViolenceImageDiv">
              <img src={domesticBoy} alt="" />
            </div>
            <div className="ChildViolenceTextDiv">
              <h1>Child Domestic Violence</h1>
              <p>0807572829, 081316543208</p>
            </div>
          </div>
          <div className="GirlsViolationAndWomenHelplineDiv">
            <div className="GirlsViolationImageDiv">
              <img src={shortNikaGirl} alt="" />
            </div>
            <div className="GirlsViolationTextDiv">
              <h1>Violation of girls and women helpline</h1>
              <p>0800072732255</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmergencyCallLine