import React from "react";
import Title from "./Title";
import assets from "../assets/assets";

const OurWork = ({ title, desc }) => {
  const work = [
    {
      title: "Mobile app marketing",
      description:
        "We turn bold ideas into powerful digital solutions that connect...",
      icon: assets.work_mobile_app,
    },
    {
      title: "Dashboard management",
      description:
        "We turn bold ideas into powerful digital solutions that connect...",
      icon: assets.work_dashboard_management,
    },
    {
      title: "Fitness app promotion",
      description:
        "We turn bold ideas into powerful digital solutions that connect...",
      icon: assets.work_fitness_app,
    },
  ];

  return (
    <div
      id="our-work"
      className="flex flex-col items-center relative gap-7 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30
    text-gray-700 dark:text-white"
    >
      <Title
        title="Our latest work"
        desc="Browse our portfolio of innovative digital projects
         that showcase creativity, performance, and results."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {work.map((work, index) => (
          <div
            key={index}
            className="hover:scale-102 duration-500 transition-all cursor-pointer"
          >
            <img src={work.icon} alt="" className="w-full rounded-xl" />
            <h3 className="mt-3 mb-2 text-lg font-semibold">{work.title}</h3>
            <p className="text-sm opacity-60 w-5/6">{work.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWork;
