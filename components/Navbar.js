import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import userData from "../constants/data";

export default function Navbar() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="max-w-full  mx-auto px-4 py-5 md:py-10">
      <div className="flex  md:flex-row justify-between items-center">
        <div className="flex flex-col">
          <Link href="/">
            <a>
              <h1 className="font-semibold text-xl text-gray-100">
                {userData.name}
              </h1>
              <p className="text-base font-light text-gray-500 text-gray-300">
                {userData.designation}
              </p>
            </a>
          </Link>
        </div>

        <div className="space-x-8 pr-32 hidden md:block">
          <Link href="/about">
            <a
              className={`text-base  ${
                router.asPath === "/about"
                  ? " font-bold text-gray-400"
                  : "text-gray-300 font-normal "
              }`}
            >
              About{" "}
              {router.asPath === "/about" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-down inline-block h-3 w-3"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                  />
                </svg>
              )}
            </a>
          </Link>
          <Link href="/projects">
            <a
              className={`text-base  ${
                router.asPath === "/projects"
                  ? " font-bold text-gray-400"
                  : "text-gray-300 font-normal "
              }`}
            >
              Projects
              {router.asPath === "/projects" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-down inline-block h-3 w-3"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                  />
                </svg>
              )}
            </a>
          </Link>
          <Link href="/experience">
            <a
              className={`text-base  ${
                router.asPath === "/experience"
                  ? "font-bold text-gray-400"
                  : "text-gray-300 font-normal "
              }`}
            >
              Experience{" "}
              {router.asPath === "/experience" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-down inline-block h-3 w-3"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                  />
                </svg>
              )}
            </a>
          </Link>
          <Link href="/contact">
            <a
              className={`text-base  ${
                router.asPath === "/contact"
                  ? "font-bold text-gray-400"
                  : "text-gray-300 font-normal "
              }`}
            >
              Contact
              {router.asPath === "/contact" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-down inline-block h-3 w-3"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                  />
                </svg>
              )}
            </a>
          </Link>
        </div>

        <div className="space-x-4 flex flex-row items-center">
          <a
            href={userData.socialLinks.linkedin}
            className="text-base font-normal text-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-linkedin h-5 w-5"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="space-x-8 block md:hidden mt-4">
        <Link href="/about">
          <a className="text-base font-normal text-gray-300">About</a>
        </Link>
        <Link href="/projects">
          <a className="text-base font-normal text-gray-300">Projects</a>
        </Link>
        <Link href="/experience">
          <a className="text-base font-normal text-gray-300">Experience</a>
        </Link>
        <Link href="/contact">
          <a className="text-base font-normal text-gray-300">Contact</a>
        </Link>
      </div>
    </div>
  );
}
