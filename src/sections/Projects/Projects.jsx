import { filters } from "../../data/myProjects";
import ProjectItem from "./ProjectItem";
import { memo, useRef, useState } from "react";

const Projects = ({ data }) => {
  const [filter, setFilter] = useState(() => filters[0]);
  const [numberPage, setNumberPage] = useState(1);

  const sectionRef = useRef(null);

  let list;

  if (data) {
    if (filter === filters[1]) list = data.filter((el) => el.filter === filter);
    else if (filter === filters[2])
      list = data.filter((el) => el.filter === filter);
    else list = data;
  }

  const perPage = 5;

  const count = Math.ceil(list.length / perPage);

  const start = (numberPage - 1) * perPage;
  const end = start + perPage;

  const handlePageChange = (page) => {
    setNumberPage(page);

    requestAnimationFrame(() => {
      window.scrollTo({
        top: sectionRef.current.offsetTop,
        behavior: "smooth",
      });
    });
  };

  const changeFilter = (f) => {
    setFilter(f);
    setNumberPage(1);
  };

  return (
    <section ref={sectionRef} className="project" id="projects">
      <div className="project__container">
        <h2 className="project__title title">
          <span>P</span>rojects
        </h2>
        <ul className="project__filter filter">
          {filters.map((f) => (
            <li className="filter__item" key={f}>
              <button
                onClick={() => changeFilter(f)}
                className={
                  filter === f
                    ? "filter__btn filter__btn--active"
                    : "filter__btn"
                }
              >
                {f}
              </button>
            </li>
          ))}
        </ul>
        <ul className="project__content work">
          {list.slice(start, end).map((work) => (
            <ProjectItem work={work} key={work.id} />
          ))}
        </ul>
        {count > 1 && (
          <ul className="project__number number">
            <li className="number__item">
              <button
                disabled={numberPage === 1}
                className="number__btn"
                onClick={() => handlePageChange(numberPage - 1)}
              >
                prev
              </button>
            </li>

            {Array.from({ length: count }, (_, i) => (
              <li className="number__item" key={i}>
                <button
                  onClick={() => handlePageChange(i + 1)}
                  className={
                    i + 1 === numberPage
                      ? "number__btn number__btn--active"
                      : "number__btn"
                  }
                >
                  {i + 1}
                </button>
              </li>
            ))}

            <li className="number__item">
              <button
                disabled={numberPage === count}
                className="number__btn"
                onClick={() => handlePageChange(numberPage + 1)}
              >
                next
              </button>
            </li>
          </ul>
        )}
      </div>
    </section>
  );
};

export default memo(Projects);
