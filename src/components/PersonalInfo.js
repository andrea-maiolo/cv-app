import React, {Component, useState, useEffect} from 'react';

class PersonalInfo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
      return (
        <div className="personalDiv">
            <h2>Personal information</h2>
            <input 
              onChange={this.props.onChange} 
              type="text" 
              className="personalInput" 
              placeholder="First Name"
              name="firstName"
              value={this.props.personal.firstName} 
              required>
            </input>
            <input
              onChange={this.props.onChange} 
              type="text" 
              className="personalInput"
              placeholder="Last Name"
              name="lastName"
              value={this.props.personal.lastName} 
              required>
            </input>
            <input 
              type="file" 
              className="personalInput" 
              name="photo" 
              accept="image/png, image/jpeg">
            </input>
            <input 
              onChange={this.props.onChange}
              type="text" 
              className="personalInput" 
              placeholder="Address" 
              name="address"
              value={this.props.personal.address}>
            </input>
            <input 
              onChange={this.props.onChange} 
              type="email" 
              className="personalInput" 
              placeholder="Email" 
              name="email" 
              value={this.props.personal.email}
              required>
            </input>
            <input 
              onChange={this.props.onChange} 
              type="text" 
              className="personalInput" 
              placeholder="Phone number" 
              name="phoneNumber"
              value={this.props.personal.phoneNumber}
              required>
            </input>
            <input 
              onChange={this.props.onChange} 
              type="text" 
              className="personalInput" 
              placeholder="Description" 
              name="description"
              value={this.props.personal.description}>
            </input>
        </div>
      )
    }
}

export default PersonalInfo;