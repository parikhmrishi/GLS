import React from "react";
import { useHistory } from "react-router-dom";
import "./index.css";

const Parameters = () => {
  const history = useHistory();
  return (
    <>
      <div className="container align-center height-80vh mt-5">
        <div className="neu-card ">
          <div className="header">
            Parameters for evaluation of performance of vendors
          </div>
          <hr />
          <div className="content">
            <p>
              Purpose: -
              <ul type="none">
                <li>Communication of clear expectations</li>
                <li>Improvement in supplier quality</li>
                <li>Elimination of unnecessary costs</li>
              </ul>
            </p>
            <ul
              type="none"
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: 40,
              }}
            >
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push("/selection/procurement/parameters/quality")
                }
              >
                Quality of goods
              </li>
              <br />
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push("/selection/procurement/parameters/price")
                }
              >
                Cost/Price
              </li>
              <br />
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push("/selection/procurement/parameters/complaint")
                }
              >
                Complaint history
              </li>
              <br />
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push("/selection/procurement/parameters/guarantees")
                }
              >
                Warranties/guarantees
              </li>
              <br />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Parameters;
