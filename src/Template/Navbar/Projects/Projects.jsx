import { useState } from 'react';
import { projectList } from '../../../assets/data/Projects.jsx';
import './Projects.css';

import { Card } from 'primereact/card';
import { ListBox } from 'primereact/listbox';
import useProjectContext from '../../Container/index.js';

const Projects = () => {
  const [projects, useProjects] = useState(projectList);
  const { activeProject, handleActiveProject } = useProjectContext();

  const HandleActive = id => {
    let allProjects = [];
    if (id) {
      allProjects = projects.map(project => {
        if (project.id === id) {
          return { ...project, isActive: true };
        }
        return { ...project, isActive: false };
      });
      const newActiveProject = allProjects.find(project => project.id === id);
      handleActiveProject(newActiveProject);
    } else {
      allProjects = [...projects];
    }
    return useProjects(allProjects);
  };

  return (
    <>
      <Card>
        <ListBox
          value={activeProject.id}
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
