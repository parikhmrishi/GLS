import React from "react";
import "./index.css";
import { motion } from "framer-motion";

export const Selection = () => {
  return (
    <>
      <div className="banner"></div>
      <div className="container">
        <div className="button-list">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="btn btn-lg btn-primary"
          >
            Procurement
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="btn btn-lg btn-primary"
          >
            During construction
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="btn btn-lg btn-primary"
          >
            After construction
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="btn btn-lg btn-primary"
          >
            In management
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default Selection;
