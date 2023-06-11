import React from "react";
import Wrapper from "./Wrapper";

const About = () => {
  return (
    <section className="p-3 flex-1 justify-center mt-6 min-h-full">
      <h1 className="text-4xl md:text-8xl font-medium md:ml-10 pb-4 text-[#0f172a]">
        About me
      </h1>
      <p className="text-lg p-2 md:w-4/5 md:ml-10 md:p-7">
        I'm an ambitious full-stack developer looking for a role in established
        IT company with the oppurtunity to work with the latest technologies on
        a challenging and diverse projects.
      </p>
      <p className="text-lg p-2 md:w-4/5 md:ml-10 md:p-7">
        I am quietly confident, naturally curious and perpetually working in
        improving my skills. I am passionate, expressive, multi-talented spirit
        with a natural ability to entertain and inspire. I like to develop
        expertise in a number of areas over the course of my life and career.
      </p>
      <p className="text-lg p-2 md:w-4/5 md:ml-10 md:p-7">
        I don't like to define myself by the work I've done. I define myself by
        the work I want to do. Skills can be acquired, personality is inherit. I
        prefer to keep learning, continue challenging myself, and do interesting
        things that matter.
      </p>
    </section>
  );
};

export default Wrapper(About, "about");
