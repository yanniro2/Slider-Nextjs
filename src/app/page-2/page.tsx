import React from "react";
import img from "../../Img/png/slider_img2.png";
import PageFormat from "../../components/PageFormat/Format_2";

function page() {
  const decs = (
    <div>
      Your surgery is carried out by a team of{" "}
      <span className="font-bold"> surgeons, doctors,</span> and highly{" "}
      <span className="font-bold"> skilled technicians.</span>
    </div>
  );
  const title = "How Wimpole Clinic Works";
  const scale = "";
  const cls = "h3-1";
  const level = "w-[6%]";
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
