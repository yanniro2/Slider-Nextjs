import Navbar from "@/components/Navbar";
import React from "react";
import Scrollbar from "../../components/scrollbar";

function page() {
  return (
    <div className="screen bg-white ">
      <Navbar />
      <section className="bg-blue-l h-full w-full flex flex-col">
        <h1 className="text-[3rem] font-serif capitalize text-blue font-bold tracking-wide p-10 mb-5">
          Am I suitable for a hair transplant
        </h1>
        <div className="flex flex-col justify-between h-max pt-[1rem] py-10 px-5 gap-[1rem]">
          content
        </div>
      </section>

      <Scrollbar />
    </div>
  );
}

export default page;
