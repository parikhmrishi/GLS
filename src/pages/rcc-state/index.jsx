import React from "react";
import { useHistory } from "react-router-dom";
import "./index.css";

const RccState = () => {
  const history = useHistory();
  return (
    <>
      <div className="container align-center height-80vh mt-5">
        <div className="neu-card ">
          <div className="header">
            What are the parameters your company follows for RCC stage?
          </div>
          <hr />
          <div className="content">
            <ul type="none">
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push(
                    "/selection/during-construction/rcc-state/rcc-booklet"
                  )
                }
              >
                RCC Booklet
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default RccState;
