import { Layout } from "../Layout/Layout";
import styled from "@emotion/styled";
import { StyledTytle } from "../ServiceStyles/StyledTytle";

const Container = styled.div`
  background-color: white;
  padding-top: 40px;
  padding-bottom: 70px;
`;

export const Page = ({ title, children }) => {
  return (
    <Layout>
      <section>
        <Container
          style={{
            paddingLeft: "30px",
            paddingRight: "30px",
          }}
          className="container"
        >
          <StyledTytle>{title}</StyledTytle>
          {children}
        </Container>
      </section>
    </Layout>
  );
};
