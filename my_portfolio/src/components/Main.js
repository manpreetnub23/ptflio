import React from "react";
import Navig from "./Navig";
export default function Main() {
  //   var typingEffect = new Typed(".multitext", {
  //     strings: ["web developer.", "</coder>"],
  //     loop: true,
  //     typeSpeed: 100,
  //     backSpeed: 80,
  //     backDelay: 1500,
  //   });

  return (
    <div>
      <Navig />
      <div className="containerMain">
        <div className="divis1">
          <div className="leftPart">
            <h4>I am a Web Developer.</h4>
          </div>
        </div>
        <div className="divis2">
          <img src="/images/img1.png" alt="" />
          <div className="blob">
            <span className="animblob"></span>
          </div>
        </div>
        <div className="divis3">
          {/* <div className="rightPart">
            <h4>
              Can write clean,elegant codes.Comfortabale with HTML 5,CSS
              3,Bootstrap and Tailwind CSS
            </h4>
          </div> */}
        </div>
      </div>
    </div>
  );
}
