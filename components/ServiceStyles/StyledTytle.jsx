import styled from "@emotion/styled";

export const StyledTytle = styled.h2`
  color: #000;
  text-align: justify;
  font-family: Roboto;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 161.188%;
  margin-bottom: 40px;
  padding-bottom: 15px;

  border-bottom: 2px solid ${({ theme }) => theme.palette.herroColor.main};
`;
