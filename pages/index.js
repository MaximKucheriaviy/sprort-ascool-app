import { Layout } from "@/components/Layout/Layout";
import { getNews } from "@/service/servierAPI";
import { StyledHome } from "@/components/styledPages/StyledHome";
import { NewsItem } from "@/components/NewsItem/NewsItem";

export const getStaticProps = async (context) => {
  const news = await getNews();
  return {
    props: {
      news,
    },
  };
};
export default function Home({ news }) {
  return (
    <Layout>
      <StyledHome>
        <div className="newsList">
          {news && news.map((item) => <NewsItem key={item._id} news={item} />)}
        </div>
        <div className="asside"></div>
      </StyledHome>
    </Layout>
  );
}
