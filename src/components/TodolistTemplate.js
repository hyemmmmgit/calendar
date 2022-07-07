import React from 'react';
import styled from 'styled-components';

const TodolistTemplate = ({ children }) => {
  const Block = styled.div`
    margin: 0 auto;
    text-align: center;
    flex: 1;
  `;

  return (
    <Block>
      <h1>To-do list</h1>
      {children}
    </Block>
  );
};

export default TodolistTemplate;
