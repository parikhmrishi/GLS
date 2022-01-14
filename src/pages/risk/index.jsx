import React from "react";
import { useHistory } from "react-router-dom";
import "./index.css";

const Risk = () => {
  const history = useHistory();
  return (
    <>
      <div className="container align-center height-80vh mt-5">
        <div className="neu-card ">
          <div className="header">Quality</div>
          <hr />
          <div className="content">
            <ul type="none">
              <li>
                Internal risk come from business itself because of operation,
                employees, project demands and procurement process
              </li>
              <li>External risk enters through supply chain</li>
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push("/selection/procurement/basis/risk/rtypes")
                }
              >
                Types of risk
              </li>
              <br />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Risk;
