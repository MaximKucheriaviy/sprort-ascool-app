import styled from "@emotion/styled";

export const StyledNewsItem = styled.div`
  background-color: ${({ theme }) => theme.palette.blockBackground.main};
  padding: 24px 57px 53px 20px;
  border-radius: 5px;

  .title {
    color: #000;
    font-family: Roboto, sans-serif;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .imageThumb {
    overflow: hidden;
    width: 367px;
    height: 211px;
    text-align: center;
  }
  .content {
    margin-top: 14px;
    display: grid;
    grid-template-columns: 376px 323px;
    grid-gap: 40px;

    .imageCover {
      height: 100%;
      display: inline-block;
      overflow: hidden;
      border-radius: 10px;
    }
  }
  img {
    width: auto;
    height: 100%;
  }
  .textContent {
    color: #000;

    text-align: justify;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 161.188%; /* 22.566px */
  }
`;
