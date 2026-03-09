import React from "react";
import Actions from "../../components/Actions";
import Form from "./Form";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact__container">
        <div className="contact__title title">
          <span>C</span>ontact
        </div>
        <div className="contact__contain">
          <div className="contact__info">
            <div className="contact__item">
              <a href="tel:+380935819232" className="contact__link">
                <svg
                  version="1.1"
                  id="Layer_1"
                  x="0px"
                  y="0px"
                  width="118.875px"
                  height="122.877px"
                  viewBox="0 0 118.875 122.877"
                  enableBackground="new 0 0 118.875 122.877"
                >
                  <g>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.432,20.714c9.427,6.476,18.779,12.989,26.673,21.375 C23.58,62.076,41.64,78.045,58.111,87.453c6.448,3.683,9.298,6.265,16.476,5.024l28.268,27.696 C49.657,138.039-10.045,63.084,1.432,20.714L1.432,20.714z M81.874,85.356l6.201-6.298c1.788-1.819,4.74-1.842,6.559-0.053 l22.862,22.509c1.818,1.789,1.841,4.741,0.053,6.559l-6.203,6.299c-1.789,1.818-4.741,1.841-6.56,0.052L81.924,91.915 C80.105,90.127,80.083,87.175,81.874,85.356L81.874,85.356z M7.004,7.467l4.5-5.464c1.929-2.342,5.425-2.68,7.767-0.751 l23.405,19.281c2.342,1.931,2.677,5.425,0.75,7.77l-4.502,5.461c-1.93,2.345-5.425,2.68-7.768,0.751L7.755,15.234 C5.413,13.305,5.073,9.809,7.004,7.467L7.004,7.467z"
                    />
                  </g>
                </svg>
                +38(093)-581-92-32
              </a>
            </div>
            <div className="contact__item">
              <a href="mailto:mazyrukkatya@gmail.com" className="contact__link">
                <svg
                  version="1.1"
                  id="Layer_1"
                  x="0px"
                  y="0px"
                  width="122.88px"
                  height="78.607px"
                  viewBox="0 0 122.88 78.607"
                  enableBackground="new 0 0 122.88 78.607"
                >
                  <g>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M61.058,65.992l24.224-24.221l36.837,36.836H73.673h-25.23H0l36.836-36.836 L61.058,65.992L61.058,65.992z M1.401,0l59.656,59.654L120.714,0H1.401L1.401,0z M0,69.673l31.625-31.628L0,6.42V69.673L0,69.673z M122.88,72.698L88.227,38.045L122.88,3.393V72.698L122.88,72.698z"
                    />
                  </g>
                </svg>
                mazyrukkatya@gmail.com
              </a>
            </div>
            <div className="contact__item">
              <a
                href="https://www.google.com/maps/place/Чернігів,+Україна"
                target="_blank"
                rel="noreferrer"
                className="contact__link"
              >
                <svg
                  version="1.1"
                  id="Layer_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 122.88 117.55"
                >
                  <g>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M78.81,82.78c-4.35,4.77-9.42,9.05-15.12,12.51c-0.7,0.51-1.65,0.58-2.43,0.08 c-8.41-5.35-15.48-11.78-21.03-18.76c-7.66-9.61-12.49-20.27-14.14-30.53c-1.68-10.41-0.11-20.42,5.07-28.56 c2.04-3.22,4.65-6.15,7.83-8.68C46.3,3.01,54.65-0.06,62.96,0c8.01,0.06,15.91,3.05,22.74,9.28c2.4,2.18,4.42,4.68,6.07,7.39 c5.57,9.17,6.77,20.87,4.32,32.73c-2.41,11.71-8.41,23.62-17.28,33.35V82.78L78.81,82.78L78.81,82.78z M25.32,74.54 c1.98,0,3.59,1.61,3.59,3.59c0,1.98-1.61,3.59-3.59,3.59h-6.74l-8.88,28.67h103.22l-9.64-28.67h-5.57c-1.98,0-3.59-1.61-3.59-3.59 c0-1.98,1.61-3.59,3.59-3.59h10.7l14.46,43.01H0l13.32-43.01H25.32L25.32,74.54z M61.38,18.51c9.88,0,17.88,8.01,17.88,17.87 c0,9.88-8.01,17.88-17.88,17.88c-9.88,0-17.87-8-17.87-17.88C43.49,26.51,51.5,18.51,61.38,18.51L61.38,18.51L61.38,18.51z"
                    />
                  </g>
                </svg>
                Chernihiv, Ukraine
              </a>
            </div>
            <div className="contact__actions">
              <Actions />
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
