import { useState } from 'react';
import { projectList } from '../../../../assets/data/Projects.js';
import './Projects.css';

import { Card } from 'primereact/card';

import { ListBox } from 'primereact/listbox';

const Projects = ({ activeProjectId, handleActiveProject }) => {
  const [projects, useProjects] = useState(projectList);

  const HandleActive = id => {
    const allProjects = projects.map(project => {
      if (project.id === id) {
        return { ...project, isActive: true };
      }
      return { ...project, isActive: false };
    });
    handleActiveProject(id);
    return useProjects(allProjects);
  };

  return (
    <>
      <Card>
        <ListBox
          value={activeProjectId}
          onChange={e => HandleActive(e.value)}
          options={projects}
          optionLabel="name"
          optionValue="id"
          className="w-full md:w-14rem project-list"
        />
      </Card>
    </>
  );
};

export default Projects;
