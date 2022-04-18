import React, {Component, useState, useEffect} from 'react';
import EduInput from './EduInput'
import {nanoid} from 'nanoid';

function Education(props) {
  const [eduExp, setEduExp] =useState([]);
  const [domOfEE, setDomOfEE] = useState()

  useEffect(()=>{
    const firstEdu = {
        id:nanoid(),
        onChange: props.onChange,
        handleDeleteEdu: handleDeleteEdu
    }
    setEduExp([firstEdu])
  },[0])


  const handleAddEdu = function(e){
    e.preventDefault();
    const newEdu = {
      id:nanoid(),
      onChange: props.onChange,
      handleDeleteEdu: handleDeleteEdu
    }
    setEduExp(prevState => [...prevState, newEdu]);
  }

  const handleDeleteEdu= function(e){
    e.preventDefault();
    let deleteReference =e.target.id
    let dele = eduExp.find(edu => edu.id===deleteReference )
    const newEduExpArray = eduExp.filter( e => e !== dele)
    setEduExp(newEduExpArray)
  }

  useEffect(() => {
    let newDom = eduExp.map(edu => {
      return(
        <div  key={edu.id}> 
          <EduInput props={edu}/>
          <button id={edu.id}  onClick={handleDeleteEdu}>Delete</button>
        </div>
      )}
    )
    setDomOfEE(newDom)
  },[eduExp])

  return (
    <div className="educationDiv">
      <h2>Education</h2>
      {domOfEE}
      <button id="addEducation" onClick={handleAddEdu}>Add</button>
    </div>
  )
}

export default Education;