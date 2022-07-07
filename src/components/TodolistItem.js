import React from 'react';
import styled, { css } from 'styled-components';

const TodolistItem = ({ todo, onToggle, onRemove }) => {
  const Todo = styled.span`
    cursor: pointer;
    padding: 14px 28px;
    display: inline-block;
    ${({ checked }) =>
      checked &&
      css`
        text-decoration: line-through;
      `}
  `;

  const { id, text, checked } = todo;

  return (
    <div>
      <Todo checked={checked} onClick={() => onToggle(id)}>
        {text}
      </Todo>
      <button onClick={() => onRemove(id)}>삭제</button>
    </div>
  );
};

export default TodolistItem;
