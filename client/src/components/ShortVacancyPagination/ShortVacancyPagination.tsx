import { Loader } from '@mantine/core';
import React, {  useState } from 'react';

import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
import {  useAppSelector, useFetchVacancies } from '../../hooks';
import { ShortVacancyCard } from '../ShortVacancyCard/ShortVacancyCard';




function Items({ currentItems }:any) {

  
  return (
    <>
      {currentItems &&
        currentItems.map((item:any,index:number) => (
          <div key={index}>
            <ShortVacancyCard  profession={item.profession} paymentFrom={item.payment_from} paymentTo={item.payment_to} currency={item.currency} typeOfWork={item.type_of_work.title} country={item.town.title}  />
          </div>
        ))}
    </>
  );
}

export function ShortVacancyPagination() {
  const [itemOffset, setItemOffset] = useState(0);
  const sortData = useAppSelector((state)=>state.appReducer)

  const {data,isLoading} = useFetchVacancies(itemOffset,sortData.searchData,sortData.filterData.paymentFrom,sortData.filterData.paymentTo,sortData.filterData.industry);



 
  const pageCount = Math.ceil(data?data.total / data.objects.length:0);
  const handlePageClick = (event: { selected: React.SetStateAction<number>; }) => {
    setItemOffset(event.selected );
  };

  return (
    <>{isLoading ? (
      <Loader />
    ) : ( 
    <><Items currentItems={data?.objects} /><ReactPaginate
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null} /></>)}
    </>
  );
}