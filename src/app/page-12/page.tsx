import React from "react";
import img from "../../Img/png/backside.jpg";
import PageFormat from "../../components/PageFormat/Format_2";

function page() {
  const decs = `
    We do not have an infinite supply of hair at the back of the head,
            and yes it would be nice to cover your whole head with hair from the
            back of your head, you must think of what will happen ten years down
            the line.
  `;
  const title = " What should I think about";
  const scale = "scale-150";
  const cls = "h3-2 pt-[6rem]";
  return (
    <PageFormat img={img} title={title} decs={decs} scale={scale} cls={cls} />
  );
}

export default page;
