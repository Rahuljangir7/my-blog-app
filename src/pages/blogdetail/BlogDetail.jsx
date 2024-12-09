import React from "react";
import "./blogdetail.css";
import { useInViewAnimation } from "../../useInViewAnimation";

const BlogDetail = ({ img, date, heading, para }) => {
  let [left, right, bottom, opacity] = [
    useInViewAnimation("elementLeft"),
    useInViewAnimation("elementRight"),
    useInViewAnimation("elementBottom"),
    useInViewAnimation("opacity"),
  ];
  return (
    <div className="blogdetail">
      <img src={img} alt="blog image" ref={opacity.ref} style={opacity.style} />
      <div
        className="blogdetail-container"
        ref={bottom.ref}
        style={{ ...bottom.style }}
      >
        <h2 ref={left.ref} style={{ ...left.style }}>
          {date}
        </h2>
        <h1 ref={right.ref} style={{ ...right.style }}>
          {heading}
        </h1>
        <p ref={left.ref} style={{ ...left.style }}>
          {para}
        </p>
      </div>
    </div>
  );
};

export default BlogDetail;
