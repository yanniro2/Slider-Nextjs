import Navbar from "@/components/Navbar";
import React from "react";
import Scrollbar from "../../components/scrollbar";
import Image from "next/image";
import svg from "../../Img/svg/hairSvg.svg";

function page() {
  const level = "w-[99%]";
  return (
    <div className="screen ">
      <Navbar />
      <section className="bg-blue h-full w-full flex flex-col">
        <div className="w-full h-full p-10 flex flex-col items-center bg-[#22577A] space-y-">
          <div className="h1">Cost Calculator</div>

          <div className="w-16 rounded h-[1.5px] bg-[#77C5D5]" />

          <div className="relative">
            <div className="absolute top-12 w-full px-12">
              <div className="bg-white text-center rounded-full text-[#77C5D5] px-6 py-0.5 text-[40px]">
                GRAFTS NEEDED
              </div>
            </div>

            <div className="flex flex-col justify-end items-center mt-20 w-[520px] h-[520px] p-16 border-4 rounded-3xl">
              <Image src={svg} alt="svg" />
              <div className="text-[#77C5D5] mt-6 text-center font-bold text-[120px]">
                2500
              </div>
            </div>
          </div>

          <div className="relative mt-12">
            <div className="absolute top-12 w-full px-12">
              <div className="bg-white text-center rounded-full text-[#77C5D5] px-6 py-0.5 text-[40px]">
                COST
              </div>
            </div>

            <div className="flex flex-col justify-end items-center mt-20 w-[520px] bg-[#77C5D5] p-16 rounded-3xl">
              <div className="text-white text-center font-bold text-[120px]">
                £6000
              </div>
            </div>
          </div>
        </div>
      </section>

      <Scrollbar level={level} />
    </div>
  );
}

export default page;
