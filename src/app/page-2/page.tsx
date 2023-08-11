import React from "react";
import img from "../../Img/png/slider_img2.png";
import PageFormat from "../../components/PageFormat/Format_2";

function page() {
  const decs = `Your surgery is carried out by a team of <span className='font-bold'>surgeons, doctors,</span> and highly <span className='font-bold'>skilled technicians.</span>
  `;

  const title = "How Wimpole Clinic Works";
  const scale = "";
  const cls = "h3-1";
  return (
    <PageFormat img={img} title={title} decs={decs} scale={scale} cls={cls} />
  );
}

export default page;
