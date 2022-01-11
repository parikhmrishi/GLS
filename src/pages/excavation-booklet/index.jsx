import React from "react";
import { useHistory } from "react-router-dom";
import "./index.css";

const ExcavationBooklet = () => {
  const history = useHistory();
  return (
    <>
      <div className="container align-center height-80vh mt-5">
        <div className="neu-card ">
          <div className="header">Excavation Booklet</div>
          <hr />
          <div className="content">
            <ul type="none">
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push(
                    "/selection/during-construction/standard-procedures/excavation-booklet/general"
                  )
                }
              >
                General Inspection of Jobsite
              </li>
              <br />
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push(
                    "/selection/during-construction/standard-procedures/excavation-booklet/utilities"
                  )
                }
              >
                Utilities
              </li>
              <br />
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push(
                    "/selection/during-construction/standard-procedures/excavation-booklet/access"
                  )
                }
              >
                Means of Access and Egress
              </li>
              <br />
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push(
                    "/selection/during-construction/standard-procedures/excavation-booklet/wet"
                  )
                }
              >
                Wet Conditions
              </li>
              <br />
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push(
                    "/selection/during-construction/standard-procedures/excavation-booklet/hazardous"
                  )
                }
              >
                Hazardous Atmosphere
              </li>
              <br />
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push(
                    "/selection/during-construction/standard-procedures/excavation-booklet/support"
                  )
                }
              >
                Support Systems
              </li>
              <br />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExcavationBooklet;
