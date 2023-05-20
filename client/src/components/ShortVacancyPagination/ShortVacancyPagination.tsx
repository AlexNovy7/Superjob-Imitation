import { Loader } from '@mantine/core';
import { useEffect, useState } from 'react';
import { Pagination } from '@mantine/core';
import { useAppDispatch, useAppSelector, useFetchVacancies } from '../../hooks';
import { ShortVacancyCard } from '../ShortVacancyCard/ShortVacancyCard';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../data/routing';
import { setHeaderLink } from '../../redux/slices';
function pageCount(totalPages: number, activePage: number, amountOfVacanciesOnPage: number) {
  if (totalPages) {
    const amountOfPages = Math.ceil(totalPages / amountOfVacanciesOnPage) > 125 ? 126 : Math.ceil(totalPages / amountOfVacanciesOnPage)

    if (activePage + 2 < amountOfPages) {
      return activePage + 2
    } else if (activePage + 1 < amountOfPages) {
      return activePage + 1
    } else { return amountOfPages };
  } else return 0;
}
interface queryUsageProps {
  queryUsage: boolean;
  mtPagination: number;
}

export function ShortVacancyPagination({ queryUsage, mtPagination }: queryUsageProps) {
  const dispatch = useAppDispatch();
 
  const navigate = useNavigate();
  const [activePage, setPage] = useState(1);
  const sortData = useAppSelector((state) => state.appReducer)
  //refactor?
  const itemsPerPage = 4;
  const startItem = (activePage - 1) * itemsPerPage;
  const endItem = startItem + itemsPerPage;
  const switchedVacancies = localStorage.SwitchedVacancies ?
    JSON.parse(localStorage.SwitchedVacancies) : [];
  const switchedVacanciesPerPage = switchedVacancies.slice(startItem, endItem)
  const { data, isLoading } = useFetchVacancies(activePage, sortData.searchData, sortData.filterData.paymentFrom, sortData.filterData.paymentTo, sortData.filterData.industry);
  const [vacanciesData, loading, totalPages] = queryUsage ?
    [data?.objects, isLoading, data?.total] :
    [switchedVacanciesPerPage, null, switchedVacancies.length]
  

  useEffect(() => {
    if (typeof vacanciesData !== 'undefined' && vacanciesData.length === 0 && !isLoading) {
      navigate(PATHS.notFound)
    }
  }, [isLoading, vacanciesData, navigate]);
  
  useEffect(() => {
    queryUsage ? dispatch(setHeaderLink(PATHS.welcome)) :
    dispatch(setHeaderLink(PATHS.select))
  }, [queryUsage, dispatch]);

  const handleCardClick = (vacancy: any) => {
    localStorage.setItem('clickedVacancy', JSON.stringify(vacancy));
    navigate(PATHS.vacancy);
  }



  return (
    <>{loading ? (
      <Loader />
    ) : (
      <>{vacanciesData &&
        vacanciesData.map((item: any, index: number) => (
          <div onClick={() => handleCardClick(item)} key={index}>
            <ShortVacancyCard
              card_minHeight={137}
              profession_text_fontWeight={600}
              profession_text_fontSize={20}
              profession_text_color={'#5E96FC'}
              typeOfWork_text_fontWeight={400}
              typeOfWork_text_fontSize={16}
              payment_text_fontSize={16}
              data={item}

            />

          </div>
        ))}<Pagination
          position="center"
          value={activePage}
          onChange={setPage}
          mt={mtPagination}
          mb={42}
          total={pageCount(totalPages, activePage, itemsPerPage)}
          styles={{
            dots: { display: "none" },

          }}

        /></>)}
    </>

  );
}