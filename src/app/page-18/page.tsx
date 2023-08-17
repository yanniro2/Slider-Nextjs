import React from "react";
import img from "../../Img/png/image 9.png";
import PageFormat from "../../components/PageFormat/Format_4";
function page() {
  const title = "What would I look like immediately post surgery";
  const scale = "scale-90";
  const level = "w-[54%]";
  return <PageFormat img={img} title={title} scale={scale} level={level} />;
}

export default page;
