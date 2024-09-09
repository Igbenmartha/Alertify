import React from 'react'
import "./emergencynumbers.css"
const EmergencyNumbers = () => {
    //  const contactNumbers = [
    //    "08155554459",
    //    "081357676767",
    //    "08109942450",
    //    "08023142807",
    //  ];  
  return (
    <div className="emergencyNumeberBody">
      <div className="emergencyBodyInner">
        <div className="emergencyNumberText1">
          <h1>
            If all else fail, you can contact Health Emergency initiative (HEI)
            on the following numbers
          </h1>
        </div>
        <div className="emergencynumbersDiv">
          <div className="numbersDiv">
            <ul className="contact-list">
              {/* {contactNumbers.map((number, index) => ( */}
              <li className="contact-item">08155554459</li>
              {/* // ))} */}
            </ul>

            <ul className="contact-list">
              {/* {contactNumbers.map((number, index) => ( */}
              <li className="contact-item">081357676767</li>
              {/* // ))} */}
            </ul>

            <ul className="contact-list">
              {/* {contactNumbers.map((number, index) => ( */}
              <li className="contact-item">08109942450</li>
              {/* // ))} */}
            </ul>
            <ul className="contact-list">
              {/* {contactNumbers.map((number, index) => ( */}
              <li className="contact-item">08023142807</li>
              {/* // ))} */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmergencyNumbers