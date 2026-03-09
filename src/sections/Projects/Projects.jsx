
import ProjectItem from "./ProjectItem";
import { memo } from "react";

const Projects = ({ data }) => {
  return (
    <section className="project" id="projects">
      <div className="project__container">
        <h2 className="project__title title">
          <span>P</span>rojects
        </h2>

          <ul className="project__content work">
            {data?.map((work) => (
              <ProjectItem work={work} key={work.id} />
            ))}
          </ul>

      </div>
    </section>
  );
};

export default memo(Projects);
