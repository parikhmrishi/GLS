import React from "react";
import { useHistory } from "react-router-dom";
import "./index.css";

const RTypes = () => {
  const history = useHistory();
  return (
    <>
      <div className="container align-center height-80vh mt-5">
        <div className="neu-card ">
          <div className="header">Types of risk</div>
          <hr />
          <div className="content">
            <ul type="none">
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push(
                    "/selection/procurement/basis/risk/rtypes/rprice"
                  )
                }
              >
                Price instability
              </li>
              <br />
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push(
                    "/selection/procurement/basis/risk/rtypes/rsupply"
                  )
                }
              >
                Supply chain disruptions
              </li>
              <br />
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push(
                    "/selection/procurement/basis/risk/rtypes/rcomplex"
                  )
                }
              >
                Complex projects
              </li>
              <br />
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push(
                    "/selection/procurement/basis/risk/rtypes/rfraud"
                  )
                }
              >
                Fraud
              </li>
              <br />
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push("/selection/procurement/basis/risk/rtypes/rpoor")
                }
              >
                Poor supplier performance
              </li>
              <br />
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push(
                    "/selection/procurement/basis/risk/rtypes/roverspending"
                  )
                }
              >
                Overspending
              </li>
              <br />
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push(
                    "/selection/procurement/basis/risk/rtypes/rinaccurate"
                  )
                }
              >
                Inaccurate supply chain forecast
              </li>
              <br />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default RTypes;
