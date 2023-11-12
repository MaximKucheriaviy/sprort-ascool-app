import styled from "@emotion/styled";

export const StyledHystory = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 40px;
  & .textContainer {
    display: flex;
    flex-direction: column;
    gap: 10px;
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

  & .imageThumb {
    padding-top: 10px;
    & img {
      width: 80%;
      height: auto;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;
