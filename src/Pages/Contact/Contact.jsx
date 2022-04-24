import React from "react";
import { Fade, LightSpeed } from "react-reveal";
import "./contact.scss";
function Contact() {
  return (
    <div className="contact">
      <LightSpeed right>
        <div className="portfolio__title">Contact Me</div>
      </LightSpeed>
      <Fade left>
        <div className="horizantal"></div>
      </Fade>
      <div className="contact__form">
        <div className="contact__form--left">
          <h3 className="contact__form--left--heading">Get in touch</h3>
          <p className="contact__form--left--email">
            Email: <span>turdaliyevjoraqozi@gmail.com</span>
          </p>
          <p className="contact__form--left--phone">
            Phone: <span>(+998) 90 484 58 55</span>
          </p>
          <p className="contact__form--left--paragraf">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            dignissimos dolore explicabo? Corrupti in sint id? Suscipit
            laudantium cum, nihil qui assumenda labore quibusdam totam facere ut
            tempora. Voluptatem, consequuntur!
          </p>
        </div>
        <div className="contact__form--right">
          <form>
            <div className="contact__form--right--inputs">
              <div className="contact__form--right--input">
                <input required type="text" placeholder="Name" />
              </div>
              <div className="contact__form--right--input">
                <input required type="email" placeholder="Email" />
              </div>
            </div>
            <div className="contact__form--right--text">
              <textarea cols="30" rows="10" placeholder="Message"></textarea>
            </div>
            <div className="contact__form--right--btn">
              <button>Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
