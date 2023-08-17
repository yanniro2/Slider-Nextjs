import React from "react";

function scrollbar({ level }) {
  return (
    <>
      <div className="fixed z-[1000] bg-white rounded-2xl p-2 drop-shadow shadow bottom-[2rem] left-[2rem] right-[2rem] flex h-2"></div>

      {/* Scroll Change here */}
      <div
        className={`fixed z-[1500] bg-blue rounded-2xl p-2 drop-shadow shadow bottom-[2rem] left-[2rem] right-[2rem] flex h-2 ${level}`}
      ></div>
    </>
  );
}

export default scrollbar;
