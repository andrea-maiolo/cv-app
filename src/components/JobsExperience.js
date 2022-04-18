import React, {Component, useState, useEffect} from 'react';
import JobInput from './JobInput'
import {nanoid} from 'nanoid';

function JobsExperience(props) {

  const [jobsExp, setJobExp] =useState([]);
  const [domOfJE, setDomOfJE] = useState()

  useEffect(()=>{
    const firstExp = {
        id:nanoid(),
        onChange: props.onChange,
        handleDeleteJob: handleDeleteJob
    }
    setJobExp([firstExp])
  },[0])

  const handleAddJob = function(e){
    e.preventDefault();
    const newExp = {
      id:nanoid(),
      onChange: props.onChange,
      handleDeleteJob: handleDeleteJob
    }
    setJobExp(prevState => [...prevState, newExp]);
  }

  const handleDeleteJob= function(e){
    e.preventDefault();
    let deleteReference =e.target.id
    let dele = jobsExp.find(job => job.id===deleteReference )
    const newJobExpArray = jobsExp.filter( e => e !== dele)
    setJobExp(newJobExpArray)
  }

  useEffect(() => {
    let newDom = jobsExp.map(job => {
      return(
        <div  key={job.id}> 
          <JobInput props={job}/>
          <button id={job.id}  onClick={handleDeleteJob}>Delete</button>
        </div>
      )}
    )
    setDomOfJE(newDom)
  },[jobsExp])

  return (
    <div className="jobsDiv">
      <h2>Jobs Experience</h2>
      {domOfJE}
      <button id="addJobs" onClick={handleAddJob}>Add</button>
    </div> 
  )
}

export default JobsExperience