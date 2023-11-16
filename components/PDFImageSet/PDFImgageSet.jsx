import { StyledPDFImageSet } from "./StyledPDFImageSet";
import Image from "next/image";

export const PDFImageSet = ({ folderName, count }) => {
  const items = [];
  for (let i = 1; i <= count; i++) {
    items.push(folderName + i + ".jpg");
  }
  return (
    <>
      {items.map((item) => (
        <li key={item}>
          <Image src={item} alt="PDF image" width={826} height={1169} />
        </li>
      ))}
    </>
  );
};
