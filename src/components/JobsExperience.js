import React, {Component, useState, useEffect} from 'react';
import JobInput from './JobInput'
import {nanoid} from 'nanoid';

function JobsExperience(props) {
  const jobsStateFromApp = props.jobs
  const sJ = props.setJobs
  const [domOfJE, setDomOfJE] = useState()

  //this run every time a new job is added so you can DOM it
  useEffect(() => {
    let newDom = jobsStateFromApp.map(job => {
      return(
        <div  key={job.id}> 
          <JobInput job={job}/>
          <button id={job.id}  onClick={handleDeleteJob}>Delete</button>
        </div>
      )}
    )
    setDomOfJE(newDom)
  },[jobsStateFromApp])

  const handleDeleteJob= function(e){
    e.preventDefault();
    let deleteReference =e.target.id
    console.log(deleteReference)
    let dele = jobsStateFromApp.find(job => job.id === deleteReference)
    console.log(dele)
    const newJobExpArray = jobsStateFromApp.filter( e => e !== dele)
    console.log(newJobExpArray)
    sJ(newJobExpArray)
  }

  return (
    <div className="jobsDiv">
      <h2>Jobs Experience</h2>
        {domOfJE}
    </div> 
  )
}

export default JobsExperience