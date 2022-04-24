import { Fade } from "react-reveal";
import { NavLink } from "react-router-dom";
import "./navbar.scss";
function Navbar(props) {
  const { theme, setTheme, color, setColor } = props;
  return (
    <Fade top>
      <div className="nav">
        <div className="nav--head">
          <div className="nav--logo"> JO`RAQO`ZI</div>
          <div className="nav--btn">
            <div className="nav--theme">
              {color ? (
                <i onClick={() => setColor(!color)} class="circle icon"></i>
              ) : (
                <i
                  onClick={() => setColor(!color)}
                  class="circle outline icon"
                ></i>
              )}
            </div>
            <div className="nav--btn--1">
              <i onClick={() => setTheme(!theme)} class="close icon"></i>
            </div>
          </div>
        </div>
        <ul className="menus">
          <li className="link">
            <NavLink to="/" onClick={() => setTheme(!theme)}>
              HOME
            </NavLink>
          </li>
          <li className="link">
            <NavLink to="/portfolio" onClick={() => setTheme(!theme)}>
              PORTFOLIO
            </NavLink>
          </li>
          <li className="link">
            <NavLink to="/about" onClick={() => setTheme(!theme)}>
              ABOUT ME
            </NavLink>
          </li>
          <li className="link">
            <NavLink to="/contact" onClick={() => setTheme(!theme)}>
              CONTACT ME
            </NavLink>
          </li>
        </ul>

        <div className="nav__footer">
          <ul className="nav__footer--menus">
            <li className="nav__footer-link">
              <a href="https://github.com/tatu7">Telegram</a>
            </li>
            <li className="nav__footer-link">
              <a href="https://github.com/tatu7">Instagram</a>
            </li>
            <li className="nav__footer-link">
              <a href="https://github.com/tatu7">GitHub</a>
            </li>
          </ul>
          <div className="nav__footer--copy">copyright_JO`RAQO`ZI</div>
        </div>
      </div>
    </Fade>
  );
}

export default Navbar;
