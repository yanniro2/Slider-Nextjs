import React from "react";

function scrollbar() {
  return (
    <div>
      <div className="fixed z-[1000] bg-gray-600 rounded-2xl p-2 drop-shadow shadow bottom-[2rem] left-[2rem] right-[2rem] flex h-2"></div>

      {/* Scroll Change here */}
      <div className="fixed z-[1500] bg-blue-200 rounded-2xl p-2 drop-shadow shadow bottom-[2rem] left-[2rem] right-[2rem] flex h-2 w-1/4"></div>
    </div>
  );
}

export default scrollbar;
