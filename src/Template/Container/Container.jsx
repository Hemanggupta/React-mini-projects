import { createContext, useState } from 'react';
import { projectList } from '../../assets/data/Projects.jsx';
import Content from '..//Content/Content.jsx';
import MobileNavbar from '../MobileNavbar/MobileNavbar.jsx';
import Navbar from '../Navbar/Navbar.jsx';
import './Container.css';

export const ProjectContext = createContext();

const Container = () => {
  const activeProjectObj = projectList.find(project => project.isActive);
  const [activeProject, handleActiveProject] = useState(activeProjectObj);

  return (
    <>
      <ProjectContext.Provider value={{ activeProject, handleActiveProject }}>
        <section className="app-home-page">
          <div className="navbar-container">
            <div className="lg-nav-container">
              <Navbar />
            </div>
            <div className="mobile-nav-container">
              <MobileNavbar />
            </div>
          </div>
          <div className="content-container">
            {/* <TopNav className="top-nav" activeProjectId={activeProjectId} /> */}
            <Content />
          </div>
        </section>
      </ProjectContext.Provider>
    </>
  );
};

export default Container;
