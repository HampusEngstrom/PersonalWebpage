import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FlexRows = styled(Flex)`
  flex-direction: row;
  width: 100%;
`;

const FlexColumns = styled(Flex)`
  flex-direction: column;
`;

export { FlexRows, FlexColumns };
