import React from "react";

function PersonalInfoSection(props) {
  let p = props.props;
  return (
    <div className="personal-display-cv">
      <h1 className="name">
        {p.firstName} {p.lastName}
      </h1>
      <h3 className="pdc-contact">Contact info</h3>
      <p className="pdc-contact">Number : {p.phoneNumber}</p>
      <p className="pdc-contact">Address : {p.address}</p>
      <p className="pdc-contact">Email : {p.email}</p>
      <p id="description" className="pdc-contact">
        {p.description}
      </p>
    </div>
  );
}

export default PersonalInfoSection;
