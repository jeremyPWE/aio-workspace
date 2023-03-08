import React, { ReactNode } from "react";
import Navbar from "./navigation/Navbar";
import Sidebar from "./navigation/Sidebar";

type Props = {
  children?: ReactNode;
};

function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        {children}
      </div>
    </>
  );
}

export default Layout;
