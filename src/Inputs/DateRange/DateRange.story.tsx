import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Story } from '../../../.storybook/ui/Story';
import { select, date } from '@storybook/addon-knobs';
import styled from 'styled-components';
import { DateRange } from './DateRange';
import { Button } from '../../Button/Button';
import { ChevronDown } from '../../Icons';

const componentName = 'Inputs';

const alignments = {
  left: 'left',
  right: 'right',
  center: 'center',
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

storiesOf(`components|${componentName}`, module).add(
  'Date Range',
  () => (
    <Story title="Date Range" subTitle="DateRange">
      <Container>
        <DateRangeButton />
      </Container>
    </Story>
  ),
);

function DateRangeButton() {
  const defaultText = 'Select a date range';
  const [buttonText, setButtonText] = useState(defaultText);

  const onChange = (range: [Date, Date]) => {
    if (range[0] && range[1]) {
      const start = range[0].toLocaleDateString();
      const end = range[1].toLocaleDateString();
      setButtonText(`${start} - ${end}`);
    } else {
      setButtonText(defaultText);
    }
  };

  // Getting date with `toDateString` so that knobs work correctly
  // When implementing you can just pass `new Date()` to minDate
  const defaultDate = new Date(new Date().toDateString());
  const minDate = new Date(date('Minimum Date', defaultDate));

  return (
    <DateRange
      alignment={select('Calendar alignment', alignments, 'left')}
      onChange={onChange}
      minDate={minDate}
    >
      <Button icon={<ChevronDown />} iconLocation="afterLabel">
        {buttonText}
      </Button>
    </DateRange>
  );
}