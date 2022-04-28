import React, { useState, useEffect } from "react";
import JobInput from "./JobInput";

function JobsExperience(props) {
  const jobs = props.jobs;
  const setJobs = props.setJobs;
  const [domOfJE, setDomOfJE] = useState();

  useEffect(() => {
    let newDom = jobs.map((job) => {
      return (
        <div className="jobAndButton" key={job.id}>
          <JobInput job={job} onChange={handleJobInputChange} />
          <button id={job.id} className="dltJob" onClick={handleDeleteJob}>
            Delete
          </button>
        </div>
      );
    });
    setDomOfJE(newDom);
  }, [jobs]);

  const handleJobInputChange = function (e) {
    e.preventDefault();
    let name = e.target.name;
    let value = e.target.value;
    let currentJob = e.target.id;
    let updatedJobs = [...jobs];
    const modified = jobs.find((job) => job.id === currentJob);
    const index = jobs.findIndex((job) => job.id === currentJob);
    modified[name] = value;
    updatedJobs[index] = modified;
    setJobs(updatedJobs);
  };

  const handleDeleteJob = function (e) {
    e.preventDefault();
    let deleteReference = e.target.id;
    let dele = jobs.find((job) => job.id === deleteReference);
    const newJobExpArray = jobs.filter((e) => e !== dele);
    setJobs(newJobExpArray);
  };

  return (
    <div className="jobsDiv">
      <h2 className="jobsExperienceTitle">Jobs Experience</h2>
      {domOfJE}
    </div>
  );
}

export default JobsExperience;
