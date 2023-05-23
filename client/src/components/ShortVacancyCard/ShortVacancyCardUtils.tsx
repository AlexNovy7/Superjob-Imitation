import { ApiVacancyData } from "../../interfaces";

export const manipulateStar = (switchStar: boolean, data: ApiVacancyData) => {

  let switchedVacancies = localStorage.SwitchedVacancies ?
    JSON.parse(localStorage.SwitchedVacancies) : [];
  const hasId = switchedVacancies.some((object: any) => object.id === data.id)

  if (!switchStar) {
    !hasId && switchedVacancies.push(data)
  } else {
    switchedVacancies = switchedVacancies.filter((object: ApiVacancyData) => object.id !== data.id)
  }
  localStorage.setItem('SwitchedVacancies', JSON.stringify(switchedVacancies))
}


export const hasStar = (data: ApiVacancyData) => {
  const switchedVacancies = localStorage.SwitchedVacancies ?
    JSON.parse(localStorage.SwitchedVacancies) : [];

  return switchedVacancies.some((object: ApiVacancyData) => object.id === data.id)

}