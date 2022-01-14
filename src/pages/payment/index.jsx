import React from "react";
import { useHistory } from "react-router-dom";
import paymentImg from "../../static/procurement_payment.png";
import "./index.css";

const Payment = () => {
  const history = useHistory();
  return (
    <>
      <div className="container align-center height-80vh mt-5">
        <div className="neu-card ">
          <div className="header">
            Payment method preferred while procurement of materials
          </div>
          <hr />
          <div className="content">
            <img src={paymentImg} alt="procurement payment" />
            <br />
            <br />
            <b>
              NOTE: The most secure method for the exporter is the least secure
              method for the importer and vice versa.
            </b>
            <ul
              type="none"
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: 40,
              }}
            >
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push("/selection/procurement/payment/letter")
                }
              >
                Letter of credit
              </li>
              <br />
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push("/selection/procurement/payment/open")
                }
              >
                Open account
              </li>
              <br />
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push("/selection/procurement/payment/consignment")
                }
              >
                Consignment
              </li>
              <br />
              <li
                className="btn btn-secondary"
                onClick={() =>
                  history.push("/selection/procurement/payment/cash")
                }
              >
                Cash in advance
              </li>
              <br />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
