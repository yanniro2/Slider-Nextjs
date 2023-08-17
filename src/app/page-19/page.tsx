import React from "react";
import img from "../../Img/png/image 10.png";
import PageFormat from "../../components/PageFormat/Format_5";
function page() {
  const title_1 = "Post Surgery";
  const title_2 = "Hair Growth";
  const head = "FUT";
  const scale = "scale-125";
  const level = "w-[57%]";

  return (
    <PageFormat
      img={img}
      title_1={title_1}
      head={head}
      title_2={title_2}
      scale={scale}
      level={level}
    />
  );
}

export default page;
