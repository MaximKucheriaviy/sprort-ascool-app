import { Page } from "@/components/Page/Page";
import { navigaion } from "@/service/navigationMap";
import { StyledMedcalOffice } from "@/components/styledPages/StyledMedicalOffice";
import { CoachItem } from "@/components/CoachItem/CoachItem";

export default function MedicalOfice() {
  return (
    <Page title={navigaion.about[5].title}>
      <StyledMedcalOffice>
        <p className="photoSubtitle">
          Медичний супровід навчально-тренувального процесу забезпечують:
        </p>
        <ul className="">
          <CoachItem
            title="Погребняк Тамара Михайлівна"
            src="/medical/pohrebniak.jpg"
          />
          <CoachItem
            title="Лук'янець Тамара Олександрівна"
            src="/medical/lukyanezh.jpg"
          />
          <CoachItem
            title="Мілянець Діана Анатоліїївна"
            src="/medical/milianezh.jpg"
          />
        </ul>
      </StyledMedcalOffice>
    </Page>
  );
}
