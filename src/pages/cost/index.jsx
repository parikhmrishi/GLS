import React from "react";
import { useHistory } from "react-router-dom";
import "./index.css";

const Cost = () => {
  const history = useHistory();
  return (
    <>
      <div className="container align-center height-80vh mt-5">
        <div className="neu-card ">
          <div className="header">Cost</div>
          <hr />
          <div className="content">
            <p>
              Reducing procurement costs can be a simple and instant way to
              increase profit margins without sacrificing the quality of
              products offered
            </p>
            <ul
              type="none"
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: 40,
              }}
            >
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push("/selection/procurement/basis/cost/types")
                }
              >
                5 types of procurement cost
              </li>
              <br />
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push("/selection/procurement/basis/cost/reduce")
                }
              >
                Ways to reduce procurement cost
              </li>
              <br />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cost;
