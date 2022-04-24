import React from "react";
import profilePic from ".././styles/profile.jpg";

function PersonalInfoSection(props) {
  let p = props.props;
  return (
    <div className="personal-display-cv">
      <h3 className="pdc-contact">Contact info</h3>
      <p>number: {p.phoneNumber}</p>
      <p>address: {p.address}</p>
      <p>email: {p.email}</p>
      <img id="profilePic" src={profilePic} />
    </div>
  );
}

export default PersonalInfoSection;
