import Navbar from "@/components/Navbar";
import React from "react";
import Scrollbar from "../../components/scrollbar";
import Image from "next/image";
function Format(props) {
  return (
    <div className="screen bg-white ">
      <Navbar />
      <section className="bg-blue-l h-full w-full flex flex-col justify-center">
        <h3 className="h2-2">{props.title_1}</h3>

        <div className="flex flex-col pt-[1rem]  px-5 gap-[1rem] justify-start h-full">
          <h2 className="h1 m-10">{props.title_2}</h2>

          <div className="flex flex-col items-start justify-center gap-10 w-full pl-[12rem]">
            <div className="flex items-center gap-10">
              <Image src={props.img_1} className={`${props.scale}`} alt="img" />

              <div className="flex items-start flex-col justify-centers">
                <h3 className="h2-3 text-[3rem] capitalize font-semibold">
                  {props.sub_1}
                </h3>
                <h3 className="h1 capitalize font-semibold">{props.text_1}</h3>
              </div>
            </div>

            <div className="flex items-center gap-10">
              <Image src={props.img_2} className={`${props.scale}`} alt="img" />
              <div className="flex items-start flex-col justify-centers">
                <h3 className="h2-3 text-[3rem] capitalize font-semibold">
                  {props.sub_2}
                </h3>
                <h3 className="h1 capitalize font-semibold">{props.text_2}</h3>
              </div>
            </div>

            <div className="flex items-center gap-10">
              <Image src={props.img_3} className={`${props.scale}`} alt="img" />
              <div className="flex items-start flex-col justify-centers">
                <h3 className="h2-3 text-[3rem] capitalize font-semibold">
                  {props.sub_3}
                </h3>
                <h3 className="h1 capitalize font-semibold">{props.text_3}</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Scrollbar level={props.level} />
    </div>
  );
}

export default Format;
