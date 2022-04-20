import React, {Component, useState, useEffect} from 'react';
import JobInput from './JobInput'
import {nanoid} from 'nanoid';

function JobsExperience(props) {
  const jobsStateFromApp = props.jobs
  const [domOfJE, setDomOfJE] = useState()

  //this run every time a new job is added so you can DOM it
  useEffect(() => {
    let newDom = jobsStateFromApp.map(job => {
      return(
        <div  key={job.id}> 
          <JobInput job={job}/>
          <button id={job.id}  onClick={job.handleDeleteJob}>Delete</button>
        </div>
      )}
    )
    setDomOfJE(newDom)
  },[jobsStateFromApp])

  return (
    <div className="jobsDiv">
      <h2>Jobs Experience</h2>
        {domOfJE}
    </div> 
  )
}

export default JobsExperience