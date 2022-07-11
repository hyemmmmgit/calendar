import React, { useEffect, useState } from 'react';
import TodolistItem from './TodolistItem';

const Todolist = ({ todos, onToggle, onRemove, selectedTargets }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodolistItem
          todo={todo}
          onToggle={onToggle}
          key={todo.id}
          onRemove={onRemove}
          selectedTargets={selectedTargets}
        />
      ))}
    </div>
  );
};

export default React.memo(Todolist);
