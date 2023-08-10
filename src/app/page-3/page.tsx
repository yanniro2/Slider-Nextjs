import Navbar from "@/components/Navbar";
import React from "react";
import Image from "next/image";
import img from "../../Img/png/slider_img3.png";
import Scrollbar from "../../components/scrollbar";

function page() {
  return (
    <div className="screen ">
      <Navbar />
      <section className="section-2">
        <h1 className="h1 pt-[5rem] bg-blue w-full h-1/3">
          How Wimpole Clinic Works
        </h1>

        <div className="flex justify-center flex-col items-center  h-2/3 relative w-full bg-blue-l">
          <Image
            src={img}
            className="border-[1rem] -translate-y-1/2 border-white rounded "
          />
          <h3 className="h3-1 flex flex-col justify-center">
            The whole clinic is lead by{" "}
            <span className="font-extrabold">Mr Michael May</span> (FRCS), all
            of our surgeons are registered with the GMC and are members of the
            Royal College of surgeons.
          </h3>
        </div>
      </section>

      <Scrollbar />
    </div>
  );
}

export default page;
