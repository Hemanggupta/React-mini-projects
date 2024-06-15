import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
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
        <div className="mt-5 input-form row justify-content-center align-items-center">
          <div className="col-8">
            <InputText value={todoValue} style={{ width: '100%' }} onChange={e => handleTodoValue(e.target.value)} />
          </div>
          <div className="col-2">
            <Button type="submit" label="Add" className="btn btn-success w-100" style={{ minWidth: '100px' }} />
          </div>
        </div>
      </form>
    </>
  );
}

export default TodoForm;
