import React from "react";
import Wrapper from "./Wrapper";
import avatar from "../assets/avatar.svg";

const Header = () => {
  return (
    <div className="flex flex-1 justify-around align-middle mt-6 p-3 md:p-7 md:justify-center">
      <div className="flex flex-col gap-3">
        <div className="flex p-3 shadow-md max-w-max rounded-lg bg-white md:text-3xl">
          👋
          <div className="ml-3">
            <p className="text-xs text-gray-500">Hello, I am</p>
            <h1>Varshith</h1>
          </div>
        </div>
        <div className="p-3 pt-5 text-xs text-gray-500 shadow-md max-w-max rounded-lg bg-white md:text-lg">
          <p>Web Developer</p>
          <p>Designer</p>
        </div>
      </div>
      <div className="">
        <img className="w-64 md:w-72 lg:w-96" src={avatar} alt="avatar" />
      </div>
    </div>
  );
};

export default Wrapper(Header, "home");
