import Navbar from "@/components/Navbar";
import React from "react";
import Image from "next/image";
import img from "../../Img/png/slider_img2.png";

import Scrollbar from "../../components/scrollbar";

function page() {
  return (
    <div className="screen ">
      <Navbar />
      <section className="section-2">
        <h1 className="h1 pt-[5rem] bg-blue w-full h-1/3">
          Methods of hair transplant
        </h1>

        <div className="flex justify-center flex-col items-center  h-2/3 relative w-full bg-blue-l">
          <Image
            src={img}
            className="border-[1rem] absolute top-0  -translate-y-1/2 border-white rounded scale-100"
          />
          <h3 className="h3-2 pt-[6rem]">
            Wimpole Clinic carry out both methods of hair extraction, and the
            object is to take the follicles from our donor supply select them
            into categories, of how many hairs are in each of the grafts. And to
            check that there are no damaged grafts.
          </h3>
        </div>
      </section>

      <Scrollbar />
    </div>
  );
}

export default page;
