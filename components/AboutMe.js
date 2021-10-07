import React from "react";
import userData from "../constants/data";

export default function AboutMe() {
  return (
    <section className="bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 ">
        <h1 className=" text-5xl md:text-9xl font-bold py-10 text-center md:text-left">
          About Me
        </h1>
      </div>
      <div className="-mt-16 bg-gray-900">
        <div className="text-container max-w-6xl mx-auto pt-20">
          <p
            className="leading-loose text-2xl md:text-4xl font-semibold  mx-4"
            style={{ lineHeight: "3rem" }}
          >
            {userData.about.title}.{" "}
            {/*Currently working on{" "}
            {/*{
            <a
              className="bg-red-500 rounded-md px-2 py-1 text-white"
              href={userData.about.currentProjectUrl}
            >
              {userData.about.currentProject} ✈️
            </a>
}*/}
          </p>
        </div>
      </div>
      <div className="bg-gray-900 px-4">
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          {/* Social Buttons */}
          <div className="inline-flex flex-col">
            <div>
              <h1 className="text-xl font-semibold  text-gray-200">Contact</h1>
              <p className="text-lg  mt-4 text-gray-300">
                For any inquiry, send me a{" "}
                <a
                  href={`mailto:${userData.email}`}
                  className="border-b-2  border-gray-300 font-bold text-gray-300"
                >
                  mail
                </a>{" "}
                and I'll respond promptly.
              </p>
            </div>
            <div className="mt-8">
              <h1 className="text-xl font-semibold text-gray-200">
                Job Opportunities
              </h1>
              <p className="text-lg  mt-4 text-gray-300">
                I'm looking for a job currently, if you see me as a good fit,
                check my{" "}
                <a
                  href={userData.resumeUrl}
                  target="__blank"
                  className="border-b-2 border-gray-300 font-bold text-gray-300"
                >
                  Resume
                </a>{" "}
                and I'd love to work for you.
              </p>
            </div>
            {/* Social Links */}
            <h1 className="text-xl font-semibold mt-8 text-gray-200">
              Social Links
            </h1>
            <div className="mt-4 ml-4">
              <div className="flex flex-row justify-start items-center ">
                <a
                  href={userData.socialLinks.facebook}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg  font-mono relative overflow-hidden text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    Facebook
                  </p>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.github}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg  font-mono relative overflow-hidden text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    GitHub
                  </p>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.linkedin}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg  font-mono relative overflow-hidden text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    LinkedIn
                  </p>
                </a>
              </div>
            </div>
          </div>
          {/* Text area */}
          <div className="col-span-1 md:col-span-2">
            {userData.about.description?.map((desc, idx) => (
              <p key={idx} className="text-xl  mb-4 text-gray-300 ">
                {desc}
              </p>
            ))}

            <h1 className="bg-blue-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-150">
              Tech Stack
            </h1>
            <div className="flex flex-row flex-wrap mt-8">
              <img
                src="https://raw.githubusercontent.com/github/explore/main/topics/javascript/javascript.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/main/topics/html/html.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/main/topics/css/css.png"
                className="h-20 w-20 mx-4 my-4"
              />

              <img
                src="https://raw.githubusercontent.com/github/explore/main/topics/react/react.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/main/topics/nextjs/nextjs.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/main/topics/php/php.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/main/topics/mysql/mysql.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/main/topics/python/python.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/main/topics/jupyter-notebook/jupyter-notebook.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/main/topics/java/java.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/main/topics/git/git.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/main/topics/github/github.png"
                className="h-20 w-20 mx-4 my-4 bg-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
