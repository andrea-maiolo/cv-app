import React from 'react';
import PersonalInfo from './components/PersonalInfo'
import JobsExperience from './components/JobsExperience'
import Education from './components/Education'

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
  const [jobs, setJobs] = React.useState({});
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
    let name = e.target.name;
    let value = e.target.value;
    setJobs(prevState => {
      return{
        ...prevState,
        [name]:value
      }
    })
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
        <JobsExperience onChange={handleJobInputChange} jobs={jobs}/>
        <Education onChange={handleEducationInputChange} education={education} />
        <button type="submit" onClick={handleSubmit}>Submit</button>
        {/* <button type="reset">Reset</button> */}
      </form>
    </div>
  );
}

export default App;
