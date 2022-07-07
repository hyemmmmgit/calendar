import CalendarTemplate from './components/CalendarTemplate';
import Todolist from './components/Todolist';
import TodolistInsert from './components/TodolistInsert';
import TodolistTemplate from './components/TodolistTemplate';
import { useCallback } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
.App {
  display: flex;
}
`;

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: '옷입기', checked: true },
    { id: 2, text: '밥먹기', checked: true },
    { id: 3, text: '잠자기', checked: false },
  ]);

  const nextID = useRef(4);

  const onInsert = useCallback(
    function (text) {
      const todo = {
        id: nextID.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextID.current++;
    },
    [todos]
  );

  const onToggle = useCallback(
    function (id) {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      );
    },
    [todos]
  );

  const onRemove = useCallback(
    function (id) {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <CalendarTemplate></CalendarTemplate>
        <TodolistTemplate>
          <TodolistInsert onInsert={onInsert} />
          <Todolist todos={todos} onToggle={onToggle} onRemove={onRemove} />
        </TodolistTemplate>
      </div>
    </>
  );
}

export default App;

// 달력 명세
// 1. 시작 날짜(오늘) 생성 => new Date()
// 연도, 월, 일, 요일 => 시작 요일 파악
// 2. 시작날짜부터 마지막날까지 출력
// 3. 날짜 변경 => 월 변경. 1번부터 다시
// 4. 공휴일 처리
// 5. 오늘 날짜 표시
