import Actions from "../components/Actions";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__header">Frontend Developer</h1>
          <h2 className="hero__subheader">
            Hello, I'm <span>Katya Mazyruk</span>
          </h2>
          <div className="hero__text">
            <p>
              I build modern and responsive web applications using React and
              TypeScript, focusing on clean architecture and reusable
              components.
            </p>
            <p>
              I have hands-on experience working with APIs, managing application
              state, and solving real UI challenges such as dynamic layouts and
              performance optimization.
            </p>
            <p>
              Continuously improving my frontend skills by building projects
              from scratch and applying best practices used in real-world
              development.
            </p>
          </div>
          <div className="hero__inner">
            <Actions />
          </div>
        </div>
        <div className="hero__img">
          <img src="images/hero.webp" alt="author's photo portfolio" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
