import React from "react";

export default function Navig() {
  return (
    <div>
      <div className="container">
        <nav>
          <div className="logo">
            <i>
              manpreet singh<span className="letterRed">.</span>
            </i>
          </div>
          <ul className="navItems">
            <li>
              <a href="#">home</a>
            </li>
            <li>
              <a href="#">about</a>
            </li>
            <li>
              <a href="#">skills</a>
            </li>
            <li>
              <a href="#">blog</a>
            </li>
          </ul>
          <div className="socials">
            <a href="#">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fab fa-github"></i>
            </a>
            <a href="#">
              <i className="fa fa-envelope"></i>
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
