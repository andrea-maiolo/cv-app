import React, {Component, useState, useEffect} from 'react';

const EduInput = function(props){
    let p = props.props
    return(
        <div className="singleEdu">
            <input onChange={props.onChange} type="text" className="educationInput" placeholder="University or High School" name="university"></input>
            <input onChange={props.onChange} type="text" className="educationInput" placeholder="City" name="cityEducation"></input>
            <input onChange={props.onChange} type="text" className="educationInput" placeholder="Degree" name="degree"></input>
            <input onChange={props.onChange} type="text" className="educationInput" placeholder="Subject" name="subject"></input>
            <input onChange={props.onChange} type="text" className="educationInput" placeholder="From" name="from"></input>
            <input onChange={props.onChange} type="text" className="educationInput" placeholder="To" name="to"></input>
        </div>
    )
}

export default EduInput

