import styled from "@emotion/styled";

export const StyledCoachContacts = styled.div`
  & .contactTable {
    margin-top: 50px;
    h3 {
      color: #000;
      text-align: justify;
      font-family: Roboto;
      font-size: 28px;
      font-style: normal;
      font-weight: 600;
      line-height: 161.188%;
      margin-bottom: 30px;
    }
    & .contactItem {
      display: flex;
      align-items: baseline;
      gap: 20px;
    }
    a,
    p {
      color: #000;
      text-align: justify;
      font-family: Roboto;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 161.188%;
      text-decoration: none;
    }
  }
`;
