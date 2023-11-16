import { Page } from "@/components/Page/Page";
import { PDFImageSet } from "@/components/PDFImageSet/PDFImgageSet";
import { navigaion } from "@/service/navigationMap";
import { StyledPDFPage } from "@/components/styledPages/StyledPDFPage";

export default function DevProgramPage() {
  return (
    <Page title={navigaion.about[4].title}>
      <StyledPDFPage>
        <PDFImageSet folderName={"/developingPropram/"} count={9} />
      </StyledPDFPage>
    </Page>
  );
}
