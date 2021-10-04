import React from "react";
import "./index.css";

const InManagement = () => {
  return (
    <>
      <div className="container align-center height-80vh mt-5">
        <div className="neu-card ">
          <div className="header">In management</div>
          <hr />

          <div className="content">
            <ul type="none">
              <li className="btn btn-primary">Type of Quality System</li>
              <br />
              <li className="btn btn-primary">
                Bridge between time and quality
              </li>
              <br />
              <li className="btn btn-primary">Quality management tool</li>
              <br />
              <li className="btn btn-primary">
                Problem with implementing Quality Management
              </li>
              <br />
              <li className="btn btn-primary">Importance of Commitment</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default InManagement;
