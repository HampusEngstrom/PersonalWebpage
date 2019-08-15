import React from "react";
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

const ContentContainer = ({ data, array }) => (
  <SettingsConsumer>
    {({ widthClass }) => (
      <FlexColumns style={{ width: "100%" }}>
        <Find
          data={array}
          render={result => (
            <React.Fragment>
              {result.map((item, index) => (
                <RatedItem key={index} {...item} theme="SIMPLE_ONE_ROW" />
              ))}
            </React.Fragment>
          )}
        />
        <RatedKnowledgeList widthClass={widthClass} data={data} />
      </FlexColumns>
    )}
  </SettingsConsumer>
);

const KnowledgeBank = () => (
  <ContentConsumer>
    {({ knowledge }) => (
      <PageContainer>
        <ContentContainer
          data={stripData(knowledge)}
          array={flattenData(stripData(knowledge))}
        />
      </PageContainer>
    )}
  </ContentConsumer>
);

export default KnowledgeBank;
