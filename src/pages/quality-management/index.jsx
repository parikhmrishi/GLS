import React from "react";
import { useHistory } from "react-router-dom";
import "./index.css";

const QualityManagement = () => {
  const history = useHistory();
  return (
    <>
      <div className="container align-center height-80vh mt-5">
        <div className="neu-card ">
          <div className="header">Quality management tool to be adopted</div>
          <hr />
          <div className="content">
            <ul type="none">
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push(
                    "/selection/in-management/quality-management/tools-useful"
                  )
                }
              >
                Tools Useful in Both Quality Planning and Control Quality
              </li>
              <br />
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push(
                    "/selection/in-management/quality-management/quality-planning"
                  )
                }
              >
                Quality Planning Tools and Techniques
              </li>
              <br />
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push(
                    "/selection/in-management/quality-management/tools-use"
                  )
                }
              >
                Tools Useful in Both Quality Planning and Control Quality
              </li>
              <br />
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push(
                    "/selection/in-management/quality-management/tools-technique"
                  )
                }
              >
                Tools and Techniques of the Perform Quality Assurance Process
              </li>
              <br />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default QualityManagement;
