import Projects from '../Navbar/Projects/Projects.jsx';
import Intro from './Intro/Intro';

const Navbar = ({ activeProjectId, handleActiveProject }) => {
  return (
    <>
      <div className="container">
        <Intro />
        <Projects activeProjectId={activeProjectId} handleActiveProject={handleActiveProject} />
      </div>
    </>
  );
};

export default Navbar;
