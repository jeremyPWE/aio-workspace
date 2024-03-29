import * as React from "react";
import { motion } from "framer-motion";

type MenuToggleProps = {
  toggle: () => void;
};

const Path = (props: any) => (
  <motion.path
    strokeWidth="3"
    stroke="black"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ toggle }: MenuToggleProps) => (
  <button
    onClick={toggle}
    className="outline-none border-0 cursor-pointer absolute top-[18px] right-[15px] w-[50px] h-[50px] rounded-full flex items-center justify-center"
  >
    <svg width="24" height="24" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);
