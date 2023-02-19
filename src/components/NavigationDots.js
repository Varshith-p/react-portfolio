import React from "react";
import { Link } from "react-scroll";

const NavigationDots = ({ active }) => {
  return (
    <div>
      {["home", "about", "work", "skills", "contact"].map((item, index) => (
        <Link
          to={item}
          smooth={true}
          duration={300}
          className="h-2 w-2 my-3 rounded-full block bg-gray-400 cursor-pointer"
          style={active === item ? { backgroundColor: "#4b5563" } : {}}
        ></Link>
      ))}
    </div>
  );
};

export default NavigationDots;
