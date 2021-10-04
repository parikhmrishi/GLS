import React from "react";
import { useHistory } from "react-router";
import "./index.css";
import { motion } from "framer-motion";

export const Selection = () => {
  const history = useHistory();
  return (
    <>
      <div className="banner"></div>
      {/* <div className="container"> */}
      <div className="button-list">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="btn btn-lg btn-primary"
          onClick={() => history.push("/selection/procurement")}
        >
          Procurement
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="btn btn-lg btn-primary"
          onClick={() => history.push("/selection/during-construction")}
        >
          During construction
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="btn btn-lg btn-primary"
          onClick={() => history.push("/selection/after-construction")}
        >
          After construction
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="btn btn-lg btn-primary"
          onClick={() => history.push("/selection/in-management")}
        >
          In management
        </motion.button>
      </div>
      {/* </div> */}
    </>
  );
};

export default Selection;
