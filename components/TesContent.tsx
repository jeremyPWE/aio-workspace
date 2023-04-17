import React from "react";
import Box from "./Box";

function TesContent() {
  return (
    <div className="relative">
      <div className="w-2/3 absolute left-0 top-0">
        <Box className="">home</Box>
      </div>
      <Box className="border w-1/3 absolute right-0 top-0 bottom-0 h-[90vh]">
        upcoming / urgent task
      </Box>
    </div>
  );
}

export default TesContent;
