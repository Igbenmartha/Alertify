import React from "react";
import "./emergencycallline.css";
import "./emergencyMobile.css";
import police from "../../assets/PoliceImage.svg";
import helipcopter from "../../assets/HelicopterImage.svg";
import boykick from "../../assets/BoyKickGirl.svg";
import ArmyMan from "../../assets/SoldierMan.svg";
import rope from "../../assets/HangRope.svg"
import FederalRoadSafetyLogo from "../../assets/FrscGreenHead.svg";
import domesticBoy from "../../assets/DomesticBoy.svg";
import shortNikaGirl from "../../assets/ShortNika.svg";

const EmergencyCallLine = () => {
  return (
    <div className="HomePagesImagesStageInner">
      <h3 className="HomePageH3">
        Please call this lines <span style={{ color: "blue" }}>ONLY</span>when
        you need help
      </h3>

      <div className="HomePageImagesStage">
        <div className="HomePagesImageStageInnerOne">
          <div className="HomePageImageTextConatinerHloder">
            <img src={police} className="HaomePageImageIcons" />

            <div className="HomePagetextContainerHolderTwo">
              <p
                style={{ fontSize: "20px", fontWeight: "700" }}
                className="HomePagePtage"
              >
                Polive emergency Phone Number
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
            <img src={helipcopter} className="HaomePageImageIcons" />

            <div className="HomePagetextContainerHolderTwo">
              <p
                style={{ fontSize: "20px", fontWeight: "700" }}
                className="HomePagePtage"
              >
                Rapid response squad
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

        <div className="HomePagesImageStageInnerTwo">
          <div className="HomePageConatinerRape">
            <img src={boykick} />

            <div className="HomePagetextContainerHolderTwo">
              <p
                style={{ fontSize: "20px", fontWeight: "700" }}
                className="HomePagePtage"
              >
                Rape Helpline
              </p>
              <p
                style={{ fontSize: "10px", color: "gray" }}
                className="HomePageNombers"
              >
                08007662672
              </p>
            </div>
          </div>
        </div>

        <div className="HomePagesImageStageInnerOne">
          <div className="HomePageImageTextConatinerHloder">
            <img src={ArmyMan} className="HaomePageImageIcons" />

            <div className="HomePagetextContainerHolderTwo">
              <p
                style={{ fontSize: "20px", fontWeight: "700" }}
                className="HomePagePtage"
              >
                Nigerian army human right
              </p>
              <p
                style={{ fontSize: "10px", color: "gray" }}
                className="HomePageNombers"
              >
                if you're harassed by an army officals call 09072682752 or
                08067526523
              </p>
            </div>
          </div>

          <div className="HomePageImageTextConatinerHloderTwo">
            <img src={rope} className="HaomePageImageIcons" />

            <div className="HomePagetextContainerHolderTwo">
              <p
                style={{ fontSize: "20px", fontWeight: "700" }}
                className="HomePagePtage"
              >
                Depression / sucide prevention initiatives
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

        <div className="HomePagesImageStageInnerTwo">
          <div className="HomePageConatinerRape">
            <img src={FederalRoadSafetyLogo} className="HaomePageImageIcons" />

            <div className="HomePagetextContainerHolderTwo">
              <p
                style={{ fontSize: "20px", fontWeight: "700" }}
                className="HomePagePtage"
              >
                Federal road safety service (FRSC)
              </p>
              <p
                style={{ fontSize: "10px", color: "gray" }}
                className="HomePageNombers"
              >
                01-4931260,01-14978899
              </p>
            </div>
          </div>
        </div>

        <div className="HomePagesImageStageInnerOne">
          <div className="HomePageImageTextConatinerHloder">
            <img src={domesticBoy} className="HaomePageImageIcons" />

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
            <img src={ArmyMan} className="HaomePageImageIcons" />

            <div className="HomePagetextContainerHolderTwo">
              <p
                style={{ fontSize: "20px", fontWeight: "700" }}
                className="HomePagePtage"
              >
                Violation of girls and women helpline
              </p>
              <p
                style={{ fontSize: "10px", color: "gray" }}
                className="HomePageNombers"
              >
                090652765678
              </p>
            </div>
          </div>
        </div>

        <div className="HomePageRapeSymbolMobile">
          <div className="HomePagesImageStageInnerTwoMobile">
            <div className="HomePageConatinerRape">
              <img src={shortNikaGirl} className="HaomePageImageIconsMobile" />

              <div className="HomePagetextContainerHolderTwoMobile">
                <p
                  style={{ fontSize: "20px", fontWeight: "700" }}
                  className="HomePagePtage"
                >
                  Federal road safety service (FRSC)
                </p>
                <p
                  style={{ fontSize: "10px", color: "gray" }}
                  className="HomePageNombers"
                >
                  01-4931260,01-14978899
                </p>
              </div>
            </div>
          </div>

          <div className="HomePagesImageStageInnerTwoMobile">
            <div className="HomePageConatinerRape">
              <img src={rope} className="HaomePageImageIconsMobile" />

              <div className="HomePagetextContainerHolderTwo">
                <p
                  style={{ fontSize: "20px", fontWeight: "700" }}
                  className="HomePagePtage"
                >
                  Rape Helpline
                </p>
                <p
                  style={{ fontSize: "10px", color: "gray" }}
                  className="HomePageNombers"
                >
                  08007662672
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyCallLine;
