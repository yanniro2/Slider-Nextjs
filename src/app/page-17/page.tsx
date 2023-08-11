import React from "react";
import img from "../../Img/png/planting.webp";
import PageFormat from "../../components/PageFormat/Format_2";
function page() {
  const decs = `
    Gently placing the selected follicles into specially made slits ensures extremely natural-looking hair growth. Although the density may not match that of your youth, it provides good coverage and a genuine appearance.
  `;
  const title = " Planting the follicles";
  const scale = "scale-125";
  const cls = "h3-2 pt-[6rem]";
  return (
    <PageFormat img={img} title={title} decs={decs} scale={scale} cls={cls} />
  );
}

export default page;
