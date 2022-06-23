import React from "react";
import { Fade } from "react-reveal";
import "./navbar.scss";
function MainNav(props) {
  const { theme, setTheme, color, setColor } = props;
  return (
    <Fade bottom>
      <div className="nav--main--logo"> JO`RAQO`ZI</div>
      <div className="nav--mayin--btn">
        <div className="nav--theme">
          {color ? (
            <i onClick={() => setColor(!color)} class="circle icon"></i>
          ) : (
            <i onClick={() => setColor(!color)} class="circle outline icon"></i>
          )}
        </div>
        <div className="nav--btn--1">
          <i onClick={() => setTheme(!theme)} class="bars icon"></i>
        </div>
      </div>
    </Fade>
  );
}

export default MainNav;
