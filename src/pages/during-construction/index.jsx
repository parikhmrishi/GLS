import React from "react";
import "./index.css";

const DuringConstruction = () => {
  return (
    <>
      <div className="container align-center height-80vh mt-5">
        <div className="neu-card ">
          <div className="header">During construction</div>
          <hr />
          <div className="content">
            <ul type="none">
              <li className="btn btn-primary">Earthwork</li>
              <br />
              <li className="btn btn-primary">Masonary</li>
              <br />
              <li className="btn btn-primary">Rcc work</li>
              <br />
              <li className="btn btn-primary">Sanitary and water supply</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default DuringConstruction;
