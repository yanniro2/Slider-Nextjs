import Navbar from "@/components/Navbar";
import React from "react";
import Image from "next/image";
import img from "../../Img/png/fut_treatment.png";
import Scrollbar from "../../components/scrollbar";

function page() {
  return (
    <div className="slider">
      <Navbar />
      <Image
        src={img}
        className=" drop-shadow-xl  rounded-full border-[5px] border-gray-300 shadow-lg object-cover"
      />

      <div className="w-full bg-blue-950 flex items-center p-5 justify-center rounded text-white flex-col">
        <h1 className="h1">How Wimpole Clinic Work</h1>
        <h2 className="h2">
          Your surgery is carried out by a team of surgeons, doctors, and highly
          skilled technicians.
        </h2>

        <div className="flex flex-col items-center gap-1 p-3 text-[1.2rem] capitalize text-gray-400">
          <p> The whole clinic is lead by</p>
          <div>
            <span className=" font-semibold text-gray-300">Mr Michael May</span>{" "}
            (FRCS), all of our surgeons are registered with the GMC and are
            members of the Royal College of surgeons.
          </div>
        </div>
      </div>
      <Scrollbar />
    </div>
  );
}

export default page;
