export const pageCount = (
  totalPages: number,
  activePage: number,
  amountOfVacanciesOnPage: number
) => {
  if (totalPages) {
    const amountOfPages =
      Math.ceil(totalPages / amountOfVacanciesOnPage) > 125
        ? 126
        : Math.ceil(totalPages / amountOfVacanciesOnPage);
    if (activePage + 2 < amountOfPages) {
      return activePage + 2;
    } else if (activePage + 1 < amountOfPages) {
      return activePage + 1;
    } else {
      return amountOfPages;
    }
  } else return 0;
};
