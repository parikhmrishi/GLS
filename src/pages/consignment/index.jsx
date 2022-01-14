import React from "react";
import "./index.css";

const Consignment = () => {
  return (
    <>
      <div className="container align-center height-80vh mt-5">
        <div className="neu-card ">
          <div className="text">
            <ul className="list">
              <li>
                Payment is sent to the exporter only after the goods have been
                sold by the distributor to the end customer.
              </li>
              <li>
                Payment to the exporter is required only for those items sold.
                Goods not sold after an agreed upon period of time may be
                returned to the exporter at cost.
              </li>
              <li>
                Based on a contractual arrangement, distributor manages and
                sells the goods for the exporter
              </li>
              <li>
                Sale of heavy machinery and equipment beneficial for this type
                because it needs floor models and inventory
              </li>
              <li>Risky for the exporter</li>
              <li>
                Advantage for exporters are they don’t have to pay direct costs
                of storing and managing inventory
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Consignment;
