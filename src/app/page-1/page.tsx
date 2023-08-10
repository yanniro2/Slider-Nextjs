import Navbar from "@/components/Navbar";
import React from "react";
import Image from "next/image";
import img from "../../Img/png/fut_treatment.png";
import Scrollbar from "../../components/scrollbar";

function page() {
  return (
    <div className="screen">
      <Navbar />
      <section className="section-1">
        <Image
          src={img}
          className="absolute top-0 -translate-y-1/2 rounded-full object-cover border-[1rem] drop-shadow shadow z-10 w-[420px] h-[420px]"
        />

        <div className="w-full flex flex-col h-full justify-center gap-10 items-center">
          <h1 className="h1">How Wimpole Clinic Work</h1>
          <h3 className="h3">
            The Whole Clinic Is Lead By
            <div>
              <span className=" font-bold">Mr Michael May</span> (FRCS), All Of
              Our Surgeons Are Registered With The GMC And Are Members Of The
              Royal College Of Surgeons.
            </div>
          </h3>
        </div>
      </section>

      <Scrollbar />
    </div>
  );
}

export default page;
