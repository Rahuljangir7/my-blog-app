import { Link } from "react-router-dom";
import "./post.css";
import { useInViewAnimation } from "../../useInViewAnimation";

// eslint-disable-next-line react/prop-types
export const Post = ({ img, linkName, motion }) => {
  const [left, right] = [
    useInViewAnimation("elementLeft"),
    useInViewAnimation("elementRight"),
  ];

  return (
    <>
      <div
        className="post-img"
        ref={motion == "right" ? right.ref : left.ref}
        style={motion == "right" ? right.style : left.style}
      >
        <Link to={linkName}>
          <img src={img} alt="image" />
        </Link>
      </div>
    </>
  );
};

// eslint-disable-next-line no-unused-vars, react/prop-types
export const PostCon = ({ img, name }) => {
  return (
    <>
      <div className="travel-img">
        <img src={img} alt="travel-image" />
        <div className="img-name">{name}</div>
      </div>
    </>
  );
};
