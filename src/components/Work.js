import React from "react";
import Wrapper from "./Wrapper";
import image from "../assets/image.svg";
import { AiFillGithub } from "react-icons/ai";
import { BiLink } from "react-icons/bi";

const Work = () => {
  return (
    <section>
      <h1 className="text-4xl md:text-8xl font-medium md:ml-10 pb-4 text-[#06b6d4]">
        Work
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 w-4/5 m-auto md:my-20 md:px-8 lg:px-16 gap-16">
        <div className="bg-white shadow-md p-3 rounded-md">
          <img src={image} alt="logo" className="rounded-md" />
          <div className="flex gap-3 items-center pt-2 text-lg">
            <p className="flex-1">Job Tracker</p>
            <a
              href="https://github.com/Varshith-p/job-tracker-mern"
              target="_blank"
            >
              <AiFillGithub />
            </a>
            <a href="https://job-tracker-mern.cyclic.app/" target="_blank">
              <BiLink />
            </a>
          </div>
        </div>
        <div className="bg-white shadow-md p-3 rounded-md">
          <img src={image} alt="logo" className="rounded-md" />
          <div className="flex items-center pt-2 gap-3 text-lg">
            <p className="flex-1">Job Tracker</p>
            <a
              href="https://github.com/Varshith-p/job-tracker-mern"
              target="_blank"
            >
              <AiFillGithub />
            </a>
            <a href="https://job-tracker-mern.cyclic.app/" target="_blank">
              <BiLink />
            </a>
          </div>
        </div>
        <div className="bg-white shadow-md p-3 rounded-md">
          <img src={image} alt="logo" className="rounded-md" />
          <div className="flex gap-3 items-center pt-2 text-lg">
            <p className="flex-1">Job Tracker</p>
            <a
              href="https://github.com/Varshith-p/job-tracker-mern"
              target="_blank"
            >
              <AiFillGithub />
            </a>
            <a href="https://job-tracker-mern.cyclic.app/" target="_blank">
              <BiLink />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wrapper(Work, "work");
