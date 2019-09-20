import React from "react";

import {
  Period,
  HoverPeriod,
  TimeContainer,
  Time,
  TimeLabel,
  DescriptionContainer,
  DescriptionHeader,
  Line,
  Dot,
  ProjectLine,
  DescriptionText
} from "./Components";

const PeriodContainer = ({
  start,
  end,
  label,
  title,
  description,
  project,
  center
}) => {
  const TimelinePeriod = project ? HoverPeriod : Period;
  const PeriodTag = project ? ProjectLine : Dot;

  return (
    <TimelinePeriod center={center}>
      <TimeContainer>
        <Time center={center}>
          {start} - {end}
        </Time>
        <TimeLabel center={center}>{label}</TimeLabel>
      </TimeContainer>
      <Line center={center} />
      <PeriodTag center={center} />
      <DescriptionContainer>
        <DescriptionHeader>{title}</DescriptionHeader>
        <DescriptionText>{description}</DescriptionText>
      </DescriptionContainer>
    </TimelinePeriod>
  );
};

export default props => <PeriodContainer {...props} center={props.isWide} />;
