import { Link } from "react-router-dom";
import Button from "../../utility/button/Button";
import "./blog.css";

import { useInViewAnimation } from "../../useInViewAnimation";

// eslint-disable-next-line react/prop-types
export const Blog = ({ title, para, linkName, motion }) => {
  const [left, right] = [
    useInViewAnimation("elementLeft"),
    useInViewAnimation("elementRight"),
  ];
  return (
    <>
      <div
        className="blog"
        ref={motion === "right" ? right.ref : left.ref}
        style={motion === "right" ? right.style : left.style}
      >
        <div className="line"></div>
        <h3>{title}</h3>
        <p>{para}</p>
        <Link to={linkName}>
          <Button name="READ MORE" />
        </Link>
      </div>
    </>
  );
};

// eslint-disable-next-line react/prop-types
export const Travel = ({ title, para }) => {
  const [left, right] = [
    useInViewAnimation("elementLeft"),
    useInViewAnimation("elementRight"),
  ];
  return (
    <>
      <div className="blog travel">
        <div className="line"></div>
        <h3 ref={left.ref} style={{ ...left.style }}>
          {title}
        </h3>
        <p ref={right.ref} style={{ ...right.style }}>
          {para}
        </p>
        <Link to="/about" ref={left.ref} style={{ ...left.style }}>
          <Button name={"FIND OUT MORE"} />
        </Link>
      </div>
    </>
  );
};
