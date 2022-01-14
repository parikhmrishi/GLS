import React from "react";
import { useHistory } from "react-router-dom";
import "./index.css";

const Reduce = () => {
  const history = useHistory();
  return (
    <>
      <div className="container align-center height-80vh mt-5">
        <div className="neu-card ">
          <div className="header">Ways to reduce procurement cost</div>
          <hr />
          <div className="content">
            <ul type="none">
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push("/selection/procurement/basis/cost/reduce/avoid")
                }
              >
                Reduce or Avoid Tail Spending
              </li>
              <br />
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push(
                    "/selection/procurement/basis/cost/reduce/leverage"
                  )
                }
              >
                Leverage Technology
              </li>
              <br />
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push(
                    "/selection/procurement/basis/cost/reduce/oversee"
                  )
                }
              >
                Oversee Risk Management
              </li>
              <br />
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push(
                    "/selection/procurement/basis/cost/reduce/review"
                  )
                }
              >
                Review Inventory Levels
              </li>
              <br />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reduce;
