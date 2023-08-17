import React from "react";
import img from "../../Img/png/design_hair.jpg";
import PageFormat from "../../components/PageFormat/Format_2";
function page() {
  const decs = `
    Every persons hair is unique to them the angulation pf the follicles and the wat they are planted is of utmost importance.
  `;
  const title = " Designing a hair transplant";
  const scale = "scale-150";
  const cls = "h3-2 pt-[6rem]";
  const level = "w-[45%]";
  return (
    <PageFormat
      img={img}
      title={title}
      decs={decs}
      scale={scale}
      cls={cls}
      level={level}
    />
  );
}

export default page;
