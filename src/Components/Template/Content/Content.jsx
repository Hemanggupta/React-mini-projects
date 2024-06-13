import Todo from '../../Pages/Todo/Todo';
import './Content.css';
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
      <div className="container my-3 ">
        <div className="content-body shadow p-3">{renderProject()}</div>
      </div>
    </>
  );
};

export default Content;
