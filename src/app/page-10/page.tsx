import React from "react";
import img_1 from "../../Img/png/type/curly.png";
import img_2 from "../../Img/png/type/straight.png";
import img_3 from "../../Img/png/type/wavy.png";
import PageFormat from "../../components/PageFormat/Format_7";
function page() {
  const title_1 = "Am I suitable for a hair transplant";
  const title_2 = "Structure of the Hair";
  const scale = "scale-100";
  const text_1 = "Straight";
  const text_2 = "Wavy";
  const text_3 = "Curly";
  const level = "w-[30%]";

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
