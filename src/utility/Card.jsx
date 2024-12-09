import React from "react";
import { FaAngleRight } from "react-icons/fa";
import "./card.css";
import { Link } from "react-router-dom";
import { useInViewAnimation } from "../useInViewAnimation";

const Card = ({ img, date, heading, para, linkName, blogPageLink }) => {
  let [left, right, opacity] = [
    useInViewAnimation("elementLeft"),
    useInViewAnimation("elementRight"),
    useInViewAnimation("opacity"),
  ];
  return (
    <div className="card-section">
      <Link to={blogPageLink}>
        <img
          src={img}
          alt="blogpage image"
          ref={opacity.ref}
          style={{ ...opacity.style }}
        />
      </Link>
      <div className="cardBox">
        <div ref={left.ref} style={{ ...left.style }}>
          {date}
        </div>
        <h3 ref={right.ref} style={{ ...right.style }}>
          {heading}
        </h3>
        <p ref={left.ref} style={{ ...left.style }}>
          {para}
        </p>
        <h6 ref={right.ref} style={{ ...right.style }}>
          <Link to={linkName}>
            READ ARTICLE <FaAngleRight />
          </Link>
        </h6>
      </div>
    </div>
  );
};

export default Card;
