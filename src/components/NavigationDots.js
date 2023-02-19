import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div>
      {["home", "about", "work", "skills", "contact"].map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="h-2 w-2 my-3 rounded-full block bg-gray-400"
          style={active === item ? { backgroundColor: "#4b5563" } : {}}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
