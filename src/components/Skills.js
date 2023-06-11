import React from "react";
import Wrapper from "./Wrapper";
import html from "../assets/html.png";
import css from "../assets/css.png";
import git from "../assets/git.png";
import js from "../assets/javascript.png";
import react from "../assets/react.png";
import redux from "../assets/redux.png";
import java from "../assets/java.png";
import python from "../assets/python.png";
import node from "../assets/node.png";
import linux from "../assets/linux.png";
import mongodb from "../assets/mongodb.png";
import express from "../assets/express.png";

const Skills = () => {
  return (
    <section className="flex-1">
      <h1 className="text-4xl md:text-8xl mt-4 font-medium md:ml-10 pb-4 text-[#0f172a]">
        Skills
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 w-4/5 m-auto font-medium my-4 md:my-14 justify-center items-center gap-y-8">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-white shadow-md flex justify-center items-center">
            <img src={html} alt="html" width="80%" />
          </div>
          <p>HTML</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-white shadow-md flex justify-center items-center">
            <img src={css} alt="css" width="80%" />
          </div>
          <p>CSS</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-white shadow-md flex justify-center items-center">
            <img src={js} alt="js" width="80%" />
          </div>
          <p>JS</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-white shadow-md flex justify-center items-center">
            <img src={git} alt="git" width="80%" />
          </div>
          <p>Git</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-white shadow-md flex justify-center items-center">
            <img src={mongodb} alt="mongodb" width="80%" />
          </div>
          <p>MongoDB</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-white shadow-md flex justify-center items-center">
            <img src={express} alt="express" width="80%" />
          </div>
          <p>Express</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-white shadow-md flex justify-center items-center">
            <img src={react} alt="react" width="80%" />
          </div>
          <p>React</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-white shadow-md flex justify-center items-center">
            <img src={node} alt="node" width="80%" />
          </div>
          <p>Node</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-white shadow-md flex justify-center items-center">
            <img src={redux} alt="redux" width="80%" />
          </div>
          <p>Redux toolkit</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-white shadow-md flex justify-center items-center">
            <img src={java} alt="java" width="80%" />
          </div>
          <p>Java</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-white shadow-md flex justify-center items-center">
            <img src={python} alt="python" width="80%" />
          </div>
          <p>Python</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-white shadow-md flex justify-center items-center">
            <img src={linux} alt="linux" width="80%" />
          </div>
          <p>Linux</p>
        </div>
      </div>
    </section>
  );
};

export default Wrapper(Skills, "skills");
