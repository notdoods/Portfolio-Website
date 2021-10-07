import React from "react";

export default function Hero() {
  return (
    <div className="header_hero bg-gradient-to-b from-gray-900 via-blue-800 animate-gradient-y relative z-10 overflow-hidden lg:flex items-center">
      <div className="container">
        <div className="row">
          <div className="w-full lg:w-1/2">
            <div className=" pt-150 lg:pt-0">
              <h2 className="hero_title text-2xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-extrabold">
                Kevin Chao, Full-Stack Developer{" "}
              </h2>
              <p className="hero_caption mt-8 lg:mr-8">
                I'm a full stack developer based in Long Beach, California,
                going for a Master's of Computer Science at CSU Long Beach. I'm
                a huge fan of coding and taking care of plants.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="header_shape hidden lg:block ">
        <img src="/hero.png" className="header_image"></img>
      </div>
    </div>
  );
}
