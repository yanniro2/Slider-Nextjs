import Navbar from "@/components/Navbar";
import React from "react";
import Scrollbar from "../../components/scrollbar";
import img_1 from "../../Img/png/hair_wash1.png";
import img_2 from "../../Img/png/hair_wash2.png";
import img_3 from "../../Img/png/hair_wash3.png";
import Image from "next/image";
import PageFormat from "../../components/PageFormat/Format_7";
function page() {
  const title_1 = "Am I suitable  for a hair transplant";
  const title_2 = "";
  const scale = "w-[20rem] h-[20rem] object-cover rounded";
  const text_1 = "FIRST  HAIR WASH";
  const text_2 = "THIRD  HAIR WASH";
  const text_3 = "EIGHTH  HAIR WASH";
  const level = "w-[78%]";

  return (
    <PageFormat
      img_1={img_1}
      img_2={img_2}
      img_3={img_3}
      title_1={title_1}
      title_2={title_2}
      scale={scale}
      text_1={text_1}
      text_2={text_2}
      text_3={text_3}
      level={level}
    />
  );
}

export default page;
