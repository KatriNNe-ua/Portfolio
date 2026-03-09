
import Actions from '../components/Actions';

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
              I build responsive and user-friendly web interfaces using React,
              TypeScript, JavaScript, HTML and CSS. Currently focused on
              improving my frontend skills and building modern web applications.
            </p>
          </div>
          <div className="hero__inner">
			<Actions/>
  
          </div>
        </div>
        <div className="hero__img">
          <img src="images/hero.webp" alt="author's photo portfolio" />
        </div>
      </div>
    </section>
  );
}

export default Hero