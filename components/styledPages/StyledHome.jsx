import styled from "@emotion/styled";

export const StyledHome = styled.section`
  .homeContainer {
    background-color: white;
    padding-top: 40px;
    display: grid;
    padding-bottom: 40px;
    grid-template-columns: 816px 355px;
    justify-content: space-between;
    grid-column-gap: 40px;
  }

  & .searchForm {
    border-bottom: 2px solid ${({ theme }) => theme.palette.herroColor.main};
    padding-bottom: 28px;
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
  .backtextCaveat {
    background-image: url("/infoBack.jpg");
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    margin-top: 15px;
    margin-bottom: 30px;
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
    & .topButtonCover {
      padding-bottom: 27px;
      border-bottom: 2px solid ${({ theme }) => theme.palette.herroColor.main};
    }
    & h2 {
      margin-top: 10px;
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

      text-transform: none;
      font-family: Roboto, sans-serif;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: 0.84px;
      text-decoration: none;
    }
    & .homeGalery {
      margin-top: 30px;
      & img {
        width: 100%;
        height: auto;
      }
    }
  }
`;
