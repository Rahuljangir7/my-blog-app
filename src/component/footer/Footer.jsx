import { Link } from "react-router-dom";
import "./footer.css";
import { FaRegCopyright } from "react-icons/fa";
import { useInViewAnimation } from "../../useInViewAnimation";

const Footer = () => {
  let bottom = useInViewAnimation("elementBottom");
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="footer-links">
            <div
              className="logo-name"
              ref={bottom.ref}
              style={{ ...bottom.style }}
            >
              IMPULSE
            </div>
            <div
              className="more-info"
              ref={bottom.ref}
              style={{ ...bottom.style }}
            >
              <h5>MORE INFO</h5>
              <Link to="/about">ABOUT</Link>
              <a href="#">INFO</a>
              <a href="#">FAQ</a>
            </div>
            <div
              className="helpful-links"
              ref={bottom.ref}
              style={{ ...bottom.style }}
            >
              <h5>HELPFUL LINKS</h5>
              <Link to="/about">ABOUT</Link>
              <a href="#">INFO</a>
              <a href="#">FAQ</a>
            </div>
            <div
              className="findoutmore"
              ref={bottom.ref}
              style={{ ...bottom.style }}
            >
              <h5>FIND OUT MORE</h5>
              <Link to="/about">ABOUT</Link>
              <a href="#">INFO</a>
              <a href="#">FAQ</a>
            </div>
          </div>
          <div
            className="footer-content"
            ref={bottom.ref}
            style={{ ...bottom.style }}
          >
            <FaRegCopyright /> 2021 DESIGN BY NOVOLIO. IMAGES BY UNSPLASH
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
