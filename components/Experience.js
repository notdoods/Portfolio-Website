import userData from "../constants/data";
import React from "react";

export default function Experience() {
  return (
    <section className="bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-10 text-center md:text-left">
          Experience
        </h1>
      </div>
      <div className="bg-gray-900 -mt-16">
        <div className="grid grid-cols-1 bg-gray-900 max-w-xl mx-auto pt-28 pb-28">
          {/* Experience card */}
          {userData.experience.map((exp, idx) => (
            <div key={idx}>
              <ExperienceCard
                key={idx}
                title={exp.title}
                desc={exp.desc}
                year={exp.year}
                company={exp.company}
                companyLink={exp.companyLink}
              />
              {idx === userData.experience.length - 1 ? null : (
                <div className="divider-container flex flex-col items-center -mt-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full relative z-10">
                    <div className="w-4 h-4 bg-green-500 rounded-full relative z-10 animate-ping"></div>
                  </div>
                  <div className="w-1 h-24 bg-gray-600 bg-opacity-80 rounded-full -mt-2"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const ExperienceCard = ({ title, desc, year, company, companyLink }) => {
  return (
    <div className="relative experience-card border p-4 rounded-md shadow-xl bg-gray-800 z-10 mx-4">
      <h1 className="absolute -top-10 md:-left-10 md:-top-10 text-4xl  font-bold text-gray-300">
        {year}
      </h1>
      <h1 className="font-semibold text-xl">{title}</h1>
      <a href={companyLink} className="text-gray-400">
        {company}
      </a>
      <p className="text-gray-300 my-2">{desc}</p>
    </div>
  );
};
