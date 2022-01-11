import React from "react";
import { useHistory } from "react-router-dom";
import "./index.css";

const StandardProcedures = () => {
  const history = useHistory();
  return (
    <>
      <div className="container align-center height-80vh mt-5">
        <div className="neu-card ">
          <div className="header">
            What are the standard procedures your company follows in Earth work
            excavation stage?
          </div>
          <hr />
          <div className="content">
            <ul type="none">
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push(
                    "/selection/during-construction/standard-procedures/excavation-booklet"
                  )
                }
              >
                Excavation Booklet
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default StandardProcedures;
