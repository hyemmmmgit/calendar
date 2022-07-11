import React from 'react';
import styled from 'styled-components';
import CalendarDay from './CalendarDay';

const BodyBlock = styled.div`
  display: grid;
  flex: 1;
  grid-template-rows: 30px repeat(6, 1fr);
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
  text-align: center;
  & div:nth-child(7n + 1) {
    color: #fe86c1;
  }
  & div:nth-child(7n) {
    color: #40cbea;
  }
`;
const DayLabel = styled.div`
  text-align: center;
  align-self: center;
  font-weight: bold;
`;

const dayList = ['일', '월', '화', '수', '목', '금', '토'];

const CalendarBody = ({ currentTargets, onClickDate, selectedTargets }) => {
  //   const lastDate = 30;

  //   const dateArr = useMemo(() => {
  //     let result = [];
  //     for (let i = 1; i <= lastDate; i++) {
  //       result.push(<p>{i}</p>);
  //     }
  //     return result;
  //   }, [lastDate]);

  //   const renderDate = useCallback(() => {
  //     const dateArr = [];
  //     for (let i = 1; i <= lastDate; i++) {
  //       dateArr.push(<p>{i}</p>);
  //     }
  //     return dateArr;
  //   }, [lastDate]);

  const { year, Month } = currentTargets;

  const startDate = new Date(year, Month, 1);

  const render = new Date(
    startDate.getFullYear(),
    startDate.getMonth(),
    1 - startDate.getDay()
    // startDate(0) => 말일 => 음수를 넣으면 말일부터 뺀다. 0이 말일
  );

  //첫째주 일요일 날짜 설정(달력의 첫번째 날)
  //   const date = new Date();
  //   date.setDate(1 - startDate.getDay());

  const renderDate = () => {
    let result = [];
    for (let i = 0; i < 42; i++) {
      result.push(
        <CalendarDay
          key={i}
          renderDate={render.getDate()}
          renderMonth={render.getMonth()}
          renderYear={render.getFullYear()}
          isCurrentMonth={Month === render.getMonth()}
          currentTargets={currentTargets}
          onClickDate={onClickDate}
          selectedTargets={selectedTargets}
        />
      );
      //하루 더하기 //setDate 원래 있는 함수
      render.setDate(render.getDate() + 1);
    }
    return result;
  };

  return (
    <BodyBlock>
      {dayList.map((day, idx) => (
        <DayLabel key={idx} style={{ color: idx === 0 && '#fe86c1' }}>
          {day}
        </DayLabel>
      ))}
      {renderDate()}
    </BodyBlock>
  );
};

export default CalendarBody;
