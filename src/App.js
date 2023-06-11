import React from "react";
import { Navbar, Header, About, Work, Skills, Contact } from "./components";

const App = () => {
  return (
    <div className="mx-auto">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;
