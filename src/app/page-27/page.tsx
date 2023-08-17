import React from "react";
import img from "../../Img/png/areascale.jpg";
import Navbar from "@/components/Navbar";
import Scrollbar from "@/components/scrollbar";
import Image from "next/image";
function page() {
  const decs = `
    Areas of the scalp
  `;
  const title = "";
  const cls = "";
  const level = "w-[81%]";
  return (
    <div className="screen ">
      <Navbar />
      <section className="section-2">
        <h1 className="h1 pt-[5rem] bg-light-blue w-full h-1/3">{title}</h1>

        <div className="flex justify-center flex-col items-center  h-2/3 relative w-full bg-blue-l ">
          <Image
            src={img}
            className="border-[1rem] absolute top-0  -translate-y-1/2 border-white rounded scale-90"
            alt="image log"
          />
          <h3
            className="h3-2 text-blue font-semibold"
            dangerouslySetInnerHTML={{ __html: decs }}
          />
        </div>
      </section>

      <Scrollbar level={level} />
    </div>
  );
}

export default page;
