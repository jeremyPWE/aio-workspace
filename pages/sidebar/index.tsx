import React from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { MenuToggle } from "@/components/navigation/MenuToggle";

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
  const [isOpen, setIsOpen] = useCycle(false, true);

  return (
    <main>
      <motion.div initial={false} animate={isOpen ? "open" : "closed"}>
        <MenuToggle toggle={() => setIsOpen()} />
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{
              height: 0,
            }}
            animate={{
              height: "100vh",
              transition: { duration: 0.3 },
            }}
            exit={{
              height: 0,
              transition: { delay: 0.7, duration: 0.3 },
            }}
            className="bg-[#c4a8ff]"
          >
            <motion.div
              className="flex flex-col items-center justify-center h-full"
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
                  className="text-[#f9fafb] text-[1.75rem] px-[40px] py-[10px] m-[10px] border border-black border-opacity-10"
                >
                  {name}
                </motion.a>
              ))}
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </main>
  );
}
