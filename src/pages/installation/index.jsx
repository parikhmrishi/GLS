import React from "react";
import { useHistory } from "react-router-dom";
import "./index.css";

const Installation = () => {
  const history = useHistory();
  return (
    <>
      <div className="container align-center height-80vh mt-5">
        <div className="neu-card ">
          <div className="header">
            Installation of sanitary and water supply services.
          </div>
          <hr />
          <div className="content">
            <ul type="none">
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push(
                    "/selection/during-construction/quality-standards/installation/inspect-m"
                  )
                }
              >
                Inspect Material
              </li>
              <br />
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push(
                    "/selection/during-construction/quality-standards/installation/inspect-i"
                  )
                }
              >
                Inspect Installation
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Installation;
