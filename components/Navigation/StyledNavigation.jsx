import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const StyledNavigation = styled(Box)`
  padding-right: 30px;
  height: 72px;
  background-color: ${({ theme }) => theme.palette.headerColor.main};
  ul {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: right;
  }
  li {
    height: 100%;
  }
  button {
    text-transform: none;
    font-family: Roboto, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.84px;
    height: 100%;
    &:hover {
      text-decoration: underline;
    }
  }
`;
