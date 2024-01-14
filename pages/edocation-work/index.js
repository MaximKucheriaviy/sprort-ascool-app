import { Page } from "@/components/Page/Page";
import { PDFImageSet } from "@/components/PDFImageSet/PDFImgageSet";
import { navigaion } from "@/service/navigationMap";
import { StyledPDFPage } from "@/components/styledPages/StyledPDFPage";

export default function EducationalProgram() {
  return (
    <Page title={navigaion.sport[1].title}>
      <StyledPDFPage>
        <PDFImageSet folderName={"/educationalProgram/"} count={1} />
      </StyledPDFPage>
    </Page>
  );
}
