import React from "react";
import { useHistory } from "react-router-dom";
import "./index.css";

const InManagement = () => {
  const history = useHistory();
  return (
    <>
      <div className="container align-center height-80vh mt-5">
        <div className="neu-card ">
          <div className="header">In management</div>
          <hr />
          <div className="content">
            <ul type="none">
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push("/selection/in-management/quality-system")
                }
              >
                Quality system for the organizations to follow
              </li>
              <br />
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push("/selection/in-management/quality-management")
                }
              >
                Quality management tool to be adopted
              </li>
              <br />
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push("/selection/in-management/problems-encountered")
                }
              >
                Problems encountered in relation with implementation of Quality
                Management
              </li>
              <br />
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push("/selection/in-management/perceived-commitment")
                }
              >
                Perceived commitment of your organization towards Quality
                Management?
              </li>
              <br />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default InManagement;
