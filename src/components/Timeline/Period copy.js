import React from "react";
import { Text, Header3, Header4 } from "./../Elements";
import {
  TimeContainer,
  Line,
  DescriptionContainer,
  Period,
  Dot
} from "./Components";

const WidePeriod = props => (
  <Period className="wide">
    <TimeContainer>
      <Header3
        style={{
          justifyContent: "flex-end",
          color: "#739654",
          textAlign: "right"
        }}
      >
        {props.start} - {props.end}
      </Header3>
      <Text style={{ textAlign: "right" }}>{props.label}</Text>
    </TimeContainer>
    <Line />
    <Dot />
    <DescriptionContainer>
      <Header3 style={{ color: "#739654" }}>{props.title}</Header3>
      <Text style={{ textAlign: "left" }}>{props.description}</Text>
    </DescriptionContainer>
  </Period>
);

const NarrowPeriod = props => (
  <Period className="narrow">
    <Line />
    <Dot />
    <div style={{ display: "flex", flexDirection: "column" }}>
      <TimeContainer>
        <Header3
          style={{
            color: "#739654"
          }}
        >
          {props.start} - {props.end}
        </Header3>
        <Header4>{props.label}</Header4>
      </TimeContainer>
      <DescriptionContainer>
        <Header3 style={{ color: "#739654" }}>{props.title}</Header3>
        <Text style={{ textAlign: "left" }}>{props.description}</Text>
      </DescriptionContainer>
    </div>
  </Period>
);

export default props =>
  props.isWide ? <WidePeriod {...props} /> : <NarrowPeriod {...props} />;
