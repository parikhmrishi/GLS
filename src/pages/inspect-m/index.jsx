import React from "react";
import "./index.css";

const InspectM = () => {
  return (
    <>
      <div className="container align-center height-80vh mt-5">
        <div className="neu-card ">
          <div className="text">
            <ul className="list">
              <li>
                Verify that water service piping and fittings are of approved
                materials.
              </li>
              <li>
                If corrosion protection has been applied, confirm that materials
                used are compatible with piping and appropriate for the use.
              </li>
              <li>Check location of water service valves.</li>
              <li>
                Examine materials and methods used for joints and connections to
                be sure they are approved.
              </li>
              <li>Verify that installed water service has been tested.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default InspectM;
