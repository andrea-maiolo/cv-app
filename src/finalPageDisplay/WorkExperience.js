import React from "react";

function WorkExperience(props) {
  return (
    <div className="workExp">
      <h4 className="position">{props.position}</h4>
      <p className="company">Company: {props.company}</p>
      <p className="cityW">{props.city}</p>
      <span className="timeW">
        From {props.from} • to {props.to}
      </span>
    </div>
  );
}

export default WorkExperience;
