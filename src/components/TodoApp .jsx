import React, { useReducer, useState } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import { initialState, todoReducer} from '../reducers/todoreducer';

function TodoApp() {
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  const [editingTodo, setEditingTodo] = useState(null);
  const [editingValue, setEditingValue] = useState('');

  const handleAddTodo = (newTodo) => {
    dispatch({ type: 'ADD_TODO', payload: newTodo });
  };

  const handleEditTodo = (id, title) => {
    setEditingTodo(id);
    setEditingValue(title);
  };

  const handleSaveTodo = (id) => {
    dispatch({ type: 'EDIT_TODO', payload: { id, title: editingValue } });
    setEditingTodo(null);
  };

  const handleToggleTodo = (id) => {
    dispatch({ type: 'TOGGLE_TODO', payload: id });
  };

  const handleDeleteTodo = (id) => {
    dispatch({ type: 'DELETE_TODO', payload: id });
  };

  return (
    <div className="todo-app">
      <h1>Create Todo List</h1>
      <AddTodo onAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        editingTodo={editingTodo}
        editingValue={editingValue}
        onEditTodo={handleEditTodo}
        onSaveTodo={handleSaveTodo}
        onToggleTodo={handleToggleTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
}

export default TodoApp;
