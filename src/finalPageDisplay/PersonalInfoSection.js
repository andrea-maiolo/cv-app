import React from "react";

function PersonalInfoSection(props) {
  let p = props.props;
  return (
    <div className="personal-display-cv">
      <h3 className="pdc-contact">Contact info</h3>
      <p>number: {p.phoneNumber}</p>
      <p>address: {p.address}</p>
      <p>email: {p.email}</p>
    </div>
  );
}

export default PersonalInfoSection;
