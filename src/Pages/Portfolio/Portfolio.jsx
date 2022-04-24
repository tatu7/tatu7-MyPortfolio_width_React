import React from "react";
import { Fade, LightSpeed } from "react-reveal";
import "./portfolio.scss";
import "../../main.scss";

function Portfolio() {
  return (
    <div className="portfolio">
      <LightSpeed right>
        <div className="portfolio__title">Portfolio</div>
      </LightSpeed>
      <Fade left>
        <div className="horizantal"></div>
      </Fade>
      <div className="images">
        <div className="img">
          <Fade bottom>
            <div className="img__modal">
              <p className="img__modal--description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
              <button className="img__modal--btn">view project</button>
            </div>
          </Fade>
          <img src={require("./images/porfolio-1.jpg")} alt="" />
        </div>
        <div className="img">
          <Fade bottom>
            <div className="img__modal">
              <p className="img__modal--description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
              <button className="img__modal--btn">view project</button>
            </div>
          </Fade>
          <img src={require("./images/porfolio-12.jpg")} alt="" />
        </div>
        <div className="img">
          <Fade bottom>
            <div className="img__modal">
              <p className="img__modal--description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
              <button className="img__modal--btn">view project</button>
            </div>
          </Fade>
          <img src={require("./images/porfolio-3.jpg")} alt="" />
        </div>
        <div className="img">
          <Fade bottom>
            <div className="img__modal">
              <p className="img__modal--description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
              <button className="img__modal--btn">view project</button>
            </div>
          </Fade>
          <img src={require("./images/porfolio-5.jpg")} alt="" />
        </div>
        <div className="img">
          <Fade bottom>
            <div className="img__modal">
              <p className="img__modal--description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
              <button className="img__modal--btn">view project</button>
            </div>
          </Fade>
          <img src={require("./images/porfolio-7.jpg")} alt="" />
        </div>
        <div className="img">
          <Fade bottom>
            <div className="img__modal">
              <p className="img__modal--description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
              <button className="img__modal--btn">view project</button>
            </div>
          </Fade>
          <img src={require("./images/porfolio-6.jpg")} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
