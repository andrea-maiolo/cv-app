import React, {Component, useState, useEffect} from 'react';

class Education extends Component {
    constructor(props) {
        super(props);
    }
    render() {
      return (
        <div className="educationDiv">
            <h2>Education</h2>
            <input onChange={this.props.onChange} type="text" className="educationInput" placeholder="University or High School" name="university"></input>
            <input onChange={this.props.onChange} type="text" className="educationInput" placeholder="City" name="cityEducation"></input>
            <input onChange={this.props.onChange} type="text" className="educationInput" placeholder="Degree" name="degree"></input>
            <input onChange={this.props.onChange} type="text" className="educationInput" placeholder="Subject" name="subject"></input>
            <input onChange={this.props.onChange} type="text" className="educationInput" placeholder="From" name="from"></input>
            <input onChange={this.props.onChange} type="text" className="educationInput" placeholder="To" name="to"></input>
            <button id="addEducation">Add</button>
            <button id="deleteEducation">Delete</button>
        </div>
      )
    }
}

export default Education;