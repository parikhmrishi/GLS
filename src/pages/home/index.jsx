import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

export const Home = () => {
  return (
    <>
      <div className="background"></div>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Implementation of GLS</h5>
            <p className="card-text">GLS stand for Green ,Lean, Six Sigma</p>
            <Link to="/selection" className="btn btn-primary">
              Lets get started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
