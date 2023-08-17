import Navbar from "@/components/Navbar";
import React from "react";
import Scrollbar from "../../components/scrollbar";
import Image from "next/image";
function Format({ title, img, scale, level }) {
  return (
    <div className="screen bg-white ">
      <Navbar />
      <section className="bg-blue-l h-full w-full flex flex-col justify-center items-center ">
        <Image
          src={img}
          className={`border-[1rem] border-white ${scale}`}
          alt="img"
        />

        <h1 className="text-[3rem] font-serif capitalize text-blue  font-semibold tracking-normal ">
          {title}
        </h1>
      </section>

      <Scrollbar level={level} />
    </div>
  );
}

export default Format;
