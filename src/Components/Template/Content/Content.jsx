import Todo from '../../Projects/Todo/Todo';
import UseEffectDemo from '../../Projects/UseEffectDemo/UseEffectDemo';
import './Content.css';

import { Card } from 'primereact/card';

const Content = ({ activeProjectId }) => {
  const renderProject = () => {
    switch (activeProjectId) {
      case 1:
        return <Todo />;
      case 2:
        return <UseEffectDemo />;

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
