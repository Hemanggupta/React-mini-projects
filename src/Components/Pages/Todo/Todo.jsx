import { useState } from 'react';
import ContentHeader from '../../Template/ContentHeader/ContentHeader';
import './Todo.css';
import TodoForm from './TodoForm/TodoForm';
import TodoList from './TodoList/TodoList';
const Todo = () => {
  const [todos, handleTodos] = useState([]);

  const HandleAddTodo = todo => {
    if (todo?.trim()) {
      handleTodos([
        ...todos,
        {
          name: todo.trim(),
          isCompleted: false
        }
      ]);
    }
  };

  return (
    <>
      <center>
        <ContentHeader title={'Todo List'} />
        <TodoForm HandleAddTodo={HandleAddTodo} />
        <TodoList todos={todos} handleTodos={handleTodos} />
      </center>
    </>
  );
};

export default Todo;
