import { Checkbox } from 'primereact/checkbox';
import { Tooltip } from 'primereact/tooltip';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './TodoList.css';
function TodoList({ todos, updateList }) {
  const HandleRemoveTodo = index => {
    todos.splice(index, 1);
    updateList([...todos]);
    toast.success('Todo removed successfully');
  };

  const HandleCompleteToggle = index => {
    todos[index].isCompleted = !todos[index].isCompleted;
    todos.sort((a, b) => {
      return a.isCompleted - b.isCompleted;
    });
    updateList([...todos]);
  };

  return (
    <>
      <Tooltip target=".fa-trash" />
      <ul className="list-group mx-3 mt-3 todo-list">
        {todos.map((todo, index) => (
          <li className="list-group-item row px-0 align-items-center shadow-sm my-2 todo-list-item" key={index}>
            <span className="col-1">
              <Checkbox checked={todo.isCompleted} onChange={() => HandleCompleteToggle(index)} />
            </span>
            <span className={`todo col-10 ${todo.isCompleted && 'text-decoration-line-through'}`}>{todo.name}</span>
            <em
              className="col-1 text-danger cursor-pointer p-0 fa-solid fa-trash text-center"
              onClick={() => HandleRemoveTodo(index)}
              data-pr-tooltip="Remove"
              data-pr-position="left"
              role="button"
              tabIndex="0"
            ></em>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
