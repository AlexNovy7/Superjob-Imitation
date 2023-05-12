import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../api";
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import { AppDispatch, RootState } from "../redux/store";
export const REACT_APP_BASE_API_URL =
  "https://startup-summer-2023-proxy.onrender.com/2.0";
  
  export const useAppDispatch: () => AppDispatch = useDispatch
  export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


  export const useFetchVacancies = (page:number,searchData:string,currencyFrom:number|string,currencyTo:number|string,industry:string[]) => {
  const count = 4;
   const url = new URL(`https://startup-summer-2023-proxy.onrender.com/2.0/vacancies/?page=${page}&count=${count}`);
  
   searchData&&url.searchParams.set('keyword', searchData);
   currencyFrom&&url.searchParams.set('payment_from', `${currencyFrom}`);
   currencyTo&&url.searchParams.set('payment_to', `${currencyTo}`);
   
  industry.length>0&&url.searchParams.set('catalogues', `${industry}`);
   
  
  const { data,isLoading } = useQuery({
    queryKey: ["fetchVacancies",page,searchData,currencyFrom,currencyTo,industry],
    queryFn: () => fetchData(String(url)),
    keepPreviousData:true

  });
  return {data:data?.data||null,isLoading};
}

export const useFetchIndustries = () => {
     const url = "https://startup-summer-2023-proxy.onrender.com/2.0/catalogues/";
     
    const { data,isLoading } = useQuery({
      queryKey: ["fetchIndustries"],
      queryFn: () => fetchData(url),
      keepPreviousData:true
  
    });
    return {data:data?.data||null,isLoading};
  }


