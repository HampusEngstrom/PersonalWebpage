import React from "react";
import styled from "styled-components";

import { Text, Header3, Header4 } from "./../Elements";
import {
  TimeContainer,
  Line,
  DescriptionContainer as DC,
  Period,
  Dot
} from "./Components";

const Time = styled(Header3)`
  color: #739654;
  justify-content: ${({ center }) => (center ? "flex-start" : "flex-end")}
  text-align: ${({ center }) => (center ? "right" : "left")};
`;

const TimeLabel = styled(Header4)`
  text-align: ${({ center }) => (center ? "right" : "left")};
`;

const Description = ({ title, description }) => (
  <DC>
    <Header3 style={{ color: "#739654" }}>{title}</Header3>
    <Text style={{ textAlign: "left" }}>{description}</Text>
  </DC>
);

const CenterAlignedPeriod = ({ start, end, label, title, description }) => (
  <Period>
    <TimeContainer>
      <Time center>
        {start} - {end}
      </Time>
      <TimeLabel>{label}</TimeLabel>
    </TimeContainer>
    <Line />
    <Dot />
    <Description title={title} description={description} />
  </Period>
);

const LeftAlignedPeriod = ({ start, end, label, title, description }) => (
  <Period>
    <Line />
    <Dot />
    <div style={{ display: "flex", flexDirection: "column" }}>
      <TimeContainer>
        <Time>
          {start} - {end}
        </Time>
        <TimeLabel>{label}</TimeLabel>
      </TimeContainer>
      <Description title={title} description={description} />
    </div>
  </Period>
);

export default props =>
  props.isWide ? (
    <CenterAlignedPeriod {...props} />
  ) : (
    <LeftAlignedPeriod {...props} />
  );
