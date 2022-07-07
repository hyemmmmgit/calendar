import React from 'react';
import TodolistItem from './TodolistItem';

const Todolist = ({ todos, onToggle, onRemove }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodolistItem
          todo={todo}
          onToggle={onToggle}
          key={todo.id}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

export default Todolist;
