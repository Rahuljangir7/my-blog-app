import "./navbar.css";
import { GiCancel } from "react-icons/gi";
import { Outlet, Link } from "react-router-dom";
import { useInViewAnimation } from "../../useInViewAnimation";

const NavPage = ({ navPage }) => {
  let [left, right] = [
    useInViewAnimation("elementLeft"),
    useInViewAnimation("elementRight"),
  ];
  return (
    <>
      <div className="navpage">
        <GiCancel onClick={navPage} />
        <ul>
          <li ref={left.ref} style={{ ...left.style }}>
            <Link onClick={navPage} to="/">
              HOME
            </Link>
          </li>
          <li ref={right.ref} style={{ ...right.style }}>
            <Link onClick={navPage} to="/about">
              ABOUT
            </Link>
          </li>
          <li ref={left.ref} style={{ ...left.style }}>
            <Link onClick={navPage} to="/blogpage">
              BLOG
            </Link>
          </li>
          <li ref={right.ref} style={{ ...right.style }}>
            <Link onClick={navPage} to="/contact">
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default NavPage;
