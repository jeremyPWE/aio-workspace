import React from "react";

function Sidebar() {
  return (
    <div className="border flex flex-col min-h-screen w-[300px] p-[15px]">
      <div className="flex justify-between">
        <h1>AIO Workspace</h1>
        <button>x</button>
      </div>
      <ul className="pt-[30px]">
        <li>Home</li>
      </ul>
    </div>
  );
}

export default Sidebar;
