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
`;
