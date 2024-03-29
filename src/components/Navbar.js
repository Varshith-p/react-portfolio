import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../assets/logo.svg";
import { HiMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [isMenuOpen, toggleMenu] = useState(false);
  return (
    <header className="relative p-6">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <img src={logo} alt="portfolio logo" />
        </div>
        <nav className="hidden md:flex space-x-8 text-lg">
          {["home", "about", "work", "skills", "contact"].map((item) => (
            <li key={`link-${item}`} className="list-none">
              {/* <a href={`#${item}`}>{item}</a> */}
              <Link
                to={item}
                duration={300}
                smooth={true}
                className="capitalize before:block before:w-2 before:h-2 before:mx-auto before:rounded-full  hover:before:bg-black cursor-pointer"
              >
                {item}
              </Link>
            </li>
          ))}
        </nav>
        {!isMenuOpen ? (
          <HiMenu
            className="pt-2 text-3xl md:hidden"
            onClick={() => toggleMenu(!isMenuOpen)}
          />
        ) : (
          <MdClose
            className="pt-2 text-3xl md:hidden"
            onClick={() => toggleMenu(!isMenuOpen)}
          />
        )}
      </div>
      <div className={(isMenuOpen ? "block" : "hidden") + " md:hidden"}>
        <nav className="absolute flex flex-col items-center self-end py-6 mt-6 space-y-6 bg-white drop-shadow-md left-6 right-6">
          {["home", "about", "work", "skills", "contact"].map((item) => (
            <li key={`link-${item}`} className="list-none">
              <Link
                to={item}
                duration={300}
                smooth={true}
                className="capitalize"
                onClick={() => toggleMenu(!isMenuOpen)}
              >
                {item}
              </Link>
            </li>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
