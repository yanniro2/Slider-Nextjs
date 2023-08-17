import React from "react";
import img from "../../Img/png/slider_img2.png";
import PageFormat from "../../components/PageFormat/Format_2";
function page() {
  const decs = `
    The Wimpole Clinic is one of the Oldest Hair transplant clinics in
            the United Kingdom.
  `;
  const title = "How Wimpole Clinic Works";
  const scale = "";
  const cls = "h3-2";
  const level = "w-[15%]";
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
