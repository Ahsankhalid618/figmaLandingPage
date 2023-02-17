import React from "react";
import "../ComponentStyles/data.css";
function Data(props) {
  return (
    <div className={props.className}>
   
      <hr className="line" />
      <div className="info">
      <p className="name">Diane copper</p>
      <p className="email">diane.cooper@example.com</p>

      <span className="mark">Gender</span>
      <span className="text">Female</span>
      <hr className="sline" />

      <span className="mark1">BirthDay</span>
      <span className="text1">Feb 14, 1997</span>
      <hr className="sline1" />

      <span className="mark2">Phone number</span>
      <span className="text2">(239) 555 -0108</span>
      <hr className="sline2" />

      <span className="mark3">Member Status</span>
      <span className="text3">Active Member</span>

      </div>
      
      <div className="end">
        <span className="number">15</span>
        <span className="status">Past</span>
        <hr className="sline3" />

        <span className="number1">02</span>
        <span className="status1">Upcoming</span>

        <span className="last">VIEW ECG REPORT DOCUMENTS</span>
      </div>
    </div>
  );
}

export default Data;
