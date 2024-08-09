import React, { useState } from 'react';

function AddTodo({ onAddTodo }) {
  const [newTodo, setNewTodo] = useState('');

  const handleAdd = () => {
    if (newTodo.trim()) {
      onAddTodo(newTodo);
      setNewTodo('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add task"
        style={{ marginRight: '10px' }}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default AddTodo;
