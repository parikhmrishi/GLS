import React from "react";
import { useHistory } from "react-router-dom";
import "./index.css";

const BQuality = () => {
  const history = useHistory();
  return (
    <>
      <div className="container align-center height-80vh mt-5">
        <div className="neu-card ">
          <div className="header">Quality</div>
          <hr />
          <div className="content">
            <p>
              Some guidance has been given by procurement department to
              suppliers for quality of products
            </p>
            <ul type="none">
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push("/selection/procurement/basis/bquality/include")
                }
              >
                Include a variety of information about the item to be procured
              </li>
              <br />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default BQuality;
