import React from "react";
import "./index.css";

const Complaint = () => {
  return (
    <>
      <div className="container align-center height-80vh mt-5">
        <div className="neu-card ">
          <div className="text">
            <ul className="list">
              <li>
                The vendor should deliver products on or before the promised
                date.
              </li>
              <li>
                He must deliver the correct amount of products as mentioned in
                the contract.
              </li>
              <li>
                Packing of the products must be suitable, study, and undamaged.
                The vendor should provide proper documents along with the
                delivered products.
              </li>
              <li>
                {" "}
                The vendor must have the ability to deliver products in case of
                some emergency requirements.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Complaint;
