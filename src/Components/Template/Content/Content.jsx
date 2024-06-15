import Todo from '../../Projects/Todo/Todo';
import './Content.css';

import { Card } from 'primereact/card';

const Content = ({ activeProjectId }) => {
  const renderProject = () => {
    switch (activeProjectId) {
      case 1:
        return <Todo />;

      default:
        break;
    }
  };
  return (
    <>
      <Card className="content-body p-5 me-3 my-3">{renderProject()}</Card>
    </>
  );
};

export default Content;
