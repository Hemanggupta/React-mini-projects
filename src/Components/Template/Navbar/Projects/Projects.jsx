import { useState } from 'react';
import { projectList } from './Projects.js';
import styles from './Projects.module.css';

const Projects = ({ handleActiveProject }) => {
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
      <div className={`${styles['project-list-container']} shadow`}>
        <ul className={`${styles['project-list']} list-group `}>
          {projects.length &&
            projects.map(project => (
              <li
                onClick={() => HandleActive(project.id)}
                className={`${styles['project-list-item']} list-group-item ${project.isActive ? 'active' : null}`}
                key={project.id}
              >
                {project.name}
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default Projects;
