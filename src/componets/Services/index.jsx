import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import './services.css';

function Services() {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Service</h2>
      <span className="section__subtitle">What I offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div className="services__big__title">
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              Front-end(React) <br /> Developer
            </h3>
          </div>

          <div className="services__modal">
            <div className="services__modal-content">
              <h3 className="services__modal-title">
                Front-end(React) developer
              </h3>
              <p className="services__modal-description">
                Service with more than 3 months of experience. Worked on a
                project with a team and learned some useful skils&tools
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>

                  <div className="services__modal-info">
                    <TypeAnimation
                      sequence={[
                        'Webpage development',
                        2000,
                        'I develop User Interface',
                        2000,
                        'Enhance functionality',
                        3000,
                        () => {
                          console.log('Done typing!');
                        },
                      ]}
                      wrapper="p"
                      cursor={true}
                      repeat={Infinity}
                      style={{ fontSize: '2em' }}
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
