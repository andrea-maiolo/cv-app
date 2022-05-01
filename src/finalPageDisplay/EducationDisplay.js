import React from "react";

function EducationDisplay(props) {
  return (
    <div className="eduExp">
      <p className="degree">Degree in {props.subject}</p>
      <p className="uni">University {props.university}</p>
      <p className="cityE">City : {props.city}</p>
      <span className="timeE">
        From {props.from} to {props.to}
      </span>
    </div>
  );
}

export default EducationDisplay;
