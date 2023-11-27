import styled from "@emotion/styled";

export const StyledNews = styled.div`
  .homeContainer {
    background-color: white;
    padding-bottom: 40px;
  }

  & .searchForm {
    text-align: right;
    & .inputDiv {
      height: 100%;
      display: inline-block;
      position: relative;
      & button {
        padding: 0;
        height: 100%;
        position: absolute;
        right: 0;
        min-width: auto;
        width: 50px;
      }
    }
    & svg {
      width: 20px;
      height: 20px;
    }
  }
  .newsList {
    display: flex;
    flex-direction: column;
    gap: 30px;

    .paginationDiv {
      display: flex;
      justify-content: center;
    }
  }
`;
