import styled from "@emotion/styled";

export const StyledHero = styled.section`
  background-color: ${({ theme }) => theme.palette.herroColor.main};
  padding-left: 63px;
  padding-top: 40px;
  height: 300px;
  .subTitle {
    color: #fff;
    font-family: "Alegreya Sans", sans-serif;
    font-size: 24px;
    font-style: italic;
    font-weight: 400;
    line-height: normal;
  }
  .title {
    width: 800px;
    margin-top: 24px;

    color: #fff;
    font-family: "Alegreya Sans", sans-serif;
    font-size: 64px;
    font-style: italic;
    font-weight: 800;
    line-height: normal;
    letter-spacing: 3.84px;
  }
`;
