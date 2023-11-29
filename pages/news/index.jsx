import { Page } from "@/components/Page/Page";
import { getNews } from "@/service/servierAPI";
import { StyledNews } from "@/components/styledPages/StyledNews";
import { NewsItem } from "@/components/NewsItem/NewsItem";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Pagination, TextField, Button } from "@mui/material";
import { AiOutlineSearch } from "react-icons/ai";
export const getServerSideProps = async (context) => {
  const { query } = context;
  try {
    const data = await getNews(query.page || 1, query.keyword || "");
    if (!data) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        news: data.news,
        pagesCount: data.pagesCount,
      },
    };
  } catch (err) {}
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
    <Page title={"Новини"}>
      <StyledNews>
        <div className="homeContainer">
          <div className="newsList">
            <form className="searchForm" onSubmit={sublitHandler}>
              <div>
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
        </div>
      </StyledNews>
    </Page>
  );
}
