import React, { useState } from "react";
import { motion } from "framer-motion";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const variants = {
    closed: { rotate: 0 },
    open: { rotate: 45 },
  };

  return (
    <>
      <div className="fixed top-0 right-0 m-4 z-50">
        <button onClick={handleClick}>
          <div className="w-6 h-6">
            <motion.span
              variants={variants}
              animate={isOpen ? "open" : "closed"}
              transition={{ duration: 0.3 }}
              className="block bg-black rounded-sm w-full mb-1"
            />
            <motion.span
              variants={variants}
              animate={isOpen ? "open" : "closed"}
              transition={{ duration: 0.3 }}
              className="block bg-black rounded-sm w-full mb-1"
            />
            <motion.span
              variants={variants}
              animate={isOpen ? "open" : "closed"}
              transition={{ duration: 0.3 }}
              className="block bg-black rounded-sm w-full mb-1"
            />
          </div>
        </button>
      </div>
      <motion.div
        initial={{ x: "100%" }}
        animate={isOpen ? { x: 0 } : { x: "100%" }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 right-0 w-screen h-screen bg-gray-700 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {/* Insert menu items here */}
      </motion.div>
    </>
  );
};

export default HamburgerMenu;
