import React from "react";
import Wrapper from "./Wrapper";
import FundMe from "../assets/FundMe.png";
import JobTracker from "../assets/JobTracker.png";
import Portfolio from "../assets/Portfolio.png";
import { AiFillGithub } from "react-icons/ai";
import { BiLink } from "react-icons/bi";

const Work = () => {
  return (
    <section>
      <h1 className="text-4xl md:text-8xl font-medium md:ml-10 pb-4 text-[#0f172a]">
        Work
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 m-auto md:my-20 md:px-8 lg:px-16 gap-16 lg:gap-14">
        <div className="bg-white shadow-md p-3 rounded-md">
          <div className="flex w-72 h-48 justify-center items-center">
            <img src={FundMe} alt="logo" className="rounded-md w-full h-full" />
          </div>
          <div className="flex gap-3 items-center pt-2 text-lg">
            <p className="flex-1 font-medium">FundMe</p>
            <a
              href="https://github.com/Varshith-p/blockchain-crowd-funding-app-backend"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub />
            </a>
            <a
              href="https://fundmeblockchain.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <BiLink />
            </a>
          </div>
          <div>
            <span className="font-medium">Frontend:</span> HTML, CSS, JS
          </div>
          <div>
            <span className="font-medium">Backend: </span> Solidity, Ethers.js,
            Hardhat, Blockchain
          </div>
        </div>
        <div className="bg-white shadow-md p-3 rounded-md">
          <div className="flex w-72 h-48 justify-center items-center">
            <img
              src={JobTracker}
              alt="logo"
              className="rounded-md w-full h-full"
            />
          </div>
          <div className="flex items-center pt-2 gap-3 text-lg">
            <p className="flex-1 font-medium">Job Tracker</p>
            <a
              href="https://github.com/Varshith-p/job-tracker-mern"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub />
            </a>
            <a
              href="https://job-tracker-mern.cyclic.app/"
              target="_blank"
              rel="noreferrer"
            >
              <BiLink />
            </a>
          </div>
          <div>
            <span className="font-medium">Frontend:</span> HTML, CSS, JS,
            React.js
          </div>
          <div>
            <span className="font-medium">Backend: </span> Node.js, Express,
            MongoDB, JWT
          </div>
        </div>
        <div className="bg-white shadow-md p-3 rounded-md">
          <div className="flex w-72 h-48 justify-center items-center">
            <img
              src={Portfolio}
              alt="logo"
              className="rounded-md w-full h-full"
            />
          </div>
          <div className="flex gap-3 items-center pt-2 text-lg">
            <p className="flex-1 font-medium">Portfolio</p>
            <a
              href="https://github.com/Varshith-p/react-portfolio"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub />
            </a>
            <a
              href="https://varshith-portfolio.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <BiLink />
            </a>
          </div>
          <div>
            <span className="font-medium">Frontend:</span> HTML, CSS, JS,
            React.js
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wrapper(Work, "work");
