import React from "react";
import Hero from "../sections/Hero";
import Projects from "../sections/Projects/Projects";
import { myProjects } from "../data/myProjects";
import Contact from "../sections/contact/Contact";


const Main = () => {
  return (
    <main className="page">
      <div className="bg"></div>
      <Hero />
	  <Projects data={myProjects}/>
	<Contact/>
    </main>
  );
};

export default Main;
