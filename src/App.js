import React, { useState, useEffect } from "react";
import PersonalInfo from "./components/PersonalInfo";
import JobsExperience from "./components/JobsExperience";
import Education from "./components/Education";
import { nanoid } from "nanoid";
import FinalPage from "./FinalPage";

function App() {
  const [personal, setPersonal] = useState({
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    phoneNumber: "",
    description: "",
  });

  const handlePersonalInputChange = function (e) {
    let name = e.target.name;
    let value = e.target.value;
    setPersonal((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const firstExp = {
      id: nanoid(),
      position: "",
      company: "",
      city: "",
      from: "",
      to: "",
    };
    setJobs([firstExp]);
  }, [0]);

  const handleAddJob = function (e) {
    e.preventDefault();
    const newExp = {
      id: nanoid(),
      position: "",
      company: "",
      city: "",
      from: "",
      to: "",
    };
    setJobs((prevState) => [...prevState, newExp]);
  };

  const [education, setEducation] = useState([]);
  useEffect(() => {
    const firstEducation = {
      id: nanoid(),
      university: "",
      cityEducation: "",
      subject: "",
      from: "",
      to: "",
    };
    setEducation([firstEducation]);
  }, [0]);

  const handleAddEducation = function (e) {
    e.preventDefault();
    const newExp = {
      id: nanoid(),
      university: "",
      cityEducation: "",
      subject: "",
      from: "",
      to: "",
    };
    setEducation((prevState) => [...prevState, newExp]);
  };

  const [showFinalPage, setShowFinalPage] = useState(false);

  function handleShowFinalPage(e) {
    e.preventDefault();
    setShowFinalPage((prevState) => !prevState);
  }

  return (
    <div className="App">
      <div className="titleDiv">
        <h1>CV EDITOR</h1>
      </div>
      {!showFinalPage && (
        <div className="formContainer">
          <form className="myForm">
            <PersonalInfo
              onChange={handlePersonalInputChange}
              personal={personal}
            />
            <JobsExperience jobs={jobs} setJobs={setJobs} />
            <button id="addJobs" onClick={handleAddJob}>
              Add
            </button>
            <Education education={education} setEducation={setEducation} />
            <button id="addEducation" onClick={handleAddEducation}>
              Add
            </button>
            <button type="submit" onClick={handleShowFinalPage}>
              Submit
            </button>
            <button onClick={handleShowFinalPage} id="showFinalPage">
              {showFinalPage ? "Edit" : "Show result"}
            </button>
          </form>
        </div>
      )}
      {showFinalPage && (
        <div className="finalPage">
          <FinalPage jobs={jobs} personal={personal} education={education} />
        </div>
      )}
    </div>
  );
}

export default App;
