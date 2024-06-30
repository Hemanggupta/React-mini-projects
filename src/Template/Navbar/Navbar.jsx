import Projects from '../Navbar/Projects/Projects.jsx';
import Intro from './Intro/Intro';

const Navbar = () => {
  return (
    <>
      <div className="container">
        <Intro />
        <Projects />
      </div>
    </>
  );
};

export default Navbar;
