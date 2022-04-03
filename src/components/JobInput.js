import React, {Component, useState, useEffect} from 'react';

const JobInput = function(){
    return(
        <div className="singleJob">
            <h2>Jobs Experience</h2>
            <input onChange={this.props.onChange} type="text" className="jobsInput" placeholder="Position" name="position"></input>
            <input onChange={this.props.onChange} type="text" className="jobsInput" placeholder="Company" name="company"></input>
            <input onChange={this.props.onChange} type="text" className="jobsInput" placeholder="City" name="city"></input>
            <input onChange={this.props.onChange} type="text" className="jobsInput" placeholder="From" name="from"></input>
            <input onChange={this.props.onChange} type="text" className="jobsInput" placeholder="To" name="to"></input>
            <button id="deleteJobs">Delete</button>
        </div>
    )
}

export default JobInput