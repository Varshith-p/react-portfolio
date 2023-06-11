import React from "react";
import NavigationDots from "./NavigationDots";
import SocialMedia from "./SocialMedia";

const Wrapper = (Component, id) =>
  function HOC() {
    return (
      <section
        id={id}
        className="w-full p-3 md:p-6 min-h-full flex items-center"
      >
        <SocialMedia />
        <Component />
        <NavigationDots active={id} />
      </section>
    );
  };

export default Wrapper;
