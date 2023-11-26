import styled from "@emotion/styled";
import { StyledHome } from "./StyledHome";

export const StyledMain = styled(StyledHome)`
  .homeContainer {
    background-color: white;
    display: grid;
    padding-bottom: 40px;
    grid-template-columns: 816px 355px;
    justify-content: space-between;
    grid-column-gap: 40px;
  }

  & .buttonDiv {
    display: flex;
    gap: 30px;
    margin-bottom: 30px;
  }
  & .assideLink {
    background-color: ${({ theme }) => theme.palette.herroColor.main};
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;

    &:hover {
      background-color: ${({ theme }) => theme.palette.herroColor.light};
    }

    color: #fff;

    text-transform: none;
    font-family: Roboto, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.84px;
    text-decoration: none;
  }
  & .ImageDiv {
    width: 100%;
    height: 500px;
    overflow: hidden;
    border-radius: 10px;

    & img {
      width: 100%;
    }
  }
`;
