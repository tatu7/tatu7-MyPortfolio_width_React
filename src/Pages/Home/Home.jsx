import React from "react";
import { Bounce } from "react-reveal";
import "./home.scss";
function Home() {
  return (
    <div className="home">
      <div className="home__left">
        <h2 className="title">I'm Jo`raqo`zi Turdaliyev</h2>
        <h3 className="title--2">I'm Full Stack Developer and Web Design</h3>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas quam
          quod, fugit natus odio quidem explicabo non suscipit repellat,
          deleniti harum at autem!
        </p>
        <Bounce left>
          <div className="buttons">
            <a
              className="btn btn--left"
              href="https://joraqozi-portfolio.netlify.app/"
              target="__blank"
            >
              My Portfolio
            </a>
            <a
              className="btn btn--right"
              href="https://joraqozi-urls.netlify.app/"
              target="__blank"
            >
              Contact Me
            </a>
          </div>
        </Bounce>
      </div>
      <div className="home__right"></div>
    </div>
  );
}

export default Home;
