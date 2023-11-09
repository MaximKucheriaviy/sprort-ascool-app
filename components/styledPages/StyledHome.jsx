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
`;
