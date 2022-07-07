import React from 'react';
import styled from 'styled-components';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const HeaderBlock = styled.div`
  display: flex;
  padding: 10px 0;
  justify-content: center;
  align-items: center;
  p {
    font-size: 28px;
    font-weight: bold;
    margin: 14px 28px;
    width: 200px;
    text-align: center;
  }
`;

const BtnBlock = styled.div`
  padding: 5px;
  border-radius: 4px;
  font-size: 28px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const CalendarHeader = ({ currentTargets, increasement, decreasement }) => {
  const { Month, year } = currentTargets;
  return (
    <HeaderBlock>
      <BtnBlock onClick={decreasement}>
        <FaAngleLeft color="gray" />
      </BtnBlock>{' '}
      <p>
        {year}년 {Month + 1}월
      </p>
      <BtnBlock onClick={increasement}>
        <FaAngleRight color="gray" />
      </BtnBlock>{' '}
    </HeaderBlock>
  );
};

export default CalendarHeader;
