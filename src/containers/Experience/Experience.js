import React from "react";
import styled from "styled-components";
import { Timeline } from "../../components/Timeline";
import SettingsConsumer from "./../../contexts/SettingsContext";

import { formatData } from "./Helpers";

const TimelineContainer = styled.div`
  display: flex;
  max-width: 1000px;
  width: 90%;
  justify-content: center;
`;

const Education = ({ data }) => (
  <SettingsConsumer>
    {({ widthClass }) => (
      <TimelineContainer>
        <Timeline isWide={widthClass > 1} data={formatData(data)} />
      </TimelineContainer>
    )}
  </SettingsConsumer>
);

export default Education;
