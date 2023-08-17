import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Scrollbar from "@/components/scrollbar";
import img from "../../Img/png/fut_treatment.png";
import img_1 from "../../Img/png/workers.jpeg";
function page() {
  const level = "w-[96%]";
  return (
    <div className="screen bg-white ">
      <Navbar />
      <section className="bg-blue-l h-full w-full flex flex-col justify-center gap-[3rem]">
        <div className="flex flex-col items-center">
          <div className="text-[70px] leading-[80px]">John Smith</div>
          <div className="text-[50px] leading-[70px]">requires</div>

          <div className="bg-[#77C5D5] mt-9 text-center rounded-full text-white px-12 py-0.5 text-[60px]">
            FUT TREATMENT
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <Image
              className="rounded-full w-[400px] h-[400px] object-cover border-8 border-white  bg-white"
              src={img}
              alt="img"
            />
            <div className="text-[45px] mt-5 leading-[50px] py-4">
              Inspected by
            </div>

            <div className="text-[70px] leading-[80px]">Dr. May</div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Image
            className="rounded-full w-[400px] h-[400px] object-cover  border-8 border-white  bg-white"
            src={img_1}
            alt="img"
          />
          <div className="text-[45px] mt-5 leading-[50px] py-4">Advisor</div>

          <div className="text-[70px] leading-[80px]">Derrick</div>
        </div>
      </section>
      <Scrollbar level={level} />
    </div>
  );
}

export default page;
