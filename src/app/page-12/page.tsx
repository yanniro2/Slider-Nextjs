import Navbar from "@/components/Navbar";
import React from "react";
import Image from "next/image";
import img from "../../Img/png/backside.jpg";

import Scrollbar from "../../components/scrollbar";

function page() {
  return (
    <div className="screen ">
      <Navbar />
      <section className="section-2">
        <h1 className="h1 pt-[5rem] bg-blue w-full h-1/3">
          What should I think about
        </h1>

        <div className="flex justify-center flex-col items-center  h-2/3 relative w-full bg-blue-l">
          <Image
            src={img}
            className="border-[1rem] absolute top-0  -translate-y-1/2 border-white rounded scale-150"
          />
          <h3 className="h3-2 pt-[6rem]">
            We do not have an infinite supply of hair at the back of the head,
            and yes it would be nice to cover your whole head with hair from the
            back of your head, you must think of what will happen ten years down
            the line.
          </h3>
        </div>
      </section>

      <Scrollbar />
    </div>
  );
}

export default page;
