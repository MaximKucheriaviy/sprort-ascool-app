import styled from "@emotion/styled";

export const StyledHome = styled.section`
  background-color: white;
  padding-top: 40px;
  display: grid;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 40px;
  grid-template-columns: 816px 355px;
  justify-content: center;
  grid-column-gap: 40px;
  .newsList {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  .backtextCaveat {
    background-image: url("/infoBack.jpg");
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    margin-top: 15px;
    overflow: hidden;
  }
  .textCaveat {
    color: #ffffff;
    text-shadow: 1px 1px 10px black;
    font-family: Caveat, Arial;
    font-size: 25px;
    font-weight: 500;
    padding: 20px;
    text-align: center;
    backdrop-filter: blur(3px);
    backdrop-filter: contrast(40%);
  }
  .asside {
    & h2 {
      margin-top: 27px;
      text-align: center;

      color: #000;

      text-align: center;
      font-family: Roboto;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }

    & .linekList {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-top: 10px;
      padding-bottom: 15px;
      border-bottom: 2px solid ${({ theme }) => theme.palette.herroColor.main};
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

      font-family: Roboto;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      text-decoration: none;
      line-height: normal;
    }
  }
`;
