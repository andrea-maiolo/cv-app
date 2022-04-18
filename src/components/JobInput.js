import React, {Component, useState, useEffect} from 'react';

const JobInput = function(props){
    let p = props.props
    return(
        <div className="singleJob">
            <input onChange={p.onChange} type="text" className="jobsInput" placeholder="Position" name="position"></input>
            <input onChange={p.onChange} type="text" className="jobsInput" placeholder="Company" name="company"></input>
            <input onChange={p.onChange} type="text" className="jobsInput" placeholder="City" name="city"></input>
            <input onChange={p.onChange} type="text" className="jobsInput" placeholder="From" name="from"></input>
            <input onChange={p.onChange} type="text" className="jobsInput" placeholder="To" name="to"></input>
        </div>
    )
}

export default JobInput

