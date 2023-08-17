import Navbar from "@/components/Navbar";
import React from "react";
import Image from "next/image";
import Scrollbar from "../../components/scrollbar";

function Format({ title, img, decs, scale, cls, level }) {
  return (
    <div className="screen ">
      <Navbar />
      <section className="section-2">
        <h1 className="h1 pt-[5rem] bg-blue w-full h-1/3">{title}</h1>

        <div className="flex justify-center flex-col items-center  h-2/3 relative w-full bg-blue-l">
          <Image
            src={img}
            className={`border-[1rem] absolute top-0  -translate-y-1/2 border-white rounded ${scale}`}
            alt="img"
          />
          <h3 className={`${cls}`}>{decs}</h3>
        </div>
      </section>

      <Scrollbar level={level} />
    </div>
  );
}

export default Format;
