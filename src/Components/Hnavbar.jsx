import React from "react";
import "../ComponentStyles/Hnavbar.css";
import Data from "../Components/Data"

function Hnavbar() {
  const DataList = () => {
    const dataList = [];
    for (let i = 0; i < 4; i++) {
      dataList.push(<Data key={i} />);
    }

    return (
      <div className="data-list">
        {dataList}
      </div>
    );
  }
  
  return (
    <>
      <div className="detail">
        <input
          id="inputBar"
          type="text"
          placeholder="Find by Name or phone number"
        />
        <div className="detail1">
          <span className="label">Gender</span>
          <span className="gender">Female</span>
          <img className="radio" src="./icons/radio.png" alt="radioButton" />

          <span className="label1">Member Status</span>
          <span className="member">Active Member</span>
          <img className="radio1" src="./icons/radio.png" alt="radioButton" />
        </div>
      </div>
      {DataList()}
      
    </>
  );
}

export default Hnavbar;
