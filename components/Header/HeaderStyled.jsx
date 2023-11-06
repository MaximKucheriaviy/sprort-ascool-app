import styled from "@emotion/styled";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.palette.headerColor.main};
  height: 96px;
  padding-left: 50px;
  padding-right: 94px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .iconSet {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`;
