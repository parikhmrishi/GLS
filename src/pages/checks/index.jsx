import React from "react";
import { useHistory } from "react-router-dom";
import "./index.css";

const Checks = () => {
  const history = useHistory();
  return (
    <>
      <div className="container align-center height-80vh mt-5">
        <div className="neu-card ">
          <div className="header">
            Quality checks generally followed during procurement
          </div>
          <hr />
          <div className="content">
            <ul type="none">
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push("/selection/procurement/checks/testing")
                }
              >
                Testing and inspection at receiving end
              </li>
              <br />
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push("/selection/procurement/checks/insisting")
                }
              >
                Insisting proper certification
              </li>
              <br />
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push("/selection/procurement/checks/frequent")
                }
              >
                Frequent testing and inspection at supplier production
                facilities
              </li>
              <br />
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push("/selection/procurement/checks/revising")
                }
              >
                Revising and conveying quality specification to avoid
                stockpiling
              </li>
              <br />
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push("/selection/procurement/checks/proper")
                }
              >
                Proper packaging and transportation
              </li>
              <br />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checks;
