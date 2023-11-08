import styled from "@emotion/styled";

export const StyledNewsItem = styled.div`
  background-color: ${({ theme }) => theme.palette.blockBackground.main};
  .imageThumb {
    overflow: hidden;
    width: 367px;
    height: 211px;
    /* background-color: black; */
    object-fit: cover;
    display: flex;
    justify-content: center;
  }
  .content {
    margin-top: 14px;
    display: grid;
    grid-template-columns: 376px 323px;
    grid-gap: 40px;
  }
  img {
    width: 100%;
    height: auto;
  }
  .textContent {
    color: #000;

    font-family: Roboto, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 132.687%; /* 18.576px */
    letter-spacing: 0.84px;
  }
`;
