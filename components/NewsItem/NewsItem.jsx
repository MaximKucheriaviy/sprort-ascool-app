import { StyledNewsItem } from "./StyledNewsItem";
import Image from "next/image";

const symbolsCount = 374;

export const NewsItem = ({ news }) => {
  const textContent =
    news.textContent.length < symbolsCount
      ? news.textContent
      : news.textContent.slice(0, symbolsCount) + "...";
  return (
    <StyledNewsItem>
      <h2>{news.title}</h2>
      <div className="content">
        <div className="imageThumb">
          <Image
            src={news.postImage.url}
            alt="poster"
            width={367}
            height={211}
          />
        </div>
        <p className="textContent">{textContent}</p>
      </div>
    </StyledNewsItem>
  );
};
