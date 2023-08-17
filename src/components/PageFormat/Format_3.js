import Navbar from "@/components/Navbar";
import React from "react";
import Scrollbar from "../../components/scrollbar";
import Image from "next/image";
function Format({ title, head, img, level }) {
  return (
    <div className="screen bg-white ">
      <Navbar />
      <section className="bg-blue-l h-full w-full flex flex-col justify-evenly">
        <h1 className="text-[3rem] font-serif capitalize text-blue font-bold tracking-wide p-10 mb-5">
          {title}
        </h1>
        <div className="flex flex-col pt-[1rem] py-10 px-5 gap-[1rem] justify-evenly h-full">
          <h2 className="h1">{head}</h2>
          <Image src={img} alt="img" />
        </div>
      </section>

      <Scrollbar level={level} />
    </div>
  );
}

export default Format;
