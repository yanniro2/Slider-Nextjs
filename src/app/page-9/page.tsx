import Navbar from "@/components/Navbar";
import React from "react";
import Scrollbar from "../../components/scrollbar";
import img from "../../Img/png/hair_structure2.png";
import Image from "next/image";
import PageFormat from "../../components/PageFormat/Format_3";
function page() {
  const title = "Am I suitable for a hair transplant";
  const head = "Structure of the hair";
  const level = "w-[27%]";

  return <PageFormat img={img} title={title} head={head} level={level} />;
}

export default page;
