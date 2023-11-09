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
      <div className="container">
        <StyledHome>
          <div className="newsList">
            {news &&
              news.map((item) => <NewsItem key={item._id} news={item} />)}
          </div>
          <div className="asside">
            <div className="backtextCaveat">
              <p className="textCaveat">
                Дитячо-юнацька спортивна школа № 1 є закладом спеціалізованої
                позашкільної освіти спортивного профілю - закладом фізичної
                культури і спорту, який забезпечує розвиток здібностей
                вихованців в обраному виді спорту, визнаному в Україні, створює
                необхідні умови для гармонійного виховання, фізичного розвитку,
                повноцінного оздоровлення, змістовного відпочинку і дозвілля
                дітей та молоді, самореалізації, набуття навичок здорового
                способу життя, підготовки спортсменів для резервного спорту.{" "}
              </p>
            </div>
          </div>
        </StyledHome>
      </div>
    </Layout>
  );
}
