import Navbar from "@/components/Navbar";
import React from "react";
import Image from "next/image";
import Scrollbar from "../../components/scrollbar";

function Format({ title, img, decs, scale }) {
  return (
    <div className="screen">
      <Navbar />
      <section className="section-1">
        <Image
          src={img}
          className={`absolute top-0 -translate-y-1/2 rounded-full object-cover border-[1rem] drop-shadow shadow z-10 w-[420px] h-[420px] ${scale}`}
        />
        <div className="w-full flex flex-col h-full justify-center gap-10 items-center">
          <h1 className="h1">{title}</h1>
          <h3 className="h3" dangerouslySetInnerHTML={{ __html: decs }} />
        </div>
      </section>
      <Scrollbar />
    </div>
  );
}

export default Format;
