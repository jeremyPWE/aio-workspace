import React, { MouseEventHandler, useState } from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";

interface Link {
  name: string;
  to: string;
  id: number;
}

const links: Link[] = [
  { name: "Home", to: "#", id: 1 },
  { name: "About", to: "#", id: 2 },
  { name: "Blog", to: "#", id: 3 },
  { name: "Contact", to: "#", id: 4 },
];

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

export default function App(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const cycleOpen: MouseEventHandler<HTMLButtonElement> = () =>
    setIsOpen(!isOpen);

  return (
    <main className="flex">
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{
              width: 0,
              height: 0,
            }}
            animate={{
              width: 300,
              height: "100vh",
            }}
            exit={{
              width: 0,
              height: 0,
              transition: { delay: 0.7, duration: 0.3 },
            }}
            className="bg-[#c4a8ff]"
          >
            <motion.div
              className="mx-[4.5rem] my-[1.4rem]"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              {links.map(({ name, to, id }) => (
                <motion.a
                  key={id}
                  href={to}
                  whileHover={{ scale: 1.1 }}
                  variants={itemVariants}
                  className="text-[#f9fafb] text-[1.75rem] block m-[20px]"
                >
                  {name}
                </motion.a>
              ))}
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
      <div className="fixed">
        <button
          className="cursor-pointer m-[1.25rem] border-0 px-[0.5rem] py-[1rem] bg-[#f9fafb]"
          onClick={cycleOpen}
        >
          {isOpen ? "Close" : "Open"}
        </button>
      </div>
    </main>
  );
}
