import React from 'react'
import Social from '../components/Social';
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
            {/* <a href="files/CV.zip" download="CV_Mazuryk.zip" className="btn">
              Download CV
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </a>
            <Social /> */}
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