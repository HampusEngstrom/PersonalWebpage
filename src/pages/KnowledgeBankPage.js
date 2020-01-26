import React from "react";
import styled from "styled-components";

import RatedKnowledgeList from "./../containers/RatedKnowledgeList/";
import Find from "./../containers/Find/";
import { FlexColumns } from "./../components/FlexComponents";
import ContentConsumer from "./../contexts/ContentContext";
import SettingsConsumer from "./../contexts/SettingsContext";

import { PageContainer } from "./../components/Elements";
import { RatedItem } from "./../components/RatedItem";

const shouldAppear = (acc, category) => {
  const children = category.items.filter(item => item.rating > 0);
  return children.length > 0 ? [...acc, { ...category, items: children }] : acc;
};

const stripData = data => data.reduce(shouldAppear, []);

const flattenData = data =>
  data.reduce((acc, category) => [...acc, ...category.items], []);

const FindLabel = styled.div`
  margin: 15px 0;
`;

const WhatIKnow = ({ data, array }) => (
  <SettingsConsumer>
    {({ widthClass }) => (
      <FlexColumns style={{ width: "100%" }}>
        <FindLabel>Sök istället för att scrolla</FindLabel>
        <Find
          data={array}
          render={result => (
            <>
              {result.map((item, index) => (
                <RatedItem key={index} {...item} theme="SIMPLE_ONE_ROW" />
              ))}
            </>
          )}
        />
        <RatedKnowledgeList widthClass={widthClass} data={data} />
      </FlexColumns>
    )}
  </SettingsConsumer>
);

const ContentContainer = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    max-width: 768px;
    margin: 20px;
  }

  @media (min-width: 1024px) {
    max-width: 1024px;
  }
`;

const WhatIAimToKnow = ({ title, description }) => (
  <ContentContainer>
    <h1>{title}</h1>
    <p>{description}</p>
  </ContentContainer>
);

const KnowledgeBank = () => (
  <ContentConsumer>
    {({ knowledge }) => (
      <PageContainer>
        <WhatIAimToKnow
          title={knowledge.shallObtain.title}
          description={knowledge.shallObtain.description}
        />
        <WhatIKnow
          data={stripData(knowledge.obtained.list)}
          array={flattenData(stripData(knowledge.obtained.list))}
        />
      </PageContainer>
    )}
  </ContentConsumer>
);

export default KnowledgeBank;
