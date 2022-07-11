import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import CalendarBody from './CalendarBody';
import CalendarHeader from './CalendarHeader';
import media from '../responsive';

const Positoner = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  height: 100vh;
  ${media.tablet`
    padding-top : 28px;
  `}
`;

const CalendarBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 400px;
  border-radius: 4px;
  box-shadow: 4px 4px 4px 3px rgba(0, 0, 0, 0.28);
  ${media.tablet`
    width: 350px;
    height: 350px;
  `}
`;

const TodayBtn = styled.button`
  cursor: pointer;
  font-size: 28px;
  border: none;
  background-color: #a077ff;
  margin-top: 4px;
`;

const CalendarTemplate = ({
  initialDate,
  selectedTargets,
  setSelectedTargets,
}) => {
  const [currentTargets, setCurrentTargets] = useState(initialDate);

  const { year, Month } = currentTargets;

  const increasement = () => {
    if (Month < 11)
      setCurrentTargets({
        ...currentTargets,
        Month: Month + 1,
      });
    else {
      setCurrentTargets({
        ...currentTargets,
        year: year + 1,
        Month: 0,
      });
    }
  };
  const decreasement = () => {
    if (Month > 0)
      setCurrentTargets({
        ...currentTargets,
        Month: Month - 1,
      });
    else {
      setCurrentTargets({
        ...currentTargets,
        year: year - 1,
        Month: 11,
      });
    }
  };

  function onClickDate(targets) {
    setSelectedTargets(targets);
  }

  function Today() {
    setSelectedTargets(initialDate);
    setCurrentTargets(initialDate);
  }

  return (
    <Positoner>
      <CalendarBlock>
        <CalendarHeader
          currentTargets={currentTargets}
          increasement={increasement}
          decreasement={decreasement}
        />
        <CalendarBody
          currentTargets={currentTargets}
          onClickDate={onClickDate}
          selectedTargets={selectedTargets}
        />
        <TodayBtn onClick={Today}>TODAY</TodayBtn>
      </CalendarBlock>
    </Positoner>
  );
};

export default React.memo(CalendarTemplate);
