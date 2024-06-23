import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import ContentHeader from '../../Template/ContentHeader/ContentHeader';
import StorageOptions from './StorageOptions/StorageOptions';
import './Todo.css';
import { TodoForm, TodoList } from './index';

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
import { getDatabase, onValue, push, ref, remove } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js';

const Todo = () => {
  const [todos, handleTodos] = useState([]);
  const [storage, setStorage] = useState('');

  const appSettings = {
    databaseURL: 'https://playground-8f28f-default-rtdb.asia-southeast1.firebasedatabase.app/'
  };

  const app = initializeApp(appSettings);
  const database = getDatabase(app);
  const todoListInDb = ref(database, 'todoList');
  const storageMode = ref(database, 'todoListStorageMode');

  useEffect(() => {
    onValue(storageMode, snapshot => {
      let mode = 'local';
      if (snapshot.exists()) {
        const data = snapshot.val();
        mode = Object.values(data)[0] === 'db' ? 'db' : 'local';
      } else {
        mode = 'local';
      }
      getAll(mode);
      setStorage(mode);
    });
  }, [storage]);

  function setStorageMode(mode) {
    remove(storageMode);
    push(storageMode, mode);
    setStorage(mode);
  }

  function getAll(mode) {
    if (mode === 'local') {
      handleTodos(JSON.parse(localStorage.getItem('todos') ?? '[]'));
    } else {
      onValue(todoListInDb, snapshot => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          handleTodos(Object.values(data)[0]);
        } else {
          handleTodos([]);
        }
      });
    }
  }

  const updateList = todos => {
    if (storage === 'db') {
      remove(todoListInDb);
      push(todoListInDb, todos);
    } else {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
    handleTodos(todos);
  };

  const HandleAddTodo = todo => {
    if (todo?.trim()) {
      const newTodo = { name: todo.trim(), isCompleted: false };
      const newTodos = [...todos, newTodo].sort((a, b) => a.isCompleted - b.isCompleted);
      updateList(newTodos);
      toast.success('Todo Added successfully');
    } else {
      toast.warning('Please enter a valid todo');
    }
  };

  return (
    <>
      <center>
        <ContentHeader title={'Todo List'} />
        <StorageOptions storage={storage} setStorageMode={setStorageMode} />
        <TodoForm HandleAddTodo={HandleAddTodo} />
        <TodoList updateList={updateList} todos={todos} />
      </center>
    </>
  );
};

export default Todo;
