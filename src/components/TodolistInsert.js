import React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { AiFillPlusCircle } from 'react-icons/ai';

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  .Btn {
    font-size: 42px;
    cursor: pointer;
    margin-left: 10px;
    color: #9ce8ee;
  }
`;

const Date = styled.span`
  width: 210px;
`;

const Input = styled.input`
  margin-left: 7px;
  border: none;
  border-bottom: 1px solid #9ce8ee;
  font-size: 28px;
`;

const TodolistInsert = ({ onInsert, selectedTargets }) => {
  const [value, setValue] = useState('');

  const { year, Month, date } = selectedTargets;
  const ItemDate = `${year}.${Month + 1}.${date}`;

  const onChange = useCallback(function onChange(e) {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    function () {
      onInsert(value, ItemDate);
      setValue('');
    },
    [onInsert, value, ItemDate]
  );

  return (
    <Form onSubmit={onSubmit}>
      <Date>
        {selectedTargets.year}.{selectedTargets.Month + 1}.
        {selectedTargets.date}에 할 일은?
      </Date>
      <Input value={value} onChange={onChange} />
      <AiFillPlusCircle className="Btn" onClick={onSubmit} />
    </Form>
  );
};

export default TodolistInsert;
