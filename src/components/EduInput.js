import React from "react";

const EduInput = function (props) {
  return (
    <div className="singleEdu">
      <label className="labelsE" htmlFor="university">
        University or High school
        <input
          onChange={props.onChange}
          id={props.edu.id}
          type="text"
          className="educationInput"
          name="university"
          value={props.edu.univerity}
        ></input>
      </label>
      <label className="labelsE" htmlFor="cityEducation">
        City
        <input
          onChange={props.onChange}
          id={props.edu.id}
          type="text"
          className="educationInput"
          name="cityEducation"
          value={props.edu.cityEducation}
        ></input>
      </label>
      <label className="labelsE" htmlFor="subject">
        Subject
        <input
          onChange={props.onChange}
          id={props.edu.id}
          type="text"
          className="educationInput"
          name="subject"
          value={props.edu.subject}
        ></input>
      </label>
      <label className="labelsE" htmlFor="from">
        From
        <input
          onChange={props.onChange}
          id={props.edu.id}
          type="text"
          className="educationInput"
          name="from"
          value={props.edu.from}
        ></input>
      </label>
      <label className="labelsE" htmlFor="to">
        To
        <input
          onChange={props.onChange}
          id={props.edu.id}
          type="text"
          className="educationInput"
          name="to"
          value={props.edu.to}
        ></input>
      </label>
    </div>
  );
};

export default EduInput;
