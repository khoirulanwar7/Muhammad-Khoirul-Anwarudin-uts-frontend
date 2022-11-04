import React from "react";
import { Footer, Hero, Maps, Navbar, Sales, Stories } from "./components";

import { heroapi, popularsales, toprateslaes, footerAPI, story } from "./data/data";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="relative flex flex-col gap-16">
        <Hero heroapi={heroapi} />
        <Stories story={story} />
        <Sales endpoint={popularsales} ifExists />
        <Sales endpoint={toprateslaes} />
        <Maps className="" />
        <Footer footerAPI={footerAPI} />
      </main>
    </>
  );
};

export default App;
