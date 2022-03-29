import React from 'react';
import PersonalInfo from './components/PersonalInfo'

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
      <form>
        <PersonalInfo onChange={handleInputChange} personal={personal}/>
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default App;
