import React, { useEffect, useState } from "react";
import Hero from "../sections/Hero";
import Projects from "../sections/Projects/Projects";
import { myProjects } from "../data/myProjects";
import Contact from "../sections/contact/Contact";

const Main = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className={`page ${show ? "show" : ""}`}>
      <div className="bg">
        <img src="images/bg.webp" alt="background" />
      </div>
      <Hero />
      <Projects data={myProjects} />
      <Contact />
    </main>
  );
};

export default Main;
