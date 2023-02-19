import React from "react";
import Wrapper from "./Wrapper";
import mobile from "../assets/mobile.png";
import email from "../assets/email.png";

const Contact = () => {
  return (
    <section className="flex-1">
      <h1 className="text-4xl md:text-8xl mt-3 font-medium md:ml-10 pb-4 text-[#06b6d4]">
        Contact
      </h1>
      <h2 className="my-8 text-xl md:text-3xl text-center">
        Take a coffee & chat with me
      </h2>
      <div className="grid md:grid-cols-2 items-center">
        <div className="flex flex-col gap-10 items-center">
          <div className="w-72 md:w-80 flex justify-start items-center p-3 bg-sky-100 rounded-md">
            <div className="w-12">
              <img src={mobile} alt="mobile" />
            </div>
            <p className="pl-2">+91 836 776 8266</p>
          </div>
          <div className="w-72 md:w-80 flex items-center p-3 bg-pink-100 rounded-md">
            <div className="w-12">
              <img src={email} alt="email" />
            </div>
            <p className="flex-1 text-center">varshithpuligadda@gmail.com</p>
          </div>
        </div>
        <form
          action="mailto:varshithpuligadda@gmail.com"
          method="post"
          encType="text/plain"
          className="my-3 flex flex-col items-center text-gray-500"
        >
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            required
            className="bg-sky-100 h-14 w-72 md:w-80 p-3 my-4 rounded-md text-black"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            required
            className="bg-sky-100 h-14 w-72 md:w-80 p-3 my-4 rounded-md"
          />
          <textarea
            name="message"
            id="message"
            rows="4"
            placeholder="Your message"
            required
            className="bg-sky-100 rounded-md w-72 my-4 md:w-80 pt-3 pl-2"
          ></textarea>
          <button
            type="submit"
            className="bg-sky-200 rounded-md p-3 text-black"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Wrapper(Contact, "contact");
