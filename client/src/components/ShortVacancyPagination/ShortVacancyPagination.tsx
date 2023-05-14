import { Loader } from '@mantine/core';
import {  useState } from 'react';
import { Pagination } from '@mantine/core';

import {  useAppSelector, useFetchVacancies } from '../../hooks';
import { ShortVacancyCard } from '../ShortVacancyCard/ShortVacancyCard';
function pageCount(totalPages:number,activePage:number,amountOfVacancies:number){
  if(totalPages){
    const amountOfPages=Math.ceil(totalPages/amountOfVacancies)>125?126:Math.ceil(totalPages/amountOfVacancies)
    
    if(activePage+2<amountOfPages){
      return activePage+2
    } else if(activePage+1<amountOfPages){
      return activePage+1
    } else {return amountOfPages-1};
  } else return 0;
}

export function ShortVacancyPagination() {
  const [activePage, setPage] = useState(1);
  const sortData = useAppSelector((state)=>state.appReducer)

  const {data,isLoading} = useFetchVacancies(activePage,sortData.searchData,sortData.filterData.paymentFrom,sortData.filterData.paymentTo,sortData.filterData.industry);

  console.log(data);

  return (
    <>{isLoading ? (
      <Loader />
    ) : ( 
    <>{data?.objects &&
      data?.objects.map((item:any,index:number) => (
        <div key={index}>
          <ShortVacancyCard  profession={item.profession} paymentFrom={item.payment_from} paymentTo={item.payment_to} currency={item.currency} typeOfWork={item.type_of_work.title} country={item.town.title}  />
        </div>
      ))}<Pagination 
       position="center"
       value={activePage} 
       onChange={setPage} 
       mt={38}
       mb={42}
       total={pageCount(data.total,activePage,4)}
       styles={{
        dots:{display:"none"},
        
    }}
       
       /></>)}
    </>
     
  );
}