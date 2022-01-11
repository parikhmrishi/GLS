import React from "react";
import { useHistory } from "react-router-dom";
import "./index.css";

const QualityParameter = () => {
  const history = useHistory();
  return (
    <>
      <div className="container align-center height-80vh mt-5">
        <div className="neu-card ">
          <div className="header">
            What are the quality parameters your company follows for masonry
            work?
          </div>
          <hr />
          <div className="content">
            <ul type="none">
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push(
                    "/selection/during-construction/quality-parameter/masonry-booklet"
                  )
                }
              >
                Masonry Booklet
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default QualityParameter;
