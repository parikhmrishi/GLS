import React from "react";
import { useHistory } from "react-router-dom";
import "./index.css";

const AfterConstruction = () => {
  const history = useHistory();
  return (
    <>
      <div className="container align-center height-80vh mt-5">
        <div className="neu-card ">
          <div className="header">After construction</div>
          <hr />
          <div className="content">
            <ul type="none">
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push("/selection/after-construction/ponding")
                }
              >
                Ponding of Water Taking Place in a Slab
              </li>
              <br />
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push("/selection/after-construction/cracks")
                }
              >
                Cracks Appearing in Concrete Structural Members in a Structure
              </li>
              <br />
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push("/selection/after-construction/peeling")
                }
              >
                Peeling Off of Plaster, Crumbling of Concrete of Structural
                Members
              </li>
              <br />
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push("/selection/after-construction/efflorescence")
                }
              >
                Efflorescence in Walls, Peeling of Plaster, Corrosion of Cement
                Plaster of the Waits
              </li>
              <br />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AfterConstruction;
