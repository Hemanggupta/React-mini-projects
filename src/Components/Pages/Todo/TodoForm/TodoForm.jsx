import { useState } from 'react';

function TodoForm({ HandleAddTodo }) {
  const [todoValue, handleTodoValue] = useState('');

  const handleOnSubmit = event => {
    event.preventDefault();
    HandleAddTodo(todoValue);
    handleTodoValue('');
  };
  return (
    <>
      <form onSubmit={event => handleOnSubmit(event)}>
        <div className="mt-5 input-form row justify-content-center">
          <div className="mb-3 col-8">
            <input
              type="text"
              className="form-control"
              value={todoValue}
              onChange={e => handleTodoValue(e.target.value)}
              id="todo-form-item"
              placeholder="Enter a todo here.."
            />
          </div>
          <div className="col-2">
            <button type="submit" className="btn btn-success w-100">
              Add
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default TodoForm;
