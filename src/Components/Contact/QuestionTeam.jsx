import React from 'react'
import "./questionTeam.css"
import vicki from "../../assets/Vicky.svg"

const QuestionTeam = () => {
  return (
    <div className="questionBody">
      <div className="questionbodyInner">
        <div className="imageDiv">
          <img src={vicki} alt=""  />
        </div>
        <div className="safetyQustionDiv">
          <div className="safetyQuestionText1">
            <p>Questions about your safety needs?</p>
          </div>
          <div className="safetyQuestionText2">
            <p>Get in touch with  one of our team today</p>
          </div>
          <div className="btn">
            <p className='pTag2'>Get in touch</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionTeam