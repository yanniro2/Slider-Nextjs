import React from "react";
import img from "../../Img/png/taking.webp";
import PageFormat from "../../components/PageFormat/Format_2";
function page() {
  const decs = `
    A special extraction drill is used during the surgery the size punch is determined by the size of the of the follicles these range from a 0.75mm punch to a 1.00 punch. Everyones roots are different some people have long roots and some people have short roots.
  `;
  const title = " Taking the follicles";
  const scale = "scale-90";
  const cls = "h3-2 pt-[6rem]";
  const level = "w-[48%]";
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
