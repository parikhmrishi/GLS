import React from "react";
import { useHistory } from "react-router-dom";
import "./index.css";

const RCCBooklet = () => {
  const history = useHistory();
  return (
    <>
      <div className="container align-center height-80vh mt-5">
        <div className="neu-card ">
          <div className="header">RCC Booklet</div>
          <hr />
          <div className="content">
            <ul type="none">
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push(
                    "/selection/during-construction/rcc-state/rcc-booklet/formwork"
                  )
                }
              >
                Formwork
              </li>
              <br />
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push(
                    "/selection/during-construction/rcc-state/rcc-booklet/reinforcement"
                  )
                }
              >
                Reinforcement
              </li>
              <br />
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push(
                    "/selection/during-construction/rcc-state/rcc-booklet/pre-c"
                  )
                }
              >
                Pre-Concreting checking.
              </li>
              <br />
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push(
                    "/selection/during-construction/rcc-state/rcc-booklet/during-c"
                  )
                }
              >
                Checking during concreting
              </li>
              <br />
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push(
                    "/selection/during-construction/rcc-state/rcc-booklet/post-c"
                  )
                }
              >
                Post-concreting checking
              </li>
              <br />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default RCCBooklet;
