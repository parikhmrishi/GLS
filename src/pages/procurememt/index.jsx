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
              <li className="btn btn-primary">Type of payment</li>
              <br />
              <li className="btn btn-primary">Quality</li>
              <br />
              <li className="btn btn-primary">Performance evaluation</li>
              <br />
              <li className="btn btn-primary">Possible choices</li>
              <br />
              <li className="btn btn-primary">Innovation</li>
              <br />
              <li className="btn btn-primary">Environmental impact</li>
              <br />
              <li className="btn btn-primary">
                Supplier/Sub-contractor selection
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Procurement;
