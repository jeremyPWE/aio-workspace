import * as React from "react";
import { motion } from "framer-motion";

interface MenuItemProps {
  i: number;
}

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = [
  "border-[#FF008C]",
  "border-[#D309E1]",
  "border-[#9C1AFF]",
  "border-[#7700FF]",
  "border-[#7700FF]",
];

export const MenuItem: React.FC<MenuItemProps> = ({ i }) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="flex list-none mb-[20px] items-center cursor-pointer"
    >
      <div
        className={`w-[40px] h-[40px] rounded-full grow-[40px] shrink-0 mr-[20px] border-[2px] ${colors[i]}`}
      />
      <div
        className={`rounded-[5px] w-[200px] h-[20px] border-[2px] ${colors[i]}`}
      />
    </motion.li>
  );
};
