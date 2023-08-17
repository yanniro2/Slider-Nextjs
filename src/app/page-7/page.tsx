import Navbar from "@/components/Navbar";
import React from "react";
import Scrollbar from "../../components/scrollbar";
import Sub from "../../components/Sub";
function page() {
  const data = [
    { id: 1, description: "Make  informed decision" },
    { id: 2, description: "Female Pattern Hair Loss (Androgenetic Alopecia)" },
    { id: 3, description: "Temporary Hair Loss" },
    { id: 4, description: "Primary Cicatrical (Scarring) Alopecia" },
    { id: 5, description: "Other Causes Of Hair Loss" },
    { id: 6, description: "Traumatic Causes" },
    { id: 7, description: "Hair Shaft Abnormalities" },
    { id: 8, description: "Infections" },
    { id: 9, description: "Scalp Conditions" },
    { id: 10, description: "Medications Associated With Hair Loss" },
    // Add more data items
  ];
  const level = "w-[21%]";
  return (
    <div className="screen bg-white ">
      <Navbar />
      <section className="bg-blue-l h-full w-full flex flex-col">
        <h1 className="text-[3rem] font-serif capitalize text-blue font-bold tracking-wide p-10 mb-5">
          Am I suitable for a hair transplant
        </h1>
        <div className="flex flex-col justify-between h-max pt-[1rem] py-10 px-5 gap-[1rem]">
          {data.map((item) => (
            <Sub key={item.id} item={item} />
          ))}
        </div>
      </section>

      <Scrollbar level={level} />
    </div>
  );
}

export default page;
