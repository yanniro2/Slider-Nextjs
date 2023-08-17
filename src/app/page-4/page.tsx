import React from "react";
import img from "../../Img/png/slider_img4.png";
import PageFormat from "../../components/PageFormat/Format_2";
function page() {
  const decs = `
    Some of our surgeons are members of the International Society of Hair Restoration Surgeons and some are member of the European Society, and some are members of the British Association Hair Restoration surgeons.
  `;
  const title = "How Wimpole Clinic Works";
  const scale = "scale-90";
  const cls = "h3-2";
  const level = "w-[12%]";
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
