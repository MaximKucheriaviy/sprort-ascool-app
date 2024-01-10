import styled from "@emotion/styled";

export const StyledMedcalOffice = styled.div`
  & .photoSubtitle {
    text-align: center;
    font-family: Roboto, sans-serif;
    font-size: 20px;
  }
  & .imageList {
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(3, 290px);
    gap: 30px;
    justify-content: center;
    border-bottom: 2px solid ${({ theme }) => theme.palette.headerColor.main};
    padding-bottom: 30px;
  }

  & .textDiv {
    h3 {
      margin-top: 30px;
      font-family: Roboto;
      font-size: 28px;
      font-style: normal;
      font-weight: 400;
      line-height: 161.188%;
    }

    p {
      margin-top: 20px;
      color: #000;
      text-align: justify;
      font-family: Roboto;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 161.188%;
    }
    .bold {
      margin-left: 0.5em;
      margin-right: 0.5em;
      font-weight: 600;
    }
    .noLeft {
      margin-left: 0;
    }
    .noRight {
      margin-right: 0;
    }
  }
`;
