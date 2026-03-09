import { ParallaxProvider } from "react-scroll-parallax";
import ProjectItem from "./ProjectItem";

const Projects = ({ data }) => {
  return (
    <section className="project" id="projects">
      <div className="project__container">
        <h2 className="project__title title">
          <span>P</span>rojects
        </h2>

        <ParallaxProvider>
   
          <ul className="project__content work">
            {data?.map((work) => (
              <ProjectItem work={work} key={work.id} />
            ))}
          </ul>
        </ParallaxProvider>
      </div>
    </section>
  );
};

export default Projects;
