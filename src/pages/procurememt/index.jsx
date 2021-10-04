import React from "react";
import "./index.css";

const Procurement = () => {
  return (
    <>
      <div className="container align-center height-80vh mt-5">
        <div className="neu-card ">
          <div className="header">Procurement</div>
          <hr />
          <div className="content">
            <ul type="none">
              <li className="btn btn-primary">
                Type of payment while procurement
              </li>
              <br />
              <li className="btn btn-primary">Quality checks</li>
              <br />
              <li className="btn btn-primary">
                Performance evaluation of vendor
              </li>
              <br />
              <li className="btn btn-primary">
                Preference while procurement (Speed, Cost, Quality)
              </li>
              <br />
              <li className="btn btn-primary">Innovation barriers</li>
              <br />
              <li className="btn btn-primary">Environmental impact</li>
              <br />
              <li className="btn btn-primary">Supplier selection criteria</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Procurement;
