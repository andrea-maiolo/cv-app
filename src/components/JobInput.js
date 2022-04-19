import React, {Component, useState, useEffect} from 'react';

const JobInput = function(props){
    let p = props.props
   // console.log(p)
   // console.log(props)
    // console.log(`this are the props passed in jobsInput from JE ${p}`)
    return(
        <div className="singleJob">
            <input onChange={p.onChange} type="text" className="jobsInput" placeholder="Position" name="position" value={p.stateForValue.position}></input>
            <input onChange={p.onChange} type="text" className="jobsInput" placeholder="Company" name="company" value={p.stateForValue.company}></input>
            <input onChange={p.onChange} type="text" className="jobsInput" placeholder="City" name="city" value={p.stateForValue.city}></input>
            <input onChange={p.onChange} type="text" className="jobsInput" placeholder="From" name="from" value={p.stateForValue.from}></input>
            <input onChange={p.onChange} type="text" className="jobsInput" placeholder="To" name="to" value={p.stateForValue.to}></input>
        </div>
    )
}

export default JobInput

