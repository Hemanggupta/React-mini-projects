import { useState } from 'react';
import Content from '../Content/Content';
import Navbar from '../Navbar/Navbar.jsx';
import './Container.css';

const Container = () => {
  const [activeProjectId, handleActiveProject] = useState(1);

  return (
    <>
      <section className="d-flex">
        <div className="navbar-container">
          <Navbar activeProjectId={activeProjectId} handleActiveProject={handleActiveProject} />
        </div>
        <div className="content-container">
          <Content activeProjectId={activeProjectId} />
        </div>
      </section>
    </>
  );
};

export default Container;
