import React from "react";
import { useHistory } from "react-router-dom";
import "./index.css";

const ProblemsEncountered = () => {
  const history = useHistory();
  return (
    <>
      <div className="container align-center height-80vh mt-5">
        <div className="neu-card ">
          <div className="header">
            Problems encountered in relation with implementation of Quality
            Management
          </div>
          <hr />
          <div className="content">
            <ul type="none">
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push(
                    "/selection/in-management/problems-encountered/system-procedures"
                  )
                }
              >
                The systems and procedures inhibiting the pursuit of quality
              </li>
              <br />
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push(
                    "/selection/in-management/problems-encountered/organizational-culture"
                  )
                }
              >
                The organizational culture preventing quality
              </li>
              <br />
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push(
                    "/selection/in-management/problems-encountered/organization-inhibiting"
                  )
                }
              >
                The design of the organization inhibiting the strive for quality
              </li>
              <br />
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push(
                    "/selection/in-management/problems-encountered/managerial-employee"
                  )
                }
              >
                The managerial and employee recognition of the importance of
                quality and attitudes towards it
              </li>
              <br />
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push(
                    "/selection/in-management/problems-encountered/cost-quality"
                  )
                }
              >
                Costs of quality resulting from not maintaining a certain
                quality level
              </li>
              <br />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProblemsEncountered;
