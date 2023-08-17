import React from "react";
import img from "../../Img/png/nine_month_hair.png";
import PageFormat from "../../components/PageFormat/Format_8";
function page() {
  const title_1 = "Post Surgery";
  const title_2 = "9 MONTHS  TO A YEAR";
  const head = "Hair works in  three month cycles";
  const scale = "scale-75";
  const level = "w-[90%]";

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
