import styled from "@emotion/styled";

export const StyledNewsPage = styled.div`
  & .text {
    color: #000;
    text-align: justify;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 161.188%;
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  & .infoblock {
    display: flex;
    align-items: flex-start;
    gap: 30px;
    padding-bottom: 30px;
    border-bottom: 2px solid ${({ theme }) => theme.palette.herroColor.main};
    margin-bottom: 30px;
  }
`;
