import CalendarTemplate from './components/CalendarTemplate';
import Todolist from './components/Todolist';
import TodolistInsert from './components/TodolistInsert';
import TodolistTemplate from './components/TodolistTemplate';
import { useCallback } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import media from './responsive';

const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Courier New', Courier, monospace;
  
}
.App {
  display: flex;
  ${media.tablet`
  flex-direction: column;
  padding: 28px;
  `}
}
`;

const today = new Date();

const initialDate = {
  year: today.getFullYear(),
  Month: today.getMonth(),
  date: today.getDate(),
};

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: '옷입기', checked: true, date: '2022.7.8' },
    { id: 2, text: '밥먹기', checked: true, date: '2022.7.7' },
    { id: 3, text: '잠자기', checked: false, date: '2022.7.6' },
  ]);
  const [selectedTargets, setSelectedTargets] = useState(initialDate);

  const nextID = useRef(4);

  const onInsert = useCallback(function (text, date) {
    const todo = {
      id: nextID.current,
      text,
      checked: false,
      date,
    };
    setTodos((todos) => todos.concat(todo));
    nextID.current++;
  }, []);

  const onToggle = useCallback(function (id) {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  }, []);

  const onRemove = useCallback(function (id) {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <CalendarTemplate
          initialDate={initialDate}
          selectedTargets={selectedTargets}
          setSelectedTargets={setSelectedTargets}
        ></CalendarTemplate>
        <TodolistTemplate>
          <TodolistInsert
            onInsert={onInsert}
            selectedTargets={selectedTargets}
          />
          <Todolist
            todos={todos}
            onToggle={onToggle}
            onRemove={onRemove}
            selectedTargets={selectedTargets}
          />
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
