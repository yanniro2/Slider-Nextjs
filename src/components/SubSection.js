import React from "react";

function SubSection({ item }) {
  return (
    <div className="bg-white flex flex-col text-[3rem] items-center p-10 rounded-xl relative">
      <div className=" bg-light-blue text-blue rounded-full p-5 text-[8rem] absolute top-0 -translate-y-3/4 flex items-center justify-center">
        {item.name}
      </div>

      <h3>{item.description}</h3>
    </div>
  );
}

export default SubSection;
