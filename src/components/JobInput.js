import React from 'react';

const JobInput = function(props){
    return(
        <div className="singleJob">
            <input 
              onChange={props.onChange}
              id={props.job.id}
              type="text" 
              className="jobsInput" 
              placeholder="Position" 
              name="position" 
              value={props.job.position}>
            </input>
            <input 
                onChange={props.onChange} 
                id={props.job.id} 
                type="text" 
                className="jobsInput" 
                placeholder="Company"
                name="company"
                value={props.job.company}>
            </input>
            <input 
                onChange={props.onChange} 
                id={props.job.id} 
                type="text" 
                className="jobsInput" 
                placeholder="City" 
                name="city"
                value={props.job.city}>
            </input>
            <input 
                onChange={props.onChange} 
                id={props.job.id} 
                type="text" 
                className="jobsInput" 
                placeholder="From" 
                name="from" 
                value={props.job.from}>
            </input>
            <input 
                onChange={props.onChange} 
                id={props.job.id} 
                type="text" 
                className="jobsInput" 
                placeholder="To" 
                name="to"
                value={props.job.to}>
            </input>
        </div>
    )
}

export default JobInput


