import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, editingTodo, editingValue, onEditTodo, onSaveTodo, onToggleTodo, onDeleteTodo }) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          isEditing={editingTodo === todo.id}
          editingValue={editingValue}
          onEditTodo={onEditTodo}
          onSaveTodo={onSaveTodo}
          onToggleTodo={onToggleTodo}
          onDeleteTodo={onDeleteTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
