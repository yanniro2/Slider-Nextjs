import React from "react";
import img from "../../Img/png/hair_structure.png";
import PageFormat from "../../components/PageFormat/Format_3";
function page() {
  const title = "Am I suitable for a hair transplant";
  const head = "Structure of the hair";

  return <PageFormat img={img} title={title} head={head} />;
}

export default page;
