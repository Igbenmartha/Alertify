import React from "react";
import "./emergencyhelp.css";
import "./emergencyMobile.css";
import tongue from "../../assets/RedTongue.svg";
import traffic from "../../assets/TrafficLight.svg";
import Frcs from "../../assets/FrscGreenHead.svg";
import fire from "../../assets/FireBox.svg";
import fineboy from "../../assets/Boy.svg";
import boygirl from "../../assets/BoyKickGirl.svg";

const EmergencyHelp = () => {
  return (
    <div className="HomePagesImagesStageInnerTwo">
      <h3 className="HomePageH3">Lagos emergency helpline</h3>

      <div className="HomePageImagesStage">
        <div className="HomePagesImageStageInnerOne">
          <div className="HomePageImageTextConatinerHloder">
            <img src={tongue} className="HaomePageImageIconsDestop" />

            <div className="HomePagetextContainerHolderTwo">
              <p
                style={{ fontSize: "20px", fontWeight: "700" }}
                className="HomePagePtage"
              >
                Lagos Emergency service
              </p>
              <p
                style={{ fontSize: "10px", color: "gray" }}
                className="HomePageNombers"
              >
                767 or 112 (this cover police,Amublance service and Traffic
                Service)
              </p>
            </div>
          </div>

          <div className="HomePageImageTextConatinerHloderTwo">
            <img src={traffic} className="HaomePageImageIconsDestop" />

            <div className="HomePagetextContainerHolderTwo">
              <p
                style={{ fontSize: "20px", fontWeight: "700" }}
                className="HomePagePtage"
              >
                Lagos Sate Traffic Management Authorty (LASTMA)
              </p>
              <p
                style={{ fontSize: "10px", color: "gray" }}
                className="HomePageNombers"
              >
                070-5555262626, 070622526262,08072628276
              </p>
            </div>
          </div>
        </div>

        <div className="HomePagesImageStageInnerOne">
          <div className="HomePageImageTextConatinerHloder">
            <img src={Frcs} className="HaomePageImageIconsDestop" />

            <div className="HomePagetextContainerHolderTwo">
              <p
                style={{ fontSize: "20px", fontWeight: "700" }}
                className="HomePagePtage"
              >
                FRSC Zonal Office (Lagos State)
              </p>
              <p
                style={{ fontSize: "10px", color: "gray" }}
                className="HomePageNombers"
              >
                09072682752 or 08067526523
              </p>
            </div>
          </div>

          <div className="HomePageImageTextConatinerHloderTwo">
            <img src={fire} className="HaomePageImageIconsDestop" />

            <div className="HomePagetextContainerHolderTwo">
              <p
                style={{ fontSize: "20px", fontWeight: "700" }}
                className="HomePagePtage"
              >
                Fire Help Lines(Lagos State)
              </p>
              <p
                style={{ fontSize: "10px", color: "gray" }}
                className="HomePageNombers"
              >
                08037893693, 09072876276,0818738723, 070673327863, 080633638778
              </p>
            </div>
          </div>
        </div>

        <div className="HomePagesImageStageInnerOne">
          <div className="HomePageImageTextConatinerHloder">
            <img src={fineboy} className="HaomePageImageIconsDestop" />

            <div className="HomePagetextContainerHolderTwo">
              <p
                style={{ fontSize: "20px", fontWeight: "700" }}
                className="HomePagePtage"
              >
                Child Domestic Violence
              </p>
              <p
                style={{ fontSize: "10px", color: "gray" }}
                className="HomePageNombers"
              >
                01-4931260,01-14978899
              </p>
            </div>
          </div>

          <div className="HomePageImageTextConatinerHloderTwo">
            <img src={boygirl} className="HaomePageImageIconsDestop" />

            <div className="HomePagetextContainerHolderTwo">
              <p
                style={{ fontSize: "20px", fontWeight: "700" }}
                className="HomePagePtage"
              >
                Child Abuse Hotline(Lagos)
              </p>
              <p
                style={{ fontSize: "10px", color: "gray" }}
                className="HomePageNombers"
              >
                090652765678, 090766464677
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyHelp;
