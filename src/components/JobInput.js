import React from "react";

const JobInput = function (props) {
  return (
    <div className="singleJob">
      <label className="labelsJ" htmlFor="position">
        Position
        <input
          onChange={props.onChange}
          id={props.job.id}
          type="text"
          className="jobsInput"
          //   placeholder="Position"
          name="position"
          value={props.job.position}
        ></input>
      </label>
      <label className="labelsJ" htmlFor="company">
        Company
        <input
          onChange={props.onChange}
          id={props.job.id}
          type="text"
          className="jobsInput"
          //   placeholder="Company"
          name="company"
          value={props.job.company}
        ></input>
      </label>
      <label className="labelsJ" htmlFor="city">
        City
        <input
          onChange={props.onChange}
          id={props.job.id}
          type="text"
          className="jobsInput"
          //   placeholder="City"
          name="city"
          value={props.job.city}
        ></input>
      </label>
      <label className="labelsJ" htmlFor="from">
        From
        <input
          onChange={props.onChange}
          id={props.job.id}
          type="text"
          className="jobsInput"
          //   placeholder="From"
          name="from"
          value={props.job.from}
        ></input>
      </label>
      <label className="labelsJ" htmlFor="to">
        To
        <input
          onChange={props.onChange}
          id={props.job.id}
          type="text"
          className="jobsInput"
          //   placeholder="To"
          name="to"
          value={props.job.to}
        ></input>
      </label>
    </div>
  );
};

export default JobInput;
