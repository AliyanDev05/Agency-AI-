import React from "react";
import Title from "./Title";
import { teamData } from "../assets/assets";

const OurTeam = ({ title, desc }) => {
  return (
    <div
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 
   py-20 pt-30 text-gray-800 dark:text-white"
    >
      <Title
        title="Meet the team"
        desc="A passionate team of digital experts dedicated to your brand's success."
      />

      <div className="grid gird-cols-2  md:grid-cols-3 xl:grid-cols-4 gap-5">
        {teamData.map((team, index) => (
          <div
            key={index}
            className="flex max-sm:flex-col gap-5 p-4 items-center rounded-xl
           border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 
           shadow-xl shadow-gray-100 dark:shadow-white/5 hover:scale-103 transition-all duration-400"
          >
            <img src={team.image} alt="" className="w-12 h-12 rounded-full" />
            <div className="flex-1">
              <h3 className="font-bold text-sm">{team.name}</h3>
              <p className="text-xs opacity-60">{team.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
