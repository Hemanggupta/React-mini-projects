import useProjectContext from '../Container';
import './Content.css';

import { Card } from 'primereact/card';

const Content = () => {
  const { activeProject } = useProjectContext();
  return (
    <>
      <Card className="content-body p-md-3 me-md-3 my-md-3">{activeProject.component}</Card>
    </>
  );
};

export default Content;
