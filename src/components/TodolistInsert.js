import React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';

const TodolistInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback(function onChange(e) {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    function (e) {
      onInsert(value);
      setValue('');
      e.preventDefault();
    },
    [onInsert, value]
  );

  return (
    <form onSubmit={onSubmit}>
      <span></span>
      <input value={value} onChange={onChange} />
      <button>추가</button>
    </form>
  );
};

export default TodolistInsert;
