import Navbar from "@/components/Navbar";
import React from "react";


import Scrollbar from "../../components/scrollbar";
import SubSection from "../../components/SubSection";
import { BiBrain, BiSearch, BiCalendar } from "react-icons/bi";
import { RiMentalHealthFill } from "react-icons/ri";
function page() {
  const data = [
    { id: 1, name: <BiBrain />, description: "Make  informed decision" },
    { id: 2, name: <BiSearch />, description: "Do your research" },
    { id: 3, name: <BiCalendar />, description: "Prepare for an appointment" },
    {
      id: 4,
      name: <RiMentalHealthFill />,
      description: "Determine your treatment option",
    },
    // Add more data items
  ];
  return (
    <div className="screen ">
      <Navbar />
      <section className="bg-blue h-full w-full flex flex-col">
        <h1 className="text-[3.5rem] font-serif capitalize text-white font-bold tracking-wide p-10 mb-10">
          Getting started
        </h1>
        <div className="flex flex-col justify-between h-max pt-[5rem] px-5  gap-[10rem]">
          {data.map((item) => (
            <SubSection key={item.id} item={item} />
          ))}
        </div>
      </section>

      <Scrollbar />
    </div>
  );
}

export default page;
