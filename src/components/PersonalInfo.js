import React, { Component, useState, useEffect } from "react";

class PersonalInfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="personalDiv">
        <h2 className="personalInformationInput">Personal information</h2>
        <label className="labelsP" htmlFor="firstName">
          First name
          <input
            onChange={this.props.onChange}
            type="text"
            className="personalInput"
            placeholder="*"
            name="firstName"
            value={this.props.personal.firstName}
            required
          ></input>
        </label>
        <label className="labelsP" htmlFor="lastName">
          Last name
          <input
            onChange={this.props.onChange}
            type="text"
            className="personalInput"
            placeholder="*"
            name="lastName"
            value={this.props.personal.lastName}
            required
          ></input>
        </label>
        <label className="labelsP" htmlFor="address">
          Address
          <input
            onChange={this.props.onChange}
            type="text"
            className="personalInput"
            // placeholder="Address"
            name="address"
            value={this.props.personal.address}
          ></input>
        </label>
        <label className="labelsP" htmlFor="email">
          Email
          <input
            onChange={this.props.onChange}
            type="email"
            className="personalInput"
            placeholder="*"
            name="email"
            value={this.props.personal.email}
            required
          ></input>
        </label>
        <label className="labelsP" htmlFor="phoneNumber">
          Phone number
          <input
            onChange={this.props.onChange}
            type="text"
            className="personalInput"
            placeholder="*"
            name="phoneNumber"
            value={this.props.personal.phoneNumber}
            required
          ></input>
        </label>
        <label className="labelsP" htmlFor="description">
          Description
          <input
            onChange={this.props.onChange}
            type="text"
            className="personalInput"
            // placeholder="Description"
            name="description"
            value={this.props.personal.description}
          ></input>
        </label>
      </div>
    );
  }
}

export default PersonalInfo;
