import React from "react";
import { RatedItem } from "../../components/RatedItem";
import { Text, Header3 } from "../../components/Elements";
import styled from "styled-components";

const RatedLibraries = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
  padding-top: 10px;
  margin-top: -18px;
`;

const Header = styled(Header3)`
  padding: 0 10px;
  justify-content: center;
  @media (min-width: 480px) {
    justify-content: flex-start;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: lightgray;
  margin-bottom: 10px;
`;

const RatedKnowledge = ({ title, description, items, width }) => (
  <div style={{ marginTop: "20px" }}>
    <Header>{title}</Header>
    {description && <Text>{description}</Text>}
    <Line />
    <RatedLibraries>
      {items.map((obj, index) => (
        <RatedItem
          key={index}
          title={obj.title}
          description={obj.description}
          years={obj.years}
          rating={obj.rating}
          width={width}
        />
      ))}
    </RatedLibraries>
  </div>
);

export default RatedKnowledge;
