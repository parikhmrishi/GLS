import React from "react";
import { useHistory } from "react-router-dom";
import "./index.css";

const MasonryBooklet = () => {
  const history = useHistory();
  return (
    <>
      <div className="container align-center height-80vh mt-5">
        <div className="neu-card ">
          <div className="header">Masonry Booklet</div>
          <hr />
          <div className="content">
            <ul type="none">
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push(
                    "/selection/during-construction/quality-parameter/masonry-booklet/pre"
                  )
                }
              >
                Pre Block Masonary Checks
              </li>
              <br />
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push(
                    "/selection/during-construction/quality-parameter/masonry-booklet/during"
                  )
                }
              >
                During Block Masonary Checks
              </li>
              <br />
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push(
                    "/selection/during-construction/quality-parameter/masonry-booklet/post"
                  )
                }
              >
                Post Block Masonary Checks
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MasonryBooklet;
