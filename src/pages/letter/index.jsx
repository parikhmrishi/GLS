import React from "react";
import "./index.css";

const Letter = () => {
  return (
    <>
      <div className="container align-center height-80vh mt-5">
        <div className="neu-card ">
          <div className="text">
            <ul className="list">
              <li>
                A bank letter confirming that a buyer's payment to a seller will
                arrive on schedule and in the exact amount. In the event that
                the buyer is unable to make a payment on the purchase, the bank
                will be required to cover the full or remaining amount of the
                purchase.
              </li>
              <li>Banks collect a fee for issuing a letter of credit.</li>
              <li>Used in international transactions also</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Letter;
