import React from "react";
import { useHistory } from "react-router-dom";
import "./index.css";

const DuringConstruction = () => {
  const history = useHistory();
  return (
    <>
      <div className="container align-center height-80vh mt-5">
        <div className="neu-card ">
          <div className="header">During construction</div>
          <hr />
          <div className="content">
            <ul type="none">
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push(
                    "/selection/during-construction/quality-parameter"
                  )
                }
              >
                What are the quality parameters your company follows for masonry
                work?
              </li>
              <br />
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push(
                    "/selection/during-construction/standard-procedures"
                  )
                }
              >
                What are the standard procedures your company follows in Earth
                work excavation stage?
              </li>
              <br />
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push("/selection/during-construction/rcc-state")
                }
              >
                What are the parameters your company follows for RCC stage?
              </li>
              <br />
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push(
                    "/selection/during-construction/quality-standards"
                  )
                }
              >
                What quality standards does your organization adhere to when
                installing sanitary and water supply services?
              </li>
              <br />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default DuringConstruction;
