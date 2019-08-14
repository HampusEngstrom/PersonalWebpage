import React from "react";
import RatedKnowledge from "./RatedKnowledge";
import styled from "styled-components";

const ContentContainer = styled.div`
  width: 100%;

  &.inactive {
    opacity: 0.5;
  }

  @media (min-width: 768px) {
    max-width: 768px;
    margin: 20px;
  }
  @media (min-width: 1024px) {
    max-width: 1024px;
  }
`;

const RatedKnowledgeList = ({ data, width, inactive }) => (
  <ContentContainer>
    {data.map((obj, index) => (
      <RatedKnowledge
        key={index}
        title={obj.title}
        description={obj.description}
        items={obj.items}
        width={width}
      />
    ))}
  </ContentContainer>
);

export default RatedKnowledgeList;
