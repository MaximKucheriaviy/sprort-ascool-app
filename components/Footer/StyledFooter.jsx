import styled from "@emotion/styled";

export const StyledFooter = styled.footer`
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: ${({ theme }) => theme.palette.headerColor.main};
  & .linkset {
    display: flex;
    gap: 20px;
    justify-content: space-around;
  }
`;
