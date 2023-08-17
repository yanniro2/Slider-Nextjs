import Navbar from "@/components/Navbar";
import React from "react";
import Scrollbar from "../../components/scrollbar";
import Image from "next/image";
function Format({ title_1, title_2, head, img, scale, level }) {
  return (
    <div className="screen  bg-blue-2">
      <Navbar />
      <section className="w-full h-full flex flex-col items-center gap-[5rem] justify-start pt-[5rem] ">
        <div className="relative w-full py-5">
          <h2 className="h1 text-blue font-semibold normal-case ">{head}</h2>
          <div className=" absolute w-[10rem] h-[5px] bg-blue bottom-0 left-1/2 -translate-x-1/2"></div>
        </div>

        <Image src={img} className={`${scale}`} alt="img" />
        <div className="">
          <h1 className="text-[4rem] capitalize">{title_1}</h1>
          <h1 className="text-[4rem] uppercase text-light-blue font-semibold">
            {title_2}
          </h1>
        </div>
      </section>

      <Scrollbar level={level} />
    </div>
  );
}

export default Format;
