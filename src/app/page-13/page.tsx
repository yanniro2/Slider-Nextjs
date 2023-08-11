import React from "react";
import img from "../../Img/png/slider_img2.png";
import PageFormat from "../../components/PageFormat/Format_2";
function page() {
  const decs = `
    Wimpole Clinic carry out both methods of hair extraction, and the
            object is to take the follicles from our donor supply select them
            into categories, of how many hairs are in each of the grafts. And to
            check that there are no damaged grafts.
  `;
  const title = " Methods of hair transplant";
  const scale = "scale-100";
  const cls = "h3-2 pt-[6rem]";
  return (
    <PageFormat img={img} title={title} decs={decs} scale={scale} cls={cls} />
  );
}

export default page;
