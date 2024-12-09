import React from "react";
import "./about.css";
import { useInViewAnimation } from "../../useInViewAnimation";

let desc =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const About = ({ title = "About Us", des = desc }) => {
  let [left, right] = [
    useInViewAnimation("elementLeft"),
    useInViewAnimation("elementRight"),
  ];
  return (
    <div className="about">
      <h2 ref={left.ref} style={{ ...left.style }}>
        {title}
      </h2>
      <p ref={right.ref} style={{ ...right.style }}>
        {des}
      </p>
    </div>
  );
};

export default About;
