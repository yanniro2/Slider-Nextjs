import React from "react";
import img_1 from "../../Img/png/first_month_hair.png";
import img_2 from "../../Img/png/six_month_hair.png";
import img_3 from "../../Img/png/nine_month_hair.png";
import PageFormat from "../../components/PageFormat/Format_7";
function page() {
  const title_1 = "Hair works in three month cycles";
  const title_2 = "";
  const scale = "w-1/2";
  const text_1 = "3 MONTHS";
  const text_2 = "6 MONTHS";
  const text_3 = "9 MONTHS TO A YEAR";
  const sub_1 = "The first";
  const sub_2 = "Post Surgery";
  const sub_3 = "Post Surgery";
  const level = "w-[93%]";

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
      sub_1={sub_1}
      sub_2={sub_2}
      sub_3={sub_3}
      level={level}
    />
  );
}

export default page;
