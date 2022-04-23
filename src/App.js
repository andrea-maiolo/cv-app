import React, {Component, useState, useEffect} from 'react';
import PersonalInfo from './components/PersonalInfo'
import JobsExperience from './components/JobsExperience'
import Education from './components/Education'
import {nanoid} from 'nanoid';

function App() {

  const [personal, setPersonal] = useState(
    {
      firstName: "",
      lastName:"",
      address:"",
      email:"",
      phoneNumber:"",
      description:""
    }
  );

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

  const [jobs, setJobs] = useState([]);
  useEffect(()=>{
    const firstExp = {
        id:nanoid(),
        position:"",
        company:"",
        city:"",
        from:"",
        to:"",
    }
    setJobs([firstExp])
  },[0])

  const handleAddJob = function(e){
    e.preventDefault();
    const newExp = {
      id:nanoid(),
      position:"",
      company:"",
      city:"",
      from:"",
      to:"",
    }
    setJobs(prevState => [...prevState, newExp]);
  }

  const [education, setEducation] = useState([]);
  useEffect(()=>{
    const firstEducation = {
        id:nanoid(),
        university:"",
        cityEducation:"",
        subject:"",
        from:"",
        to:"",
    }
    setEducation([firstEducation])
  },[0])

  const handleAddEducation = function(e){
    e.preventDefault();
    const newExp = {
      id:nanoid(),
      university:"",
      cityEducation:"",
      subject:"",
      from:"",
      to:"",
    }
    setEducation(prevState => [...prevState, newExp]);
  }

  // const handleEducationInputChange= function(e){
  //   let name = e.target.name;
  //   let value = e.target.value;
  //   setEducation(prevState => {
  //     return{
  //       ...prevState,
  //       [name]:value
  //     }
  //   })
  // }

  // const handlePrint = function(e){
  //   e.preventDefault()
  //   console.log(e)
  //   window.print()
  //   //this is how you print the page on submit
  // }

  const handleSubmit= function(e){
    e.preventDefault();
    console.log(personal)
    console.log(jobs)
    console.log(education)
  }

  return (
    <div className="App">
      <div className="titleDiv">
        <h1>CV EDITOR</h1>
      </div>
      <form className="formDiv">
        <PersonalInfo onChange={handlePersonalInputChange} personal={personal}/>
        <JobsExperience jobs={jobs} setJobs={setJobs}/>
        <button id="addJobs" onClick={handleAddJob}>Add</button>
        <Education education={education} setEducation={setEducation}/>
        <button id="addEducation" onClick={handleAddEducation}>Add</button>
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default App;
