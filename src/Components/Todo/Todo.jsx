import { useEffect, useReducer } from 'react';
import { toast } from 'react-toastify';
import ContentHeader from '../../Template/ContentHeader/ContentHeader';
import StorageOptions from './StorageOptions/StorageOptions';
import './Todo.css';
import { TodoForm, TodoList } from './index';

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
import { getDatabase, onValue, push, ref, remove } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js';

const StorageModeOptions = {
  LOCAL: 'local',
  DB: 'db'
};

const REDUCER_ACTION = {
  SET_TODOS: 'SET_TODOS',
  SET_STORAGE_MODE: 'SET_STORAGE_MODE'
};

const appSettings = {
  databaseURL: 'https://playground-8f28f-default-rtdb.asia-southeast1.firebasedatabase.app/'
};

const defaultState = {
  todos: [],
  storageMode: StorageModeOptions.LOCAL
};
const reducer = (state, action) => {
  switch (action.type) {
    case REDUCER_ACTION.SET_TODOS:
      return { ...state, todos: action.payload };

    case REDUCER_ACTION.SET_STORAGE_MODE:
      return { ...state, storageMode: action.payload };
    default:
      return state;
  }
};

const Todo = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const app = initializeApp(appSettings);
  const database = getDatabase(app);

  const todoListInDb = ref(database, 'todoList');
  const storageMode = ref(database, 'todoListStorageMode');

  useEffect(() => {
    onValue(storageMode, snapshot => {
      let mode = StorageModeOptions.LOCAL;
      if (snapshot.exists()) {
        const data = snapshot.val();
        mode = Object.values(data)[0] === StorageModeOptions.DB ? StorageModeOptions.DB : StorageModeOptions.LOCAL;
      }
      getAll(mode);
      dispatch({ type: REDUCER_ACTION.SET_STORAGE_MODE, payload: mode });
    });
  }, [state.storageMode]);

  function setStorageMode(mode) {
    remove(storageMode);
    push(storageMode, mode);
    dispatch({ type: REDUCER_ACTION.SET_STORAGE_MODE, payload: mode });
  }

  function getAll(mode) {
    if (mode === StorageModeOptions.LOCAL) {
      dispatch({ type: REDUCER_ACTION.SET_TODOS, payload: JSON.parse(localStorage.getItem('todos') ?? '[]') });
    } else {
      onValue(todoListInDb, snapshot => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          dispatch({ type: REDUCER_ACTION.SET_TODOS, payload: Object.values(data)[0] });
        } else {
          dispatch({ type: REDUCER_ACTION.SET_TODOS, payload: [] });
        }
      });
    }
  }

  const updateList = todos => {
    if (state.storageMode === StorageModeOptions.DB) {
      remove(todoListInDb);
      push(todoListInDb, todos);
    } else {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
    dispatch({ type: REDUCER_ACTION.SET_TODOS, payload: todos });
  };

  const HandleAddTodo = todo => {
    if (todo?.trim()) {
      const newTodo = { name: todo.trim(), isCompleted: false };
      const newTodos = [...state.todos, newTodo].sort((a, b) => a.isCompleted - b.isCompleted);
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
        <StorageOptions storage={state.storageMode} setStorageMode={setStorageMode} />
        <TodoForm HandleAddTodo={HandleAddTodo} />
        <TodoList updateList={updateList} todos={state.todos} />
      </center>
    </>
  );
};

export default Todo;
