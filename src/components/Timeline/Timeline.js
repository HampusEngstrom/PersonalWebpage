import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Period from "./Period";

const ListOfPeriods = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
`;

const Timeline = ({ data, isWide }) => (
  <ListOfPeriods>
    {data.map((obj, index) => (
      <Period key={index} isWide={isWide} {...obj} project={obj.project} />
    ))}
  </ListOfPeriods>
);

Timeline.propTypes = {
  data: PropTypes.array,
  isWide: PropTypes.bool
};

export default Timeline;
