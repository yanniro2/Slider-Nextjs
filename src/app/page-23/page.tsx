import React from "react";
import img from "../../Img/png/hair_wash3.png";
import PageFormat from "../../components/PageFormat/Format_6";
function page() {
  const title_1 = "Post Surgery";
  const title_2 = "Hair Growth";
  const head = (
    <div>
      EIGHTH <br /> HAIR WASH
    </div>
  );
  const scale = "scale-100";
  const level = "w-[69%]";

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
