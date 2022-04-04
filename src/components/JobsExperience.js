import React, {Component, useState, useEffect} from 'react';
import JobInput from './JobInput'

function JobsExperience(props) {

  const [numberOfJob, setNumberOfJob] = useState([1]); 
  const [jobs, setJobs] =useState([]);

  useEffect(() => {
    setJobs(prevJobs=> {
      let k = numberOfJob[numberOfJob.length-1]
      return [
        ...prevJobs,
        <JobInput key={k} id={k} onChange={props.onChange} handleDeleteJob={handleDeleteJob}/>
      ]
    })
  },[numberOfJob]); 

  const handleAddJob = function(e){
    e.preventDefault();
    setNumberOfJob(prevState=> {
      let count = prevState[prevState.length - 1];
      return [
        ...prevState,
        count +1
      ]
    })
  }

  const handleDeleteJob= function(e){
    e.preventDefault();
    let a = "we"
    console.log(a)
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