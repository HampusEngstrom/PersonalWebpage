import styled from "styled-components";

const colorGreen = "#739654";

const TimeContainer = styled.div`
  display: flex;
  min-width: 115px;
  flex-shrink: 0;
  flex-grow: 0;
  padding: 15px 10px 5px 0;
  flex-direction: column;

  @media (min-width: 768px) {
    align-items: flex-end;
    width: 35%;
    padding: 15px 20px 15px 0;
  }
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 0 30px 0;

  @media (min-width: 768px) {
    padding: 15px;
    max-width: 400px;
  }
`;

const Period = styled.li`
  display: flex;
  width: 100%;
  cursor: pointer;
`;

const Line = styled.div`
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  width: 1px;
  background-color: ${colorGreen};
`;

const Dot = styled.div`
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  width: 12px;
  height: 12px;
  background-color: ${colorGreen};
  border-radius: 99px;
  transform: translate3d(-50%, 50%, 0);
  margin-left: -1px;
  margin-top: 20px;
`;

const ProjectLine = styled(Dot)`
  width: 12px;
  margin-right: 10px;
  height: 1px;
  top: 1px;
  border-radius: 0;
  transform: translate3d(0, 50%, 0);
  margin-top: 30px;
  background-color: ${colorGreen};
`;

export { TimeContainer, Line, DescriptionContainer, Period, Dot, ProjectLine };
