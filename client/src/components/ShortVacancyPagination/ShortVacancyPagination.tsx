import { Loader } from '@mantine/core';
import {  useState } from 'react';
import { Pagination } from '@mantine/core';

import {  useAppSelector, useFetchVacancies } from '../../hooks';
import { ShortVacancyCard } from '../ShortVacancyCard/ShortVacancyCard';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../data/routing';
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
  const navigate = useNavigate();
  const handleCardClick = (vacancy:any) => {
    localStorage.setItem('clickedVacancy',JSON.stringify(vacancy));
    navigate(PATHS.vacancy);
}

  

  return (
    <>{isLoading ? (
      <Loader />
    ) : ( 
    <>{data?.objects &&
      data?.objects.map((item:any,index:number) => (
        <div onClick={()=>handleCardClick(item)} key={index}>
          <ShortVacancyCard
          card_minHeight={137} 
          profession_text_fontWeight={600}
           profession_text_fontSize={20}
           profession_text_color={'#5E96FC'}
           typeOfWork_text_fontWeight={400}
           typeOfWork_text_fontSize={16}  
           payment_text_fontSize={16}
            profession={item.profession} paymentFrom={item.payment_from} paymentTo={item.payment_to} currency={item.currency} typeOfWork={item.type_of_work.title} country={item.town.title} />
           
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