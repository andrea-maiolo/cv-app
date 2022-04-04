import React, {Component, useState, useEffect} from 'react';

const JobInput = function(props){
    return(
        <div className="singleJob">
            <input onChange={props.onChange} type="text" className="jobsInput" placeholder="Position" name="position"></input>
            <input onChange={props.onChange} type="text" className="jobsInput" placeholder="Company" name="company"></input>
            <input onChange={props.onChange} type="text" className="jobsInput" placeholder="City" name="city"></input>
            <input onChange={props.onChange} type="text" className="jobsInput" placeholder="From" name="from"></input>
            <input onChange={props.onChange} type="text" className="jobsInput" placeholder="To" name="to"></input>
            <button id="deleteJobs">Delete</button>
        </div>
    )
}

export default JobInput

