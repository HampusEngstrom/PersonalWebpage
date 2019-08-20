import styled, { css } from "styled-components";
import { Header3, Header4, Header5 } from "./../Elements";

const colorGreen = "#739654";

const Period = styled.li`
  display: flex;
  width: 100%;
  cursor: pointer;
  flex-direction: ${({ center }) => (center ? "row" : "column")};
  position: relative;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ center }) => (center ? "5px 0 30px 0" : "5px 0 30px 20px")};

  @media (min-width: 768px) {
    max-width: 400px;
    padding: 15px 10px;
  }
`;

const TimeContainer = styled.div`
  display: flex;
  min-width: 115px;
  flex-shrink: 0;
  flex-grow: 0;
  flex-direction: column;
  padding: ${({ center }) => (center ? "15px 10px 5px 0" : "15px 10px 0 0")};
  margin-top: 4px;

  @media (min-width: 768px) {
    align-items: flex-end;
    width: 35%;
    padding: 15px 30px 15px 0;
  }
`;

const TagStyle = css`
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  background-color: ${colorGreen};
  position: ${({ center }) => (center ? "relative" : "absolute")};
`;

const Line = styled.div`
  ${TagStyle}

  width: 1px;
  height: ${({ center }) => (center ? "auto" : "100%")};
`;

const Dot = styled.div`
  ${TagStyle}

  width: 12px;
  height: 12px;
  border-radius: 99px;
  transform: translate3d(-50%, 50%, 0);
  margin-left: -1px;
  margin-top: 17px;
`;

const ProjectLine = styled(Dot)`
  margin-left: ${({ center }) => (center ? "-12px" : "0")};
  margin-right: 20px;
  height: 1px;
  top: 1px;
  border-radius: 0;
  transform: translate3d(0, 50%, 0);
  margin-top: 25px;
`;

const Time = styled(Header4)`
  color: ${({ center }) => (center ? `${colorGreen}` : "black")};
  justify-content: ${({ center }) => (center ? "flex-end" : "flex-start")};
  text-align: ${({ center }) => (center ? "right" : "left")};
  padding-left: ${({ center }) => (center ? "0px" : "20px")};
  font-size: ${({ center }) => (center ? "inherit" : "1em")};
`;

const TimeLabel = styled(Header5)`
  text-align: ${({ center }) => (center ? "right" : "left")};
  padding-left: ${({ center }) => (center ? "0px" : "20px")};
  font-size: ${({ center }) => (center ? "inherit" : "1em")};
`;

const DescriptionHeader = styled(Header3)`
  color: ${colorGreen};
`;

const HoverPeriod = styled(Period)`
  color: gray;
  transition: 0.5s color;
  ${Time}, ${DescriptionHeader} {
    color: gray;
  }

  ${DescriptionHeader} {
    font-size: 1.2em;
  }

  ${TimeContainer}, ${DescriptionContainer} {
    transition: 0.5s margin;
  }
  &:hover {
    color: black;
    ${Time}, ${DescriptionHeader} {
      color: black;
    }
    ${TimeContainer}, ${DescriptionContainer} {
      margin-left: -2px;
      margin-right: 2px;
    }

    @media (min-width: 768px) {
      ${TimeContainer} {
        margin-left: 5px;
        margin-right: -5px;
      }
      ${DescriptionContainer} {
        margin-left: -10px;
        margin-right: 10px;
      }
    }
  }
`;

export {
  TimeContainer,
  Time,
  TimeLabel,
  Line,
  DescriptionContainer,
  DescriptionHeader,
  Period,
  HoverPeriod,
  Dot,
  ProjectLine
};
