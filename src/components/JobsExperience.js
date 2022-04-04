import React, {Component, useState, useEffect} from 'react';
import JobInput from './JobInput'

function JobsExperience(props) {

  const [numberOfJob, setNumberOfJob] = useState([1]); 
  const [jobs, setJobs] =useState([]);

  useEffect(() => {
    setJobs(prevJobs=> {
      return [
        ...prevJobs,
        <JobInput onChange={props.onChange}/>
      ]
    })
  },[numberOfJob]); 

  const handleAddJob = function(e){
    e.preventDefault();
    setNumberOfJob(prevState=> {
      return [
        ...prevState,
        1
      ]
    })
  }

  return (
    <div className="jobsDiv">
      <h2>Jobs Experience</h2>
      {jobs}
      <button id="addJobs" onClick={handleAddJob}>Add</button>
    </div> 
  )
}

export default JobsExperience