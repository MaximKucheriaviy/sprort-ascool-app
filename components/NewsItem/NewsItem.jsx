import { StyledNewsItem } from "./StyledNewsItem";
import Image from "next/image";
import { MdExpandMore } from "react-icons/md";
import { Button } from "@mui/material";
import { useRouter } from "next/router";

const symbolsCount = 374;

export const NewsItem = ({ news }) => {
  const router = useRouter();
  const textContent =
    news.textContent.length < symbolsCount
      ? news.textContent
      : news.textContent.slice(0, symbolsCount) + "...";
  const clickHandler = () => {
    router.push(`/news/${news._id}`);
  };
  return (
    <StyledNewsItem>
      <h2 className="title">{news.title}</h2>
      <div className="content">
        <div className="imageThumb">
          <div className="imageCover">
            <Image
              src={news.postImage.url}
              alt="poster"
              width={367}
              height={211}
            />
          </div>
        </div>
        <p className="textContent">{textContent}</p>
      </div>
      <div className="buttonDiv">
        <Button
          onClick={clickHandler}
          variant="outlined"
          sx={{
            borderRadius: "50%",
            minWidth: "auto",
            width: "30px",
            height: "30px",
            padding: "0",
          }}
        >
          <MdExpandMore />
        </Button>
      </div>
    </StyledNewsItem>
  );
};
