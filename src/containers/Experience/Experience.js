import React from "react";
import styled from "styled-components";
import { Timeline } from "../../components/Timeline";
import ReactResizeDetector from "react-resize-detector";

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

const Container = styled.div`
  display: flex;
  max-width: 1000px;
  width: 90%;
  justify-content: center;
`;

const Education = props => (
  <Container>
    <ReactResizeDetector querySelector="#root" handleWidth>
      {({ width }) => (
        <Timeline
          isWide={width > 767}
          data={[...props.data]
            .reverse()
            .reduce(
              (acc, obj) => [
                ...acc,
                obj,
                ...[...obj.projects]
                  .reverse()
                  .map(p => ({ ...p, project: true }))
              ],
              []
            )
            .map(formatPeriod(props.type))}
        />
      )}
    </ReactResizeDetector>
  </Container>
);

export default Education;
