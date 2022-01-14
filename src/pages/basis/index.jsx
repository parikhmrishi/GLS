import React from "react";
import { useHistory } from "react-router-dom";
import "./index.css";

const Basis = () => {
  const history = useHistory();
  return (
    <>
      <div className="container align-center height-80vh mt-5">
        <div className="neu-card ">
          <div className="header">
            Basis of procurement which organization should follow
          </div>
          <hr />
          <div className="content">
            <ul type="none">
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push("/selection/procurement/basis/speed")
                }
              >
                Speed
              </li>
              <br />
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push("/selection/procurement/basis/cost")
                }
              >
                Cost
              </li>
              <br />
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push("/selection/procurement/basis/bquality")
                }
              >
                Quality
              </li>
              <br />
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push("/selection/procurement/basis/risk")
                }
              >
                Risk and opportunities
              </li>
              <br />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Basis;
