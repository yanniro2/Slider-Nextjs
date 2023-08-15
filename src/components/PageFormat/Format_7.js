import Navbar from "@/components/Navbar";
import React from "react";
import Scrollbar from "../../components/scrollbar";

import Image from "next/image";
function page(prop) {
  return (
    <div className="screen bg-white ">
      <Navbar />
      <section className="bg-blue-l h-full w-full flex flex-col justify-center">
        <h3
          dangerouslySetInnerHTML={{ __html: prop.title_1 }}
          className="h2-2 "
        />

        <div className="flex flex-col pt-[1rem]  px-5 gap-[1rem] justify-start h-full">
          <h2 className="h1 m-10">{prop.title_2}</h2>
          <div className="flex flex-col items-start justify-center gap-10 w-full pl-[12rem]">
            <div className="flex items-center gap-10">
              <Image src={prop.img_1} className={`${prop.scale}`} />

              <div className="flex items-start flex-col justify-centers">
                <h3
                  dangerouslySetInnerHTML={{ __html: prop.sub_1 }}
                  className="h2-3 text-[3rem] capitalize font-semibold"
                />
                <h3
                  dangerouslySetInnerHTML={{ __html: prop.text_1 }}
                  className="h1 capitalize font-semibold"
                />
              </div>
            </div>

            <div className="flex items-center gap-10">
              <Image src={prop.img_2} className={`${prop.scale}`} />
              <div className="flex items-start flex-col justify-centers">
                <h3
                  dangerouslySetInnerHTML={{ __html: prop.sub_2 }}
                  className="h2-3 text-[3rem] capitalize font-semibold"
                />
                <h3
                  dangerouslySetInnerHTML={{ __html: prop.text_2 }}
                  className="h1 capitalize font-semibold"
                />
              </div>
            </div>

            <div className="flex items-center gap-10">
              <Image src={prop.img_3} className={`${prop.scale}`} />
              <div className="flex items-start flex-col justify-centers">
                <h3
                  dangerouslySetInnerHTML={{ __html: prop.sub_3 }}
                  className="h2-3 text-[3rem] capitalize font-semibold"
                />
                <h3
                  dangerouslySetInnerHTML={{ __html: prop.text_3 }}
                  className="h1 capitalize font-semibold"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Scrollbar />
    </div>
  );
}

export default page;
