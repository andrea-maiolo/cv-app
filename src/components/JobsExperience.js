import React, {Component, useState, useEffect} from 'react';
import JobInput from './JobInput'

class JobsExperience extends Component {
    constructor(props) {
        super(props);
    }
    render() {
      console.log(JobInput)

      return (
        <div className="jobsDiv">
            <JobInput />
            <button id="addJobs">Add</button>
        </div>
      )
    }
}

export default JobsExperience;