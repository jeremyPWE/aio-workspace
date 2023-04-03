import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

function Box({ children }: Props) {
  return <div className="p-[10px]">{children}</div>;
}

export default Box;
