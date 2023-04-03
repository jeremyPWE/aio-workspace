import React, { ReactNode } from "react";
import Navbar from "./navigation/Navbar";

type Props = {
  children?: ReactNode;
};

function Content({ children }: Props) {
  return (
    <div className="w-full">
      <Navbar />
      {children}
    </div>
  );
}

export default Content;
