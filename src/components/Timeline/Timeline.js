import React from "react";
import Period from "./Period";
import SubPeriod from "./SubPeriod";
import styled from "styled-components";

const Timeline = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
`;

const Container = props => (
  <Timeline>
    {props.data.map((obj, index) => {
      return (
        (obj.project && (
          <SubPeriod
            isWide={props.isWide}
            key={index}
            start={obj.start}
            end={obj.end}
            label={obj.label}
            title={obj.title}
            description={obj.description}
          />
        )) || (
          <Period
            isWide={props.isWide}
            key={index}
            start={obj.start}
            end={obj.end}
            label={obj.label}
            title={obj.title}
            description={obj.description}
          />
        )
      );
    })}
  </Timeline>
);

export default Container;
