import React from "react";
import "../ComponentStyles/navbar.css";
function Navbar() {
  return (
    <>
      <div className="nav">
        <div className="vector">
          <img className="wavy" src="./icons/vector.png" alt="vector" />
        </div>
        <div className="navlist">
          <div className="list">
            <img className="imag" src="./icons/+.png" alt="plus" />
            New
          </div>
          <div className="list">
            <img className="imag" src="./icons/p.png" alt="patient" />
            Patient
          </div>
          <div className="list">
            <img className="imag" src="./icons/f.png" alt="folder" />
            Folder
          </div>
          <div className="list">
            <img className="imag" src="./icons/u.png" alt="upload" />
            Upload
          </div>
          <div className="list">
            <img className="imag" src="./icons/r.png" alt="report" />
            Report
          </div>
          <div className="list">
            <img className="imag" src="./icons/s.png" alt="setting" />
            Setting
          </div>
          <div className="list">
            <img className="imag" src="./icons/l.png" alt="logout" />
            logout
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
