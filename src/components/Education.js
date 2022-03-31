import React, {Component, useState, useEffect} from 'react';

class Education extends Component {
    constructor(props) {
        super(props);
    }
    render() {
      return (
        <div className="educationDiv">
            <input type="text" className="educationInput" placeholder="University or High School" name="university"></input>
            <input type="text" className="educationInput" placeholder="City" name="cityEducation"></input>
            <input type="text" className="educationInput" placeholder="Degree" name="degree"></input>
            <input type="text" className="educationInput" placeholder="Subject" name="subject"></input>
            <input type="text" className="educationInput" placeholder="From" name="from"></input>
            <input type="text" className="educationInput" placeholder="To" name="to"></input>
        </div>
      )
    }
}

export default Education;