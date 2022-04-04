import React, {Component, useState, useEffect} from 'react';
import EduInput from './EduInput'

function Education(props) {
  
  const [numberOfEdu, setNumberOfEdu] = useState([1]); 
  const [edus, setEdus] =useState([]);

  useEffect(() => {
    setEdus(prevEdus=> {
      return [
        ...prevEdus,
        <EduInput onChange={props.onChange}/>
      ]
    })
  },[numberOfEdu]);

  const handleAddEdu = function(e){
    e.preventDefault();
    setNumberOfEdu(prevState=> {
      return [
        ...prevState,
        1
      ]
    })
  }

  return (
    <div className="educationDiv">
      <h2>Education</h2>
      {edus}
      <button id="addEducation" onClick={handleAddEdu}>Add</button>
    </div>
  )
}

export default Education;