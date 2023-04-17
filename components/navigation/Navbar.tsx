import React from "react";

function Navbar() {
  return (
    <nav className="border py-[15px] px-[10px]">
      <div className="flex justify-between">
        <p>Navbar</p>
        <ul className="flex gap-[15px]">
          <li>Calendar</li>
          <li>Agenda</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
