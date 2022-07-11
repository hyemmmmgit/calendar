import React from 'react';
import styled, { css } from 'styled-components';
import { AiFillMinusCircle } from 'react-icons/ai';
import media from '../responsive';

const ItemBlock = styled.div`
  font-size: 21px;
  border-radius: 14px;
  border: 1px solid #ffcaf8;
  width: 560px;
  height: 70px;
  margin: 28px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 28px;
  .removeBtn {
    font-size: 28px;
    color: #ffcaf8;
    cursor: pointer;
  }
  ${media.tablet`
  width: 420px;
  height: 56px;
  `}
`;

const Todo = styled.span`
  cursor: pointer;
  padding: 14px 28px;
  display: inline-block;
  ${({ checked }) =>
    checked &&
    css`
      text-decoration: line-through;
      text-decoration-color: #fe86c1;
    `}
`;

const TodolistItem = ({ todo, onToggle, onRemove }) => {
  const { id, text, checked, date } = todo;

  return (
    <ItemBlock>
      <span>{date}</span>
      <Todo checked={checked} onClick={() => onToggle(id)}>
        {text}
      </Todo>
      <AiFillMinusCircle className="removeBtn" onClick={() => onRemove(id)} />
    </ItemBlock>
  );
};

export default React.memo(TodolistItem);
