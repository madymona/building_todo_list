import React from 'react';

function TodoItem({ todo, isEditing, editingValue, onEditTodo, onSaveTodo, onToggleTodo, onDeleteTodo }) {
  return (
    <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggleTodo(todo.id)}
        style={{ marginRight: '10px' }}
      />
      {isEditing ? (
        <>
          <input
            type="text"
            value={editingValue}
            onChange={(e) => onEditTodo(todo.id, e.target.value)}
            style={{ marginRight: '10px' }}
          />
          <button onClick={() => onSaveTodo(todo.id)}>Save</button>
        </>
      ) : (
        <>
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none', flex: 1 }}>
            {todo.title}
          </span>
          <button onClick={() => onEditTodo(todo.id, todo.title)} style={{ marginRight: '5px' }}>
            Edit
          </button>
          <button
            onClick={() => onDeleteTodo(todo.id)}
            disabled={!todo.completed}
          >
            Delete
          </button>
        </>
      )}
    </li>
  );
}

export default TodoItem;
