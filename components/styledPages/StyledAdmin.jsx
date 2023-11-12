import styled from "@emotion/styled";

export const StyledAdmin = styled.ul`
  & li:not(:last-child) {
    margin-bottom: 40px;
  }
  & .imageTitle {
    display: flex;
    gap: 30px;
    justify-content: space-around;
    & img {
      width: 100%;
      height: auto;
    }
  }
  & .reversed {
    flex-direction: row-reverse;
  }
  & .titleThumb {
    margin-top: 50px;
  }
  & .title {
    font-size: 40px;
    font-family: Roboto, sans-serif;
  }

  & .subtitle {
    margin-top: 30px;
    width: 760px;
    font-size: 27px;
    font-family: Roboto, sans-serif;
  }
  & .credo {
    margin-top: 40px;
    font-size: 30px;
    font-family: Roboto, sans-serif;
    font-style: italic;
  }

  & .infoThumb {
    margin-top: 20px;
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(2, 1fr);
    padding-bottom: 30px;
    padding-top: 30px;
    border-bottom: 2px solid ${({ theme }) => theme.palette.herroColor.main};
    border-top: 2px solid ${({ theme }) => theme.palette.herroColor.main};
  }
  & .text {
    color: #000;
    text-align: justify;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 161.188%;
  }
`;
