import { RadioButton } from 'primereact/radiobutton';
import { useState } from 'react';
import { toast } from 'react-toastify';
import ContentHeader from '../../Template/ContentHeader/ContentHeader';
import { TodoForm, TodoList } from './index';

export const Todo = () => {
  const setToLocalStorage = todos => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };
  const getFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('todos') ?? '[]');
  };

  const [todos, handleTodos] = useState(getFromLocalStorage());
  const [storage, setStorage] = useState('local');

  const HandleAddTodo = todo => {
    if (todo?.trim()) {
      const newTodos = [...todos, { name: todo.trim(), isCompleted: false }].sort((a, b) => a.isCompleted - b.isCompleted);
      handleTodos(newTodos);
      setToLocalStorage(newTodos);
      toast.success('Todo Added successfully');
    } else {
      toast.warning('Please enter a valid todo');
    }
  };

  return (
    <>
      <center>
        <ContentHeader title={'Todo List'} />
        <div className="storage-options d-flex justify-content-center mt-3">
          <div className="d-flex align-items-center">
            <RadioButton inputId="storage1" name="local" value="local" onChange={e => setStorage(e.value)} checked={storage === 'local'} />
            <label htmlFor="storage1" className="mx-2">
              Local Storage
            </label>
          </div>
          <div className="d-flex align-items-center">
            <RadioButton inputId="storage2" name="db" value="db" onChange={e => setStorage(e.value)} checked={storage === 'db'} />
            <label htmlFor="storage2" className="mx-2">
              Firebase
            </label>
          </div>
        </div>
        <TodoForm HandleAddTodo={HandleAddTodo} />
        <TodoList setToLocalStorage={setToLocalStorage} todos={todos} handleTodos={handleTodos} />
      </center>
    </>
  );
};
