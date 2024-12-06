import { Link } from "react-router-dom";
import "./links.css";
import { useContext } from "react";
import { AnimatedContext } from "../../context/AnimateContext";
import AnimateOnScroll from "../../AnimateOnScroll";

const Links = () => {
  const { initialValBottom, animateY } = useContext(AnimatedContext);
  return (
    <AnimateOnScroll
      animated={animateY}
      initialVal={initialValBottom}
      tag={
        <div className="links">
          <Link to="/about">FIND OUT MORE</Link>
          <Link to="/contact/">GET IN TOUCH</Link>
        </div>
      }
    />
  );
};

export default Links;
