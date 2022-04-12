import React from 'react';
import PersonalInfo from './components/PersonalInfo'
import JobsExperience from './components/JobsExperience'
import Education from './components/Education'

function App() {

  const [personal, setPersonal] = React.useState({});
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

  return (
    <div className="App">
      <div className="titleDiv">
        <h1>CV EDITOR</h1>
      </div>
      <form className="formDiv">
        {/* <PersonalInfo onChange={handlePersonalInputChange} personal={personal}/> */}
        <JobsExperience onChange={handleJobInputChange} jobs={jobs}/>
        {/* <Education onChange={handleEducationInputChange} /> */}
        <button id="reset">Reset</button>
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default App;
