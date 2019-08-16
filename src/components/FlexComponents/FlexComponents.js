import styled, { css } from "styled-components";

const sharedStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FlexRows = styled.div`
  ${sharedStyle}
  flex-direction: row;
  width: 100%;
`;

const FlexColumns = styled.div`
  ${sharedStyle}
  flex-direction: column;
`;

export { FlexRows, FlexColumns };
