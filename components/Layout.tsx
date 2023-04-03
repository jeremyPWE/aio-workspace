import React, { ReactNode } from "react";
import Sidebar from "./navigation/Sidebar";
import Content from "./Content";

type Props = {
  children?: ReactNode;
};

function Layout({ children }: Props) {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <Content>{children}</Content>
      </div>
    </>
  );
}

export default Layout;
