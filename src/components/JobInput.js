import React, {Component, useState, useEffect} from 'react';

const JobInput = function(props){
     console.log(props)
    return(
        <div className="singleJob">
            <input onChange={props.onChange} type="text" className="jobsInput" placeholder="Position" name="position"></input>
            <input onChange={props.onChange} type="text" className="jobsInput" placeholder="Company" name="company"></input>
            <input onChange={props.onChange} type="text" className="jobsInput" placeholder="City" name="city"></input>
            <input onChange={props.onChange} type="text" className="jobsInput" placeholder="From" name="from"></input>
            <input onChange={props.onChange} type="text" className="jobsInput" placeholder="To" name="to"></input>
            <p>{props.noj}</p>
            <p>{props.number}</p>
            <button id="deleteJobs" name={props.id} onClick={props.handleDeleteJob}>Delete</button>
        </div>
    )
}

export default JobInput

