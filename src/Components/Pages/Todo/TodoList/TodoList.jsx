import styles from './TodoList.module.css';
function TodoList({ todos, handleTodos }) {
  const HandleRemoveTodo = index => {
    todos.splice(index, 1);
    handleTodos([...todos]);
  };

  const handleCompleteToggle = index => {
    todos[index].isCompleted = !todos[index].isCompleted;
    todos.sort((a, b) => {
      return a.isCompleted - b.isCompleted;
    });
    handleTodos([...todos]);
  };
  return (
    <>
      <ul className={`list-group mx-3 mt-3 ${styles['todo-list']}`}>
        {todos.map((todo, index) => (
          <li className={`list-group-item row px-0 align-items-center shadow-sm my-3 ${styles['todo-list-item']}`} key={index}>
            <span className={`todo col-10 ${todo.isCompleted ? 'text-decoration-line-through' : null}`}>{todo.name}</span>
            <span className={`${styles['action-btns']} col-2 p-0 d-flex justify-content-end`}>
              <em className="text-success cursor-pointer fa-solid fa-square-check" onClick={() => handleCompleteToggle(index)}></em>
              <em className="text-danger cursor-pointer fa-solid fa-trash" onClick={() => HandleRemoveTodo(index)}></em>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
