import React from "react";
import "./index.css";
import qualitySystem from "../../static/in-management-quality-system.jpg";

const QualitySystem = () => {
  return (
    <>
      <div className="container align-center height-80vh mt-5">
        <div className="neu-card ">
          <div className="content">
            <img src={qualitySystem} alt="in management quality system" />
            <br />
            The following systems are to be adopted based on the requirement by
            the organization.
          </div>
        </div>
      </div>
    </>
  );
};

export default QualitySystem;
