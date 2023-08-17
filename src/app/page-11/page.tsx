import Navbar from "@/components/Navbar";
import React from "react";
import Scrollbar from "../../components/scrollbar";
import img_1 from "../../Img/png/medicine/medicine1.png";
import img_2 from "../../Img/png/medicine/medicine2.png";

import Image from "next/image";
function page() {
  const level = "w-[33%]";
  return (
    <div className="screen bg-white ">
      <Navbar />
      <section className="bg-blue-l h-full w-full flex flex-col justify-evenly">
        <h1 className="text-[3rem] font-serif capitalize text-blue font-bold tracking-wide p-10 mb-5">
          Am I suitable for a hair transplant
        </h1>
        <div className="flex flex-col pt-[1rem] py-10 px-5 gap-[1rem] justify-evenly h-full">
          <h2 className="h1">Structure of the hair</h2>
          <div className="flex flex-col items-center justify-center gap-10 w-full ">
            <div className="flex items-center gap-10">
              <Image src={img_1} alt="img" />
            </div>

            <div className="flex items-center gap-10">
              <Image src={img_2} alt="img" />
            </div>
          </div>
        </div>
      </section>

      <Scrollbar level={level} />
    </div>
  );
}

export default page;
