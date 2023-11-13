import { Page } from "@/components/Page/Page";
import { getNewsDyID } from "@/service/servierAPI";
import Image from "next/image";
import { ImageList, ImageListItem } from "@mui/material";
import { StyledNewsPage } from "@/components/styledPages/StyledNewsPage";

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  const data = await getNewsDyID(id);
  return {
    props: {
      news: data.news,
    },
  };
};

export default function NewsPage({ news }) {
  const splitText = news.textContent.split("\n");

  return (
    <Page title={news.title}>
      <StyledNewsPage>
        <div className="infoblock">
          <div>
            {splitText.map((item, index) => (
              <p className="text" key={index}>
                {item}
              </p>
            ))}
          </div>
          <Image
            style={{
              width: "500px",
              height: "auto",
              display: "block",
            }}
            src={news.postImage.url}
            alt="POSTER"
            width={400}
            height={250}
          />
        </div>
        <ImageList variant="quilted" cols={3} gap={8}>
          {news.galery.map(({ url, _id }) => (
            <ImageListItem key={_id}>
              <Image
                style={{
                  width: "100%",
                  height: "auto",
                }}
                src={url}
                alt="galery item"
                width={500}
                height={500}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </StyledNewsPage>
    </Page>
  );
}
