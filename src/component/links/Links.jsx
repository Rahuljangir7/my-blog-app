import { Link } from 'react-router-dom';
import './links.css';
import { useInViewAnimation } from '../../useInViewAnimation';

const Links = () => {
  const bottom = useInViewAnimation("elementBottom");
  return (
    <>
        <div className="links" ref={bottom.ref} style={{...bottom.style}}>
            <Link to="/about">FIND OUT MORE</Link>
            <Link to="/contact/">GET IN TOUCH</Link>
        </div>
    </>
  )
}

export default Links