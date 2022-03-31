import React, {Component, useState, useEffect} from 'react';

class JobsExperience extends Component {
    constructor(props) {
        super(props);
    }
    render() {
      return (
        <div className="jobsDiv">
            <input type="text" className="jobsInput" placeholder="Position" name="position"></input>
            <input type="text" className="jobsInput" placeholder="Company" name="company"></input>
            <input type="text" className="jobsInput" placeholder="City" name="city"></input>
            <input type="text" className="jobsInput" placeholder="From" name="from"></input>
            <input type="text" className="jobsInput" placeholder="To" name="to"></input>
        </div>
      )
    }
}

export default JobsExperience;