import { Layout } from "@/components/Layout/Layout";
import { getNews } from "@/service/servierAPI";
import { StyledHome } from "@/components/styledPages/StyledHome";
import { NewsItem } from "@/components/NewsItem/NewsItem";
import Link from "next/link";
import { navigaion } from "@/service/navigationMap";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Pagination, TextField, Button } from "@mui/material";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
export const getServerSideProps = async (context) => {
  const { query } = context;
  const { news, pagesCount } = await getNews(
    query.page || 1,
    query.keyword || ""
  );
  return {
    props: {
      news,
      pagesCount,
    },
  };
};
export default function Home({ news, pagesCount }) {
  const router = useRouter();
  const [page, setPage] = useState(null);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    setPage(router.query.page ? Number.parseInt(router.query.page) : 1);
  }, [router.query.page]);

  const sublitHandler = (event) => {
    event.preventDefault();
    setKeyword(event.target[0].value);
    router.push({
      query: {
        keyword: event.target[0].value,
      },
    });
    event.target.reset();
  };

  const handlePageChage = (event, value) => {
    setPage(value);
    router.push({
      query: {
        page: value,
      },
    });
  };

  return (
    <Layout>
      <StyledHome>
        <div className="container homeContainer">
          <div className="newsList">
            <form className="searchForm" onSubmit={sublitHandler}>
              <div className="inputDiv">
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  label="Пошук"
                  size="small"
                  type="text"
                  value={keyword}
                  onChange={({ target }) => {
                    setKeyword(target.value);
                  }}
                  sx={{
                    width: "500px",
                  }}
                />
                <Button color="herroColor" type="submit">
                  <AiOutlineSearch />
                </Button>
              </div>
            </form>
            {news &&
              news.map((item) => <NewsItem key={item._id} news={item} />)}
            <div className="paginationDiv">
              <Pagination
                count={pagesCount}
                page={page || 1}
                onChange={handlePageChage}
                color="herroColor"
              />
            </div>
          </div>
          <div className="asside">
            <div className="topButtonCover">
              <Link className="assideLink" href="/">
                Інформація для вступу
              </Link>
            </div>
            <h2>Спортивні відділення</h2>
            <ul className="linekList">
              {navigaion.sport[0].navItems.map((item, index) => {
                return (
                  <li key={index}>
                    <Link
                      className="assideLink"
                      href={`/${navigaion.sport[0].link + "/" + item.link}`}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
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
            <div className="homeGalery">
              <Image
                src="/homeImages/i1.jpg"
                alt="students"
                width={300}
                height={100}
              />
            </div>
          </div>
        </div>
      </StyledHome>
    </Layout>
  );
}
