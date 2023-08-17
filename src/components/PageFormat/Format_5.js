import Navbar from "@/components/Navbar";
import React from "react";
import Scrollbar from "../../components/scrollbar";
import Image from "next/image";
function Format({ title_1, title_2, head, img, scale, level }) {
  return (
    <div className="screen  bg-blue-2 ">
      <Navbar />
      <section className="w-full h-full flex flex-col items-center gap-[1rem] justify-start pt-[10rem]">
        <h1 className="h2-1">{title_1}</h1>
        <h1 className="h2-1">{title_2}</h1>
        <h2 className="h1 pb-[10rem]">{head}</h2>

        <Image src={img} className={`${scale}`} alt="img" />
      </section>

      <Scrollbar level={level} />
    </div>
  );
}

export default Format;
