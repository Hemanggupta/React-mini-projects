import { useState } from 'react';
import { projectList } from '../../assets/data/Projects.js';
import Content from '..//Content/Content.jsx';
import MobileNavbar from '../MobileNavbar/MobileNavbar.jsx';
import Navbar from '../Navbar/Navbar.jsx';
import './Container.css';
const Container = () => {
  const activeId = projectList.find(project => project.isActive).id;
  const [activeProjectId, handleActiveProject] = useState(activeId);

  return (
    <>
      <section className="app-home-page">
        <div className="navbar-container">
          <div className="lg-nav-container">
            <Navbar activeProjectId={activeProjectId} handleActiveProject={handleActiveProject} />
          </div>
          <div className="mobile-nav-container">
            <MobileNavbar activeProjectId={activeProjectId} handleActiveProject={handleActiveProject} />
          </div>
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
