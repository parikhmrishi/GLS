import React from "react";
import { useHistory } from "react-router-dom";
import "./index.css";

const Procurement = () => {
  const history = useHistory();
  return (
    <>
      <div className="container align-center height-80vh mt-5">
        <div className="neu-card ">
          <div className="header">Procurement</div>
          <hr />
          <div className="content">
            <ul type="none">
              <li
                className="btn btn-secondary"
                onClick={() => history.push("/selection/procurement/factors")}
              >
                Factors to be considered for environmental impact
              </li>
              <br />
              <li
                className="btn btn-secondary"
                onClick={() => history.push("/selection/procurement/barriers")}
              >
                Procurement Barriers come in way of innovation
              </li>
              <br />
              <li
                className="btn btn-secondary"
                onClick={() => history.push("/selection/procurement/payment")}
              >
                Payment method preferred while procurement of materials
              </li>
              <br />
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push("/selection/procurement/parameters")
                }
              >
                Parameters for evaluation of performance of vendors
              </li>
              <br />
              <li
                className="btn btn-secondary"
                onClick={() => history.push("/selection/procurement/basis")}
              >
                Basis of procurement which organization should follow
              </li>
              <br />
              <li
                className="btn btn-secondary"
                onClick={() => history.push("/selection/procurement/checks")}
              >
                Quality checks generally followed during procurement
              </li>
              <br />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Procurement;
