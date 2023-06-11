import React, { useState } from "react";
import Wrapper from "./Wrapper";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail, HiOutlinePhone } from "react-icons/hi";
import { FiMail } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";

const Contact = () => {
  const [isMessageOpen, setMessageOpen] = useState(false);
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessageOpen(true);
    setName("");
    setMail("");
    setPhone("");
    setMessage("");
    setTimeout(() => setMessageOpen(false), 1000);
  };
  return (
    <section className="flex-1">
      <h1 className="text-4xl md:text-8xl mt-3 font-medium md:ml-10 pb-4 text-[#0f172a]">
        Contact
      </h1>
      <h2 className="my-8 text-xl md:text-3xl text-center">
        Take a coffee & chat with me
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        <div className="flex w-4/5 gap-2 md:flex-col items-center py-2 px-2 md:px-4 md:w-auto bg-black text-white rounded-md">
          <div>
            <FaPhoneAlt />
          </div>
          <p>+91 836 776 8266</p>
        </div>
        <div className="flex w-4/5 gap-2 md:flex-col items-center py-2 px-2 md:px-4 md:w-auto bg-black text-white rounded-md">
          <div>
            <HiMail />
          </div>
          <p>varshithpuligadda@gmail.com</p>
        </div>
      </div>
      <div className="w-4/5 md:w-3/5 my-8 mx-auto rounded-md">
        <form
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          onSubmit={handleSubmit}
        >
          {isMessageOpen && (
            <div className="lg:col-span-2 text-center bg-green-400 py-4 rounded-md font-medium">
              Submitted
            </div>
          )}
          <div className="">
            <div className="flex gap-2 items-center p-4 my-2 border-2 border-black rounded-md">
              <CgProfile size={20} />
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="flex-1 focus:outline-0"
              />
            </div>
            <div className="flex gap-2 items-center p-4 my-2 border-2 border-black rounded-md">
              <FiMail size={20} />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                required
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                className="flex-1 focus:outline-0"
              />
            </div>
            <div className="flex gap-2 items-center p-4 my-2 border-2 border-black rounded-md">
              <HiOutlinePhone size={20} />
              <input
                type="tel"
                name="phont"
                id="phone"
                placeholder="Phone"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="flex-1 focus:outline-0"
              />
            </div>
          </div>
          <textarea
            name="message"
            id="message"
            rows="4"
            placeholder="Your message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="p-4 my-2 border-2 border-black rounded-md"
          ></textarea>
          <div>
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded-md md:w-1/2"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Wrapper(Contact, "contact");
