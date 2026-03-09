import { Parallax } from "react-scroll-parallax";

const ProjectItem = ({ work }) => {
  return (
    <li>
      <article className="work__item">
        <a href={work.link} className="work__img" target="_blank">
          <Parallax speed={-13} className="work__parallax">
            <img src={work.image} alt={`Screenshot of ${work.title}`} />
          </Parallax>
        </a>
        <div className="work__content">
          <div className="work__desc work__desc--row">
            <h3 className="work__title">{work.title}</h3>
          </div>
          <div className="work__desc work__desc--row">
            <div className="work__info">Type:</div>
            <div className="work__type">{work.type}</div>
          </div>
          {work.description && (
            <div className="work__desc">
              <div className="work__info">Description:</div>
              <div className="work__description">{work.description}</div>
            </div>
          )}
          <div className="work__desc">
            <div className="work__info">Tech Stack:</div>

            <ul className="work__stack">
              {work.techStack.map((item, id) => (
                <li key={id}>{item}</li>
              ))}
            </ul>
          </div>
          {work.features && (
            <div className="work__desc work__desc--grow">
              <div className="work__info">Features:</div>
              <ul className="work__features">
                {work.features.map((item, id) => (
                  <li key={id}>{item}</li>
                ))}
              </ul>
            </div>
          )}
          <a href={work.link} className=" btn">
            Website
            <svg
              width="24"
              height="24"
              shapeRendering="geometricPrecision"
              textRendering="geometricPrecision"
              imageRendering="optimizeQuality"
              fillRule="evenodd"
              clipRule="evenodd"
              viewBox="0 0 512 243.58"
            >
              <path
                fillRule="nonzero"
                d="M373.57 0 512 120.75 371.53 243.58l-20.92-23.91 94.93-83L0 137.09v-31.75l445.55-.41-92.89-81.02z"
              />
            </svg>
          </a>
        </div>
      </article>
    </li>
  );
};

export default ProjectItem;
