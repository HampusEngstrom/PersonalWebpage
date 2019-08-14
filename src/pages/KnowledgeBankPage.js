import React from "react";
import RatedKnowledgeList from "./../containers/RatedKnowledgeList/";
import Find from "./../containers/Find/";
import content from "../data.js";
import { FlexColumns } from "./../components/FlexComponents";

import { PageContainer } from "./../components/Elements";
import { RatedItem } from "./../components/RatedItem";

const shouldAppear = (acc, category) => {
  const children = category.items.filter(item => item.rating > 0);
  return children.length > 0 ? [...acc, { ...category, items: children }] : acc;
};

const KnowledgeBank = ({ width }) => {
  const data = content.skills.reduce(shouldAppear, []);
  const array = data.reduce((acc, category) => [...acc, ...category.items], []);

  return (
    <PageContainer>
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
        <RatedKnowledgeList width={width} data={data} />
      </FlexColumns>
    </PageContainer>
  );
};

export default KnowledgeBank;
