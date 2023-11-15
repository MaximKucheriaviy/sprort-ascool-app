import { Page } from "@/components/Page/Page";
import Image from "next/image";
import { navigaion } from "@/service/navigationMap";
import { StyledCoaches } from "@/components/styledPages/StyledCoaches";

const CoachItem = ({ src, title, subtitle }) => {
  return (
    <li>
      <div className="ImageThumb">
        <Image src={src} alt="coachImage" width={393} height={413} />
      </div>
      <div className="textBox">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </li>
  );
};

const createCoach = (src, name, description) => {
  return { src, name, description };
};

export default function Coaches() {
  const coaches = [];
  coaches.push(
    createCoach(
      "vasheka.jpg",
      "Вашека Валентина Іванівна",
      "Почесний працівник фізичної культури та спорту України Заслужений працівник фізичної культури та спорту України Відмінник освіти України Заслужений тренер України "
    ),
    createCoach(
      "vasheka1.jpg",
      "Матвієць  Олена          Григорівна ",
      "Відмінник освіти України Заслужений тренер України "
    ),
    createCoach(
      "litvin.jpg",
      "Литвин  Василь       Сергійович ",
      "Відмінник освіти України Заслужений тренер України "
    ),
    createCoach(
      "fedorenko.jpg",
      "Федоренко  Анатолій Миколайович",
      "Відмінник освіти України Заслужений тренер України "
    ),
    createCoach(
      "ivanenco.jpg",
      "Іваненко Володимир Миколайович",
      "Заслужений тренер Казахстану та Киргизії"
    ),
    createCoach(
      "fandeeva.jpg",
      "Фандєєва Катерина Григорівна",
      " Майстер спорту  України"
    ),
    createCoach(
      "agafonzheva.jpg",
      "Агафонцева Наталія ",
      " Майстер спорту СРСР  тренер  ІІ категорії "
    ),
    createCoach(
      "fill.jpg",
      "Філь  Яна     Сергіївна ",
      "Майстер спорту  України  тренер  ІІ категорії "
    ),
    createCoach(
      "karpova.jpg",
      "Карпова Тетяна Григорівна",
      "  тренер  І категорії "
    ),
    createCoach(
      "pustovit.jpg",
      "Пустовіт Катерина Ігорівна",
      " тренер  ІІ категорії  "
    ),
    createCoach(
      "overchenko.jpg",
      "Оверченко Юрій Володимирович",
      " тренер  ІІ категорії  "
    ),
    createCoach(
      "vinichenko.jpg",
      "Вініченко Максим Миколайович",
      " тренер  ІІ категорії  "
    ),
    createCoach(
      "omelchuk.jpg",
      "Гаюк-Омельчук Олександра Олександрівна ",
      " тренер  ІІ категорії  "
    ),
    createCoach(
      "valezhka.jpg",
      "Валецька Світлана Михайлівна ",
      " тренер  ІІ категорії  "
    ),
    createCoach(
      "trofimova.jpg",
      "Трофімова Антоніна Леонідівна",
      " тренер  ІІ категорії  "
    ),
    createCoach("scherbakova.jpg", "Щербакова Інна Анатоліївна", ""),
    createCoach("maksymenko.jpg", "Максименко Альберт Станіславович", ""),
    createCoach("yakymenko.jpg", "Якименко Володимир Олександрович", ""),
    createCoach(
      "dariy.jpg",
      "Датій Ольга Германівна  ",
      "тренер вищої категорії "
    ),
    createCoach("dyachuk.jpg", "Дячук Майя Іванівна ", "тренер ІІ категорії  "),
    createCoach(
      "lavreniuk.jpg",
      "Лавренюк Олена  Іванівна",
      "тренер ІІ категорії  "
    ),
    createCoach("dyachuk.jpg", "Дячук Майя Іванівна ", "тренер ІІ категорії  "),
    createCoach(
      "dudnik.jpg",
      "Дуднік Людмила Василівна",
      "тренер ІІ категорії  "
    ),
    createCoach(
      "demianzev.jpg",
      "Дем'янцев      Василь Іванович",
      "тренер вищої категорії "
    ),
    createCoach(
      "ziglin.jpg",
      "Зіглін Олег Євгенович ",
      "тренер  ІІ категорії "
    ),
    createCoach("simogaeva.jpg", "Сімогаєва Ольга Володимирівна", ""),
    createCoach(
      "tyschinska.jpg",
      "Тищинська Олена Олександрівна",
      "тренер  І категорії "
    ),
    createCoach("lavreniukMen.jpg", "Лавренюк Олександр Олександрович", ""),
    createCoach("karpov.jpg", "Карпов Генадій Петрович", "")
  );
  return (
    <Page title={navigaion.about[2].title}>
      <StyledCoaches>
        {coaches.map((item) => (
          <CoachItem
            key={item.src}
            src={`/coaches/${item.src}`}
            title={item.name}
            subtitle={item.description}
          />
        ))}
      </StyledCoaches>
    </Page>
  );
}
