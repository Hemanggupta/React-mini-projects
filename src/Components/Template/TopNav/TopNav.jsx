import { Card } from 'primereact/card';
import { projectList } from '../../../assets/data/Projects';

import { ToggleButton } from 'primereact/togglebutton';
import { useState } from 'react';
import './TopNav.css';

const TopNav = ({ activeProjectId }) => {
  const [checked, setChecked] = useState(false);

  const getProjectName = () => {
    return projectList.find(project => project.id === activeProjectId).name;
  };

  return (
    <>
      <Card className="mt-3 me-3" style={{ height: '60px', maxHeight: '60px' }}>
        <div className="d-flex justify-content-between align-items-center">
          <div>{getProjectName()}</div>
          <div>
            <ToggleButton
              onLabel="Light"
              offLabel="Dark"
              onIcon="pi pi-sun"
              offIcon="pi pi-moon"
              checked={checked}
              onChange={e => setChecked(e.value)}
              className="w-9rem"
            />
          </div>
        </div>
      </Card>
    </>
  );
};
export default TopNav;
