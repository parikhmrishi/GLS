import React from "react";
import { useHistory } from "react-router-dom";
import "./index.css";

const QualityStandards = () => {
  const history = useHistory();
  return (
    <>
      <div className="container align-center height-80vh mt-5">
        <div className="neu-card ">
          <div className="header">
            What quality standards does your organization adhere to when
            installing sanitary and water supply services?
          </div>
          <hr />
          <div className="content">
            <ul type="none">
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push(
                    "/selection/during-construction/quality-standards/installation"
                  )
                }
              >
                Installation of sanitary and water supply services.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default QualityStandards;
