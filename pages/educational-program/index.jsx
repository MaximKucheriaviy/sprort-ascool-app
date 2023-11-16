import { Page } from "@/components/Page/Page";
import { PDFImageSet } from "@/components/PDFImageSet/PDFImgageSet";
import { navigaion } from "@/service/navigationMap";
import { StyledPDFPage } from "@/components/styledPages/StyledPDFPage";

export default function EducationProgram() {
  return (
    <Page title={navigaion.about[3].title}>
      <StyledPDFPage>
        <PDFImageSet count={12} folderName={"/educationProgram/"} />
      </StyledPDFPage>
    </Page>
  );
}
