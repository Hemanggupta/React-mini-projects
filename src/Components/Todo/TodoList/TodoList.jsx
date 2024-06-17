import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './TodoList.css';
function TodoList({ todos, handleTodos }) {
  const HandleRemoveTodo = index => {
    todos.splice(index, 1);
    toast.success('Todo removed successfully');
    handleTodos([...todos]);
  };

  const HandleCompleteToggle = index => {
    todos[index].isCompleted = !todos[index].isCompleted;
    todos.sort((a, b) => {
      return a.isCompleted - b.isCompleted;
    });
    handleTodos([...todos]);
  };

  return (
    <>
      <ul className="list-group mx-3 mt-3 todo-list">
        {todos.map((todo, index) => (
          <li className="list-group-item row px-0 align-items-center shadow-sm my-3 todo-list-item" key={index}>
            <span className={`todo col-10 ${todo.isCompleted ? 'text-decoration-line-through' : null}`}>{todo.name}</span>
            <span className="action-btns col-2 p-0 d-flex justify-content-end">
              <em className="text-success cursor-pointer fa-solid fa-square-check" onClick={() => HandleCompleteToggle(index)}></em>
              <em className="text-danger cursor-pointer fa-solid fa-trash" onClick={() => HandleRemoveTodo(index)}></em>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
