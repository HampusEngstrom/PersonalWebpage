import React from "react";
import styled from "styled-components";
import { Timeline } from "../../components/Timeline";
import SettingsConsumer from "./../../contexts/SettingsContext";

const formatTime = time =>
  isNaN(time) ? time : `${time.substr(0, 4)}/${time.substr(4, 2)}`;

const getLabel = obj => {
  const { education, role, projectRole } = obj;
  if (obj.project) {
    return projectRole;
  } else if (obj.type === "education") {
    return education;
  } else if (obj.type === "work") {
    return role;
  }
};

const getTitle = obj => {
  const { institution, workplace, projectType, location } = obj;
  if (obj.project) {
    return projectType;
  } else if (obj.type === "education") {
    return `${institution}, ${location}`;
  } else if (obj.type === "work") {
    return `${workplace}, ${location}`;
  }
};

const formatPeriod = type => obj => ({
  start: formatTime(obj.start),
  end: formatTime(obj.end),
  label: getLabel({ ...obj, type }),
  title: getTitle({ ...obj, type }),
  project: !!obj.project,
  description: obj.description
});

const formatData = (data, type) =>
  [...data]
    .reverse()
    .reduce(
      (acc, obj) => [
        ...acc,
        obj,
        ...[...obj.projects].reverse().map(p => ({ ...p, project: true }))
      ],
      []
    )
    .map(formatPeriod(type));

const TimelineContainer = styled.div`
  display: flex;
  max-width: 1000px;
  width: 90%;
  justify-content: center;
`;

const Education = ({ data, type }) => (
  <SettingsConsumer>
    {({ widthClass }) => (
      <TimelineContainer>
        <Timeline isWide={widthClass > 1} data={formatData(data, type)} />
      </TimelineContainer>
    )}
  </SettingsConsumer>
);

export default Education;
