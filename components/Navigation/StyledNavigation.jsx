import styled from "@emotion/styled";
import { Box, MenuItem } from "@mui/material";

export const StyledMenuItem = styled(MenuItem)`
  transition-property: background-color;
  transition-duration: 300ms;
  background-color: ${({ theme }) => theme.palette.white.main};
  &:hover {
    background-color: ${({ theme }) => theme.palette.herroColor.main};
    & a {
      color: ${({ theme }) => theme.palette.white.main};
    }
  }
  a {
    text-decoration: none;
    color: black;
    transition-property: color;
    width: 100%;
    height: 100%;
    transition-duration: 300ms;
  }
`;

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
  a {
    text-decoration: none;
  }
`;
