import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

const SocialMedia = () => {
  return (
    <div className="self-end md:text-xl">
      <div className="py-1 md:py-2">
        <AiFillGithub />
      </div>
      <div className="py-1 md:py-2">
        <AiFillLinkedin />
      </div>
      <div className="py-1 md:py-2">
        <AiFillInstagram />
      </div>
    </div>
  );
};

export default SocialMedia;
