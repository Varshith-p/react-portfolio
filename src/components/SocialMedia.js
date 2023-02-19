import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

const SocialMedia = () => {
  return (
    <div className="self-end text-gray-500 text-lg md:text-xl">
      <div className="py-1 md:py-2">
        <a href="https://github.com/Varshith-p" target="_blank">
          <AiFillGithub />
        </a>
      </div>
      <div className="py-1 md:py-2">
        <a href="https://www.linkedin.com/in/varshith-p" target="_blank">
          <AiFillLinkedin />
        </a>
      </div>
      <div className="py-1 md:py-2">
        <a href="https://www.instagram.com/varshith_9/" target="_blank">
          <AiFillInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
