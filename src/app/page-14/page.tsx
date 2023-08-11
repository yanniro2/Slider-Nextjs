import React from "react";
import img from "../../Img/png/futvsfue.jpg";
import PageFormat from "../../components/PageFormat/Format_2";
function page() {
  const decs = `
    FUT: is where a strip of hair is removed from the back of the head,
            and closing the gap leaving a fine linear scar at the back of the
            head. (limitations on how short you would like to cut your hair)
  `;
  const title = " Methods of extraction";
  const scale = "scale-100";
  const cls = "h3-2 pt-[6rem]";
  return (
    <PageFormat img={img} title={title} decs={decs} scale={scale} cls={cls} />
  );
}

export default page;
