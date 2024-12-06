import "./hero.css";
import Button from "../../utility/button/Button";
import { Link } from "react-router-dom";
import AnimateOnScroll from "../../AnimateOnScroll";
import { useContext } from "react";
import { AnimatedContext } from "../../context/AnimateContext";

const Hero = () => {
  const { animateX, initialValLeft, initialValRight } = useContext(AnimatedContext);
  return (
    <>
      <header>
        <AnimateOnScroll
          initialVal={initialValLeft}
          animated={animateX}
          tag={<h2>A taste of every lifestyle</h2>}
        />

        <AnimateOnScroll
          initialVal={initialValRight}
          animated={animateX}
          tag={
            <Link to="/blogpage">
              <Button className="btn-1" name="READ THE BLOG" />
            </Link>
          }
        />
      </header>
    </>
  );
};

export default Hero;
