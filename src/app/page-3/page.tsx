import React from "react";
import img from "../../Img/png/slider_img3.png";
import PageFormat from "../../components/PageFormat/Format_2";

function page() {
  const decs = `
    The whole clinic is lead by
    <span className="font-bold">Mr Michael May</span> (FRCS), all of our
    surgeons are registered with the GMC and are members of the Royal
    College of surgeons.
  `;
  const title = "How Wimpole Clinic Works";
  const scale = "scale-90";
  const cls = "h3-1";
  return (
    <PageFormat img={img} title={title} decs={decs} scale={scale} cls={cls} />
  );
}

export default page;
