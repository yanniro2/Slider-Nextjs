import React from "react";
import img from "../../Img/png/six_month_hair.png";
import PageFormat from "../../components/PageFormat/Format_8";
function page() {
  const title_1 = "Post Surgery";
  const title_2 = "six month";
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
