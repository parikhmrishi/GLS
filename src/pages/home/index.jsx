import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

export const Home = () => {
  return (
    <>
      <div className="background"></div>
      <div className="top-banner b-black-1">
        <div className="container">
          <h2 className="b-black-2">Implementation of GLS</h2>
        </div>
        <div className="description">
          <div>
            <h4>
              Benefits of integrating Green, Lean and Six Sigma(GLS)
              Construction Practices.
            </h4>
            <ul type="none">
              <li>GLSCP increases environmental and financial performances.</li>
              <li>Increases competitive advantages by identifying waste</li>
              <li>
                GLSC includes concepts - proposed to improve the construction
                process, productivity, efficiency, quality, profitability,
                consistency, cycle time, sustainability and competitiveness
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="next-button">
        <Link to="/selection" className="btn btn-primary btn-lg">
          Lets get started
        </Link>
      </div>
    </>
  );
};

export default Home;
