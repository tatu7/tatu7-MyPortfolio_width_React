import React from "react";
import { Fade, Flip, LightSpeed } from "react-reveal";
import "./about.scss";
function About() {
  return (
    <div className="about">
      <LightSpeed right>
        <div className="portfolio__title">About Me</div>
      </LightSpeed>
      <Fade left>
        <div className="horizantal"></div>
      </Fade>
      <div className="about__abote">
        <Fade left>
          <div className="about__abote--left">abote about my self</div>
        </Fade>
        <Flip right>
          <div className="about__abote--right">
            <p className="about__abote--right--description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
              illo hic perferendis suscipit at cumque tenetur maiores pariatur
              consequatur, quis quas itaque iure alias dolorum numquam modi
              autem facilis officiis corporis quae, illum praesentium commodi
              vero eligendi. Architecto, facilis expedita.
            </p>
          </div>
        </Flip>
        <Fade left>
          <div className="about__abote--left">work time line</div>
        </Fade>
        <LightSpeed right>
          <div className="about__abote--right">
            <div className="work__time-line">
              <div className="element">
                <div className="horizantal-1"></div>
                <ul className="works">
                  <li className="work">Web Design</li>
                  <li className="work">MagicSoft</li>
                  <li className="work">2021</li>
                </ul>
              </div>
              <div className="element">
                <div className="horizantal-1"></div>
                <ul className="works">
                  <li className="work">FrontEnd Developer</li>
                  <li className="work">MagicSoft</li>
                  <li className="work">2022</li>
                </ul>
              </div>
              <div className="element">
                <div className="horizantal-1"></div>
                <ul className="works">
                  <li className="work">FullStack Developer</li>
                  <li className="work">MagicSoft</li>
                  <li className="work">2022</li>
                </ul>
              </div>
            </div>
          </div>
        </LightSpeed>
      </div>
    </div>
  );
}

export default About;
