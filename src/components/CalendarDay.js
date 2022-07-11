import React from 'react';
import styled, { css } from 'styled-components';

const DateBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  ${({ active }) =>
    active &&
    css`
      background-color: #a077ff;
      font-weight: bold;
    `}
  &:hover {
    cursor: pointer;
  }
`;

const CalendarDay = ({
  renderDate,
  renderMonth,
  renderYear,
  isCurrentMonth,
  onClickDate,
  selectedTargets,
}) => {
  const isCurrent =
    //selectedTargets : 달력에서 클릭한 날짜
    //currentTargets : 화살표에 의해서 현재 화면에 렌더링 되고 있는 날짜
    selectedTargets.year === renderYear &&
    selectedTargets.Month === renderMonth;

  return (
    <DateBlock
      style={{ color: !isCurrentMonth && '#d6bbff' }}
      active={renderDate === selectedTargets.date && isCurrent}
      onClick={() => {
        if (!isCurrentMonth) return;
        onClickDate({ year: renderYear, Month: renderMonth, date: renderDate });
      }}
    >
      {renderDate}
    </DateBlock>
  );
};

export default CalendarDay;
