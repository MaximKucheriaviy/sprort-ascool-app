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
};
