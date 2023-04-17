import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  className?: string;
};

function Box({ children, className }: Props) {
  return <div className={`p-[10px] ${className}`}>{children}</div>;
}

export default Box;
