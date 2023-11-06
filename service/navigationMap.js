const createNavItem = (title, link) => {
  return {
    title,
    link,
  };
};

export const navigaion = {
  about: [
    createNavItem("Історія школи", "history"),
    createNavItem("Адміністрація", "administration"),
    createNavItem("Тренерський колектив", "coaches"),
    createNavItem("Освітня програма", "educational-program"),
    createNavItem("Програма розвитку", "development-program"),
    createNavItem("Медичний кабінет", "medical-office"),
    createNavItem("Котакти", "contacts"),
  ],
  stadarts: [
    createNavItem("Програми з видів спорту", "programs"),
    createNavItem("Нормативні документи", "docs"),
  ],
  sport: [
    createNavItem("Спортивні відділення", "sport-department"),
    createNavItem("Навчально-тренувальна робота", "edocation-work"),
    createNavItem("Календар змагань", "calender"),
  ],
  metodWork: [
    createNavItem("Дистанційні тренування", "on-line"),
    createNavItem("Національно-патріотичне виховання", "national-work"),
    createNavItem("Протидія булінгу", "buling"),
    createNavItem("Пожежна безпека", "fire-safe"),
    createNavItem("Техніка безпеки під час воєнного стану", "war-safe"),
  ],
  parrentsInfo: [
    createNavItem("Інформація для вступу", "vstup"),
    createNavItem("Контакти тренерського складу", "coatch-contacts"),
  ],
  prozoro: [
    createNavItem("Звіти про надходження коштів", "finance-report"),
    createNavItem("Річний звіт", "year-report"),
    createNavItem("Статут", "regulations"),
    createNavItem("Вакансії", "vacancies"),
  ],
};
