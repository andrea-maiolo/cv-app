import React from 'react';
import PersonalInfo from './components/PersonalInfo'
import JobsExperience from './components/JobsExperience'
import Education from './components/Education'

function App() {

  const [personal, setPersonal] = React.useState({})

  const handleSubmit= function(e){
    e.preventDefault();
    console.log(personal)
  }

  const handleInputChange= function(e){
    let name = e.target.name;
    let value = e.target.value;
    setPersonal(prevState => {
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
        <h2>Personal information</h2>
        <PersonalInfo onChange={handleInputChange} personal={personal}/>
        <h2>Jobs Experience</h2>
        <JobsExperience />
        <button id="addJobs">Add</button>
        <button id="deleteJobs">Delete</button>
        <h2>Education</h2>
        <Education />
        <button id="addEducation">Add</button>
        <button id="deleteEducation">Delete</button>
        <button id="reset">Reset</button>
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default App;
