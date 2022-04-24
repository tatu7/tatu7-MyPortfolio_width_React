import React from "react";
import "./sidebar.scss";
function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="links">
        <li className="way">
          <a href="https://t.me/Turdaliyev_J_2002" target="__blank">
            <i class="telegram plane icon"></i>
          </a>
        </li>
        <li className="way">
          <a
            href="https://www.instagram.com/p/CSozZJzICPF/?igshid=YmMyMTA2M2Y="
            target="__blank"
          >
            <i class="instagram icon"></i>
          </a>
        </li>
        <li className="way">
          <a href="https://magicsoft.uz/" target="__blank">
            <i class="building icon"></i>
          </a>
        </li>
        <li className="way">
          <a href="https://github.com/tatu7" target="__blank">
            <i class="github icon"></i>
          </a>
        </li>
      </ul>
      <div className="draw"></div>
      <p className="follow">Follow Me</p>
    </div>
  );
}

export default Sidebar;
