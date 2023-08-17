import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
function Sub({ item }) {
  return (
    <div className="bg-white w-full rounded-xl p-7 text-[2.5rem] flex items-start gap-5 justify-start text-start drop-shadow">
      <IoMdAddCircleOutline className="text-[4rem] text-light-blue " />
      <div>{item.description}</div>
    </div>
  );
}

export default Sub;
