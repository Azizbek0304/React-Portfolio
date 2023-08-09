import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import './qualification.css';

function Qualification() {
  const [activeTab, setActiveTab] = useState(1);
  const toggleTab = (index) => {
    setActiveTab(index);
  };

  const tabsData = [
    {
      title: 'Education',
      icon: 'uil-graduation-cap',
      content: [
        {
          id: 1,
          title: 'Front-end dev. - Fintech',
          subtitle: 'Tashkent - Education centre',
          date: '2022 - 2023',
        },
        {
          id: 2,
          title: 'Financial management - MDIST',
          subtitle: 'Tashkent - University',
          date: '2021 - present',
        },
        // Add more education content here if needed
      ],
    },
    {
      title: 'Experience',
      icon: 'uil-briefcase-alt',
      content: [
        {
          id: 1,
          title: 'Front-end dev.(intern) - Fintech Hub',
          subtitle: 'Tashkent - innovation centre',
          date: '2022 - 2023',
        },
        // Add more experience content here if needed
      ],
    },
  ];

  return (
    <section className="qualification section" id="portfolio">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          {tabsData.map((tab, index) => (
            <div
              key={index}
              onClick={() => toggleTab(index + 1)}
              className={`qualification__button button-flex ${
                activeTab === index + 1 ? 'qualification__active' : ''
              }`}
            >
              <i className={`uil ${tab.icon} qualification__icon`}></i>
              {tab.title}
            </div>
          ))}
        </div>
        <div className="qualification__sections">
          {tabsData.map((tab, index) => (
            <div
              key={index}
              className={`qualification__content ${
                activeTab === index + 1 ? 'qualification__content-active' : ''
              }`}
            >
              {tab.content.map((item) => (
                <>
                  {item.id % 2 === 0 ? (
                    <div className="qualification__data" key={item.id}>
                      <div></div>

                      <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                      </div>
                      <div>
                        <h3 className="qualification__title">
                          <TypeAnimation
                            key={activeTab}
                            delay={6000}
                            sequence={[item.title, 2000]}
                            wrapper="span"
                            cursor={false}
                            repeat={0}
                            style={{ display: 'inline-block' }}
                          />
                        </h3>
                        <span className="qualification__subtitle">
                          <TypeAnimation
                            key={activeTab}
                            delay={8000}
                            sequence={[item.subtitle, 2000]}
                            wrapper="span"
                            cursor={false}
                            repeat={0}
                            style={{ display: 'inline-block' }}
                          />
                        </span>
                        <div className="qualification__calendar">
                          <i className="uil uil-calendar-alt"></i>{' '}
                          <TypeAnimation
                            key={activeTab}
                            delay={10000}
                            sequence={[item.date, 2000]}
                            wrapper="span"
                            cursor={false}
                            repeat={0}
                            style={{ display: 'inline-block' }}
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="qualification__data" key={item.id}>
                      <div>
                        <h3 className="qualification__title">
                          <TypeAnimation
                            key={activeTab}
                            sequence={[item.title, 2000]}
                            wrapper="span"
                            cursor={false}
                            repeat={0}
                            style={{ display: 'inline-block' }}
                          />
                        </h3>
                        <span className="qualification__subtitle">
                          <TypeAnimation
                            key={activeTab}
                            sequence={[item.subtitle, 2000]}
                            wrapper="span"
                            cursor={false}
                            repeat={0}
                            style={{
                              display: 'inline-block',
                              animationDelay: '2s',
                            }}
                          />
                        </span>
                        <div className="qualification__calendar">
                          <i className="uil uil-calendar-alt"></i>{' '}
                          <TypeAnimation
                            key={activeTab}
                            sequence={[item.date, 2000]}
                            wrapper="span"
                            cursor={false}
                            repeat={0}
                            style={{
                              display: 'inline-block',
                              animationDelay: '4s',
                            }}
                          />
                        </div>
                      </div>
                      <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                      </div>
                    </div>
                  )}
                </>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Qualification;
