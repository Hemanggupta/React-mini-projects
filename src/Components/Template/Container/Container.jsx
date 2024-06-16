import { useState } from 'react';
import { projectList } from '../../../assets/data/Projects.js';
import Content from '../Content/Content';
import Navbar from '../Navbar/Navbar.jsx';
import './Container.css';
const Container = () => {
  const activeId = projectList.find(project => project.isActive).id;
  const [activeProjectId, handleActiveProject] = useState(activeId);

  return (
    <>
      <section className="d-flex">
        <div className="navbar-container">
          <Navbar activeProjectId={activeProjectId} handleActiveProject={handleActiveProject} />
        </div>
        <div className="content-container">
          {/* <TopNav className="top-nav" activeProjectId={activeProjectId} /> */}
          <Content activeProjectId={activeProjectId} />
        </div>
      </section>
    </>
  );
};

export default Container;
