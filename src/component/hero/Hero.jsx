import "./hero.css";
import Button from "../../utility/button/Button";
import { Link } from "react-router-dom";
import { useInViewAnimation } from "../../useInViewAnimation";

const Hero = () => {
  const elementX = useInViewAnimation("elementLeft");
  const elementX2 = useInViewAnimation("elementRight");
  return (
    <>
      <header>
        <h2 ref={elementX.ref} style={{ ...elementX.style }}>
          A taste of every lifestyle
        </h2>
        <Link to="/blogpage" ref={elementX2.ref} style={{ ...elementX2.style }}>
          <Button className="btn-1" name="READ THE BLOG" />
        </Link>
      </header>
    </>
  );
};

export default Hero;
