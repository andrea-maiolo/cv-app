import React, {Component, useState, useEffect} from 'react';
import JobInput from './JobInput'
import {nanoid} from 'nanoid';

function JobsExperience(props) {

  const [numberOfJobs, setNumberOfJobs] = useState([]); 
  const [count, setCount] =useState(1);

  useEffect(() => {
    console.log("running effect")
    setNumberOfJobs(prevState=>{
      return [ 
        ...prevState,
        nanoid()
      ]
    })
  },[0]); 


  const handleAddJob = function(e){
    e.preventDefault();
    setCount(prevState => prevState +1)
    setNumberOfJobs(prevState=> {
      let count = prevState[prevState.length - 1];
      return [
        ...prevState,
        nanoid()
      ]
    })
  }

  const handleDeleteJob= function(e){
    e.preventDefault();
    console.log(numberOfJobs)
  }

  const jobs = numberOfJobs.map(e => {
    console.log("runnigs jobs")
    return (
      <JobInput 
        key={e}
        id={e}
        number={count}
        noj={numberOfJobs}
        onChange={props.onChange}
        handleDeleteJob={handleDeleteJob}/>
    )
  }) 


  return (
    <div className="jobsDiv">
      <h2>Jobs Experience</h2>
      {jobs}
      <button id="addJobs" onClick={handleAddJob}>Add</button>
    </div> 
  )
}

export default JobsExperience