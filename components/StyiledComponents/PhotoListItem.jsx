import styled from "@emotion/styled";

export const PhotoListItem = styled.li`
  background-color: #f5f5f5;
  border-radius: 10px;
  overflow: hidden;
  & .ImageThumb {
    padding: 20px 20px 20px 20px;
    background-color: #dfdfdf;
  }
  & img {
    border-radius: 10px;
    width: auto;
    height: 100%;
  }

  & .textBox {
    padding: 10px;
  }
  & h3 {
    margin-top: 20px;
    font-size: 20px;
    font-family: Roboto, sans-serif;
  }

  & p {
    margin-top: 20px;
    font-size: 14px;
    font-family: Roboto, sans-serif;
    text-align: justify;
  }
`;
