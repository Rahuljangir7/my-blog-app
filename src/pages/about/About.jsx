import React from "react";
import "./about.css";
import { useInViewAnimation } from "../../useInViewAnimation";

let desc =
  "Welcome to IMPULSE, your go-to destination for exploring insightful, engaging, and dynamic blogs. At IMPULSE, we aim to provide content that inspires, educates, and sparks curiosity in our readers. Our blogs cover a wide range of topics, written with passion and crafted using the latest technology to ensure a seamless browsing experience. Built using React, our platform ensures speed, efficiency, and user-friendly navigation. Whether you're here to learn something new, find inspiration, or simply enjoy a good read, IMPULSE has something for everyone. Dive into our collection and let your journey begin!";
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
