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
`;
