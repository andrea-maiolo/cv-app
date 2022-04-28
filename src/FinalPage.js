import React from "react";
import PersonalInfoSection from "./finalPageDisplay/PersonalInfoSection";
import WorkExperience from "./finalPageDisplay/WorkExperience";
import EducationDisplay from "./finalPageDisplay/EducationDisplay";

const FinalPage = function (props) {
  const handlePrint = function (e) {
    e.preventDefault();
    window.print();
  };

  const work = props.jobs.map((item) => {
    return (
      <WorkExperience
        position={item.position}
        city={item.city}
        company={item.company}
        from={item.from}
        to={item.to}
        key={item.id}
      />
    );
  });

  const edu = props.education.map((item) => {
    return (
      <EducationDisplay
        subject={item.subject}
        city={item.cityEducation}
        university={item.university}
        from={item.from}
        to={item.to}
        key={item.id}
      />
    );
  });

  return (
    <div>
      <div className="finalPageContainer">
        <div className="cv-page">
          <div className="side-div">
            <PersonalInfoSection props={props.personal} />
          </div>
          <div className="main-div">
            <h1 className="name">
              {props.personal.firstName} {props.personal.lastName}
            </h1>
            <p className="description">{props.personal.description}</p>
            <h3 className="workExpHeader">Work experience</h3>
            {work}
            <h3 className="eduExpHeader">Education</h3>
            {edu}
          </div>
        </div>
      </div>
      <button className="printMe" onClick={handlePrint}>
        Print now
      </button>
    </div>
  );
};

export default FinalPage;
