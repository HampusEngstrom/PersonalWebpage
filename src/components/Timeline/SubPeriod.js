import React from "react";
import styled from "styled-components";
import { Text, Header4, Header5 } from "./../Elements";
import {
  TimeContainer,
  Line,
  DescriptionContainer,
  Period,
  ProjectLine
} from "./Components";

const HoverPeriod = styled(Period)`
  color: gray;
  transition: 0.5s color;
  &:hover {
    color: black;
  }
`;

const HoverDescription = styled(DescriptionContainer)`
  transition: 0.5s margin;
  ${HoverPeriod}:hover & {
    margin-left: -2px;
    margin-right: 2px;
  }

  @media (min-width: 768px) {
    ${HoverPeriod}:hover & {
      margin-left: -10px;
      margin-right: 10px;
    }
  }
`;

const HoverTime = styled(TimeContainer)`
  transition: 0.5s margin;
  ${HoverPeriod}:hover & {
    margin-left: -2px;
    margin-right: 2px;
  }
  @media (min-width: 768px) {
    ${HoverPeriod}:hover & {
      margin-left: 5px;
      margin-right: -5px;
    }
  }
`;

const WidePeriod = props => (
  <HoverPeriod>
    <HoverTime>
      <Text style={{ justifyContent: "flex-end", textAlign: "right" }}>
        {props.start} - {props.end}
      </Text>
      <Text style={{ justifyContent: "flex-end", textAlign: "right" }}>
        {props.label}
      </Text>
    </HoverTime>
    <Line />
    <ProjectLine />
    <HoverDescription>
      <Header5>{props.title}</Header5>
      <Text style={{ textAlign: "left" }}>{props.description}</Text>
    </HoverDescription>
  </HoverPeriod>
);

const NarrowPeriod = props => (
  <HoverPeriod>
    <Line />
    <ProjectLine />
    <div style={{ display: "flex", flexDirection: "column" }}>
      <HoverTime>
        <Header4 style={{ textAlign: "left" }}>
          {props.start} - {props.end}
        </Header4>
        <Header5 style={{ textAlign: "left" }}>{props.label}</Header5>
      </HoverTime>
      <HoverDescription>
        <Header4>{props.title}</Header4>
        <Text style={{ textAlign: "left" }}>{props.description}</Text>
      </HoverDescription>
    </div>
  </HoverPeriod>
);

export default props =>
  props.isWide ? <WidePeriod {...props} /> : <NarrowPeriod {...props} />;
