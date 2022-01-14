import React from "react";
import { useHistory } from "react-router-dom";
import "./index.css";

const Factors = () => {
  const history = useHistory();
  return (
    <>
      <div className="container align-center height-80vh mt-5">
        <div className="neu-card ">
          <div className="header">
            Factors to be considered for environmental impact
          </div>
          <hr />
          <div className="content">
            <ul type="none">
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push("/selection/procurement/factors/preservation")
                }
              >
                Preservation of ecology
              </li>
              <br />
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push("/selection/procurement/factors/pollution")
                }
              >
                Air, water or ground pollution or contamination
              </li>
              <br />
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push("/selection/procurement/factors/consumption")
                }
              >
                Energy consumption and carbon emissions
              </li>
              <br />
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push("/selection/procurement/factors/traffic")
                }
              >
                Traffic and transport
              </li>
              <br />
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push("/selection/procurement/factors/sustainable")
                }
              >
                Use of sustainable and non-hazardous material
              </li>
              <br />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Factors;
