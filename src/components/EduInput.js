import React from 'react';

const EduInput = function(props){
    return(
        <div className="singleEdu">
            <input 
                onChange={props.onChange}
                id={props.edu.id} 
                type="text" 
                className="educationInput" 
                placeholder="University or High School" 
                name="university"
                value={props.edu.univerity}>
            </input>
            <input 
                onChange={props.onChange} 
                id={props.edu.id} 
                type="text" 
                className="educationInput" 
                placeholder="City" 
                name="cityEducation"
                value={props.edu.cityEducation}>
            </input>
            <input 
                onChange={props.onChange}
                id={props.edu.id}  
                type="text" 
                className="educationInput" 
                placeholder="Subject" 
                name="subject"
                value={props.edu.subject}>
            </input>
            <input 
                onChange={props.onChange}
                id={props.edu.id}  
                type="text" 
                className="educationInput" 
                placeholder="From" 
                name="from"
                value={props.edu.from}>
            </input>
            <input 
                onChange={props.onChange}
                id={props.edu.id}  
                type="text" 
                className="educationInput"
                placeholder="To" 
                name="to"
                value={props.edu.to}>
            </input>
        </div>
    )
}

export default EduInput

