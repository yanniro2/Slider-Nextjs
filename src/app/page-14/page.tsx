import Navbar from "@/components/Navbar";
import React from "react";
import Image from "next/image";
import img from "../../Img/png/futvsfue.jpg";

import Scrollbar from "../../components/scrollbar";

function page() {
  return (
    <div className="screen ">
      <Navbar />
      <section className="section-2">
        <h1 className="h1 pt-[5rem] bg-blue w-full h-1/3">
          Methods of extraction
        </h1>

        <div className="flex justify-center flex-col items-center  h-2/3 relative w-full bg-blue-l">
          <Image
            src={img}
            className="border-[1rem] absolute top-0  -translate-y-1/2 border-white rounded scale-100"
          />
          <h3 className="h3-2 pt-[6rem]">
            FUT: is where a strip of hair is removed from the back of the head,
            and closing the gap leaving a fine linear scar at the back of the
            head. (limitations on how short you would like to cut your hair)
          </h3>
        </div>
      </section>

      <Scrollbar />
    </div>
  );
}

export default page;
