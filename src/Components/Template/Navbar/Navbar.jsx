import Projects from '../Navbar/Projects/Projects.jsx';
import Intro from './Intro/Intro';

const Navbar = ({ handleActiveProject }) => {
  return (
    <>
      <div className="container">
        <Intro />
        <Projects handleActiveProject={handleActiveProject} />
      </div>
    </>
  );
};

export default Navbar;
