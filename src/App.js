import React, {Component, useState, useEffect} from 'react';
import PersonalInfo from './components/PersonalInfo'
import JobsExperience from './components/JobsExperience'
import Education from './components/Education'
import {nanoid} from 'nanoid';

function App() {

  const [personal, setPersonal] = React.useState(
    {
      firstName: "",
      lastName:"",
      address:"",
      email:"",
      phoneNumber:"",
      description:""
    }
  );
  const [jobs, setJobs] = React.useState([]);

  useEffect(()=>{
    const firstExp = {
        id:nanoid(),
        onChange: handleJobInputChange,
        handleDeleteJob: handleDeleteJob,
        position:"",
        company:"",
        city:"",
        from:"",
        to:"",
    }
    setJobs([firstExp])
  },[0])

  const [education, setEducation] = React.useState({});

  const handleSubmit= function(e){
    e.preventDefault();
    console.log(personal)
    console.log(jobs)
    console.log(education)
  }

  const handlePersonalInputChange= function(e){
    let name = e.target.name;
    let value = e.target.value;
    setPersonal(prevState => {
      return{
        ...prevState,
        [name]:value
      }
    })
  }

  const handleJobInputChange= function(e){
    e.preventDefault();
    let name = e.target.name;
    let value = e.target.value;
    setJobs(prevState => {
      return{
        ...prevState,
        [name]:value
      }
    })
  }

  const handleAddJob = function(e){
    e.preventDefault();
    const newExp = {
      id:nanoid(),
      onChange: handleJobInputChange,
      handleDeleteJob: handleDeleteJob,
      position:"",
      company:"",
      city:"",
      from:"",
      to:"",
    }
    setJobs(prevState => [...prevState, newExp]);
  }
  
  const handleDeleteJob= function(e){
    e.preventDefault();
    let deleteReference =e.target.id
    deletingJob(deleteReference)
    //let dele = jobs.map(job => console.log(job))
    // let dele = jobs.find(job => job.id === deleteReference)
    //const newJobExpArray = jobs.filter( e => e !== dele)
    // setJobs(newJobExpArray)
  }

  function deletingJob(idToDelete){
    console.log(idToDelete)
    let j = [...jobs]
    console.log(j)
    let dele = j.map(job => job.id === idToDelete ? console.log(job) : console.log("no found"))
    console.log(dele)
    // let newJobExpArray = jobs.filter(e => e !== dele)
    // console.log(newJobExpArray)
  }

  const handleEducationInputChange= function(e){
    let name = e.target.name;
    let value = e.target.value;
    setEducation(prevState => {
      return{
        ...prevState,
        [name]:value
      }
    })
  }

  // const handlePrint = function(e){
  //   e.preventDefault()
  //   console.log(e)
  //   window.print()
  //   //this is how you print the page on submit
  // }

  return (
    <div className="App">
      <div className="titleDiv">
        <h1>CV EDITOR</h1>
      </div>
      <form className="formDiv">
        <PersonalInfo onChange={handlePersonalInputChange} personal={personal}/>
        <JobsExperience onChange={handleJobInputChange} jobs={jobs} setJobs={setJobs}/>
        <button id="addJobs" onClick={handleAddJob}>Add</button>
        <Education onChange={handleEducationInputChange} education={education} />
        <button type="submit" onClick={handleSubmit}>Submit</button>
        {/* <button type="reset">Reset</button> */}
      </form>
    </div>
  );
}

export default App;
