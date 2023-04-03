import React, { ReactNode } from "react";
import Navbar from "./navigation/Navbar";
import Box from "./Box";

type Props = {
  children?: ReactNode;
};

function Content({ children }: Props) {
  return (
    <div className="w-full ml-[-1px]">
      <Navbar />
      <Box>{children}</Box>
    </div>
  );
}

export default Content;
