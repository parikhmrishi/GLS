import React from "react";
import "./index.css";

const InspectI = () => {
  return (
    <>
      <div className="container align-center height-80vh mt-5">
        <div className="neu-card ">
          <div className="text">
            <ul className="list">
              <li>
                Verify that the water service line can be inspected and has NOT
                been put into use.
              </li>
              <li>
                If water service line and building sewer line are installed in
                the same trench, determine distance between pipes.
              </li>
              <li>
                Verify that NO possibility exists for cross connection between
                potable water supply and a source of contamination.
              </li>
              <li>
                Examine depth of water service line to be sure it has been
                installed below the frost depth.
              </li>
              <li>
                Confirm that the water service line does NOT extend below a 45-
                degree (0.79 tad) angle from the bearing plane of footings.
              </li>
              <li>Check to be sure bed is solid along its entire length.</li>
              <li>
                Verify that water service line is supported so sagging and
                misalignment cannot occur.
              </li>
              <li>
                Examine bends in copper (ASTM 888) tubing to be sure they are at
                least 4 times diameter.
              </li>
              <li>
                Confirm that size of water service can handle current and future
                needs.
              </li>
              <li>
                Verify that water service is protected where it passes through
                foundations and/or footings.
              </li>
              <li>
                Examine backfill lobe sure that it is free of rocks, debris
                (broken concrete, metal objects) which could damage pipes. Do
                not allow frozen chunks robe used, as there is no way to
                determine if rocks or debris are trapped inside. The most stable
                backfill material is granular soil, sand, etc.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default InspectI;
