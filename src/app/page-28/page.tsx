import React from "react";
import img from "../../Img/png/first_month_hair.png";
import PageFormat from "../../components/PageFormat/Format_8";
function page() {
  const title_1 = "the first";
  const title_2 = "three months";
  const head = "Hair works in <br/> three month cycles";
  const scale = "scale-75";

  return (
    <PageFormat
      img={img}
      title_1={title_1}
      head={head}
      title_2={title_2}
      scale={scale}
    />
  );
}

export default page;
