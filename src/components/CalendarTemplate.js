import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import CalendarBody from './CalendarBody';
import CalendarHeader from './CalendarHeader';

const Positoner = styled.div`
  flex: 1;
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: azure;
  justify-content: center;
  align-items: center;
  user-select: none;
`;

const CalendarBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 400px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 4px 4px 4px 3px rgba(0, 0, 0, 0.28);
`;

const today = new Date();

const initialDate = {
  year: today.getFullYear(),
  Month: today.getMonth(),
  date: today.getDate(),
};

const CalendarTemplate = () => {
  const [currentTargets, setCurrentTargets] = useState(initialDate);

  const { year, Month, date } = currentTargets;
  const [selectedTargets, setSelectedTargets] = useState(initialDate);

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
        <button onClick={Today}>TODAY</button>
      </CalendarBlock>
    </Positoner>
  );
};

export default CalendarTemplate;
