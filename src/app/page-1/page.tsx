import React from "react";
import img from "../../Img/png/fut_treatment.png";
import PageFormat from "../../components/PageFormat/Format_1";
function page() {
  const decs = `
    The Whole Clinic Is Lead By
    <div>
      <span className="font-bold bold orange">Mr Michael May</span> (FRCS), All Of
      Our Surgeons Are Registered With The GMC And Are Members Of The
      Royal College Of Surgeons.
    </div>
  `;

  const title = "How Wimpole Clinic Work";
  const scale = "scale-150";
  return <PageFormat img={img} title={title} decs={decs} scale={scale} />;
}

export default page;
