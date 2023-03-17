import * as React from "react";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";

const sidebar = {
  open: {
    clipPath: "circle(4200px at 40px 40px)",
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  },
  closed: {
    clipPath: "circle(0px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const Example = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  console.log(isOpen);
  return (
    <motion.nav
      className="absolute top-0 left-0 bottom-0"
      initial={false}
      animate={isOpen ? "open" : "closed"}
    >
      <motion.div
        className="absolute top-0 left-0 bottom-0 w-[100vw] bg-blue-300"
        variants={sidebar}
      />
      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};
