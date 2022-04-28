import React, { useState, useEffect } from "react";
import EduInput from "./EduInput";

function Education(props) {
  const education = props.education;
  const setEducation = props.setEducation;
  const [domOfEE, setDomOfEE] = useState();

  useEffect(() => {
    let newDomEdu = education.map((edu) => {
      return (
        <div className="eduAndButton" key={edu.id}>
          <EduInput edu={edu} onChange={handleEducationInput} />
          <button className="dltEdu" id={edu.id} onClick={handleDeleteEdu}>
            Delete
          </button>
        </div>
      );
    });
    setDomOfEE(newDomEdu);
  }, [education]);

  const handleEducationInput = function (e) {
    e.preventDefault();
    let name = e.target.name;
    let value = e.target.value;
    let currentEducation = e.target.id;
    let updatedEdu = [...education];
    const modified = education.find((edu) => edu.id === currentEducation);
    const index = education.findIndex((edu) => edu.id === currentEducation);
    modified[name] = value;
    updatedEdu[index] = modified;
    setEducation(updatedEdu);
  };

  const handleDeleteEdu = function (e) {
    e.preventDefault();
    let deleteReference = e.target.id;
    let dele = education.find((edu) => edu.id === deleteReference);
    const newEduExpArray = education.filter((e) => e !== dele);
    setEducation(newEduExpArray);
  };

  return (
    <div className="educationDiv">
      <h2 className="educationTitle">Education</h2>
      {domOfEE}
    </div>
  );
}

export default Education;
