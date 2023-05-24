import { Container, Loader, useMantineTheme } from '@mantine/core';
import { useEffect, useState } from 'react';
import { Pagination } from '@mantine/core';
import { useAppDispatch, useAppSelector, useFetchVacancies } from '../../hooks';
import { ShortVacancyCard } from '../ShortVacancyCard/ShortVacancyCard';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../data';
import { setHeaderLink } from '../../redux/slices';
import { ApiVacancyData, queryUsageProps } from '../../interfaces';
import { pageCount } from './ShortVacancyPaginationUtils';

export function ShortVacancyPagination({ queryUsage, mtPagination }: queryUsageProps) {
  const dispatch = useAppDispatch();
  const theme = useMantineTheme();
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState(1);
  const sortData = useAppSelector((state) => state.appReducer)
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

  const handleCardClick = (vacancy: ApiVacancyData) => {
    localStorage.setItem('clickedVacancy', JSON.stringify(vacancy));
    navigate(`${PATHS.vacancy}/${vacancy.id}`);
  }

  return (
    <>{loading ? (
      <Loader />
    ) : (
      <>
      <Container mih={635} p={0}>
      {vacanciesData &&
        vacanciesData.map((item: ApiVacancyData, index: number) => (
          <div onClick={() => handleCardClick(item)} key={index}>
            <ShortVacancyCard
              card_minHeight={137}
              profession_text_fontWeight={600}
              profession_text_fontSize={20}
              profession_text_color={theme.colors.MyApp[1]}
              typeOfWork_text_fontWeight={400}
              typeOfWork_text_fontSize={16}
              payment_text_fontSize={16}
              data={item}
            />
          </div>
        ))}
      </Container>
      <Pagination
          position="center"
          color={ theme.colors.MyApp[1]}
          value={activePage}
          onChange={setActivePage}
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