import { Card } from 'primereact/card';
import { ListBox } from 'primereact/listbox';
import { Sidebar } from 'primereact/sidebar';
import { useState } from 'react';
import { projectList } from '../../assets/data/Projects.js';
import logo from '../../assets/my-logo.png';
import './MobileNavbar.css';
function MobileNavbar({ activeProjectId, handleActiveProject }) {
  const [visible, setVisible] = useState(false);
  const DialogSettings = {
    header: 'Projects',
    visible: visible,
    position: 'left',
    draggable: false
  };

  const [projects, useProjects] = useState(projectList);

  const HandleActive = id => {
    let allProjects = [];
    if (id) {
      allProjects = projects.map(project => {
        if (project.id === id) {
          return { ...project, isActive: true };
        }
        return { ...project, isActive: false };
      });
      handleActiveProject(id);
    } else {
      allProjects = [...projects];
    }
    setVisible(false);
    return useProjects(allProjects);
  };

  return (
    <>
      <Card className="mobile-nav">
        <div className="d-flex w-100 align-items-center justify-content-between">
          <em onClick={() => setVisible(true)} className="pi pi-bars pointer" style={{ fontSize: '1.5rem' }}></em>
          <div className="d-flex align-items-center">
            <img className="mobile-logo" src={logo} alt="my-logo" />
            <span className=" fs-5">
              Hemang <span className="last-name">Gupta</span>
            </span>
          </div>
        </div>
      </Card>

      <Sidebar
        {...DialogSettings}
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
        style={{ width: '15rem', height: '100dvh' }}
      >
        <ListBox
          value={activeProjectId}
          onChange={e => HandleActive(e.value)}
          options={projects}
          optionLabel="name"
          optionValue="id"
          className="w-full md:w-14rem project-list"
        />
      </Sidebar>
    </>
  );
}
export default MobileNavbar;
