import { useQuery } from "@tanstack/react-query";
import { fetchData, fetchDataWithToken } from "../api";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { useState } from "react";
import { ENDPOINTS } from "../data";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useFetchVacancies = (
  page: number,
  searchData: string,
  currencyFrom: number | string,
  currencyTo: number | string,
  industry: string[]
) => {
  const count = 4;
  const access = localStorage.authorization
    ? JSON.parse(localStorage.authorization)
    : "";
  const [authorization, setAuthorization] = useState(access);
  if (!authorization || authorization.ttl * 1000 < Date.now()) {
    fetchData(ENDPOINTS.authorization)
      .then((result) => {
        localStorage.setItem("authorization", JSON.stringify(result.data));
        setAuthorization(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const url = new URL(`${ENDPOINTS.vacancies}&page=${page}&count=${count}`);

  searchData && url.searchParams.set("keyword", searchData);
  currencyFrom && url.searchParams.set("payment_from", `${currencyFrom}`);
  currencyTo && url.searchParams.set("payment_to", `${currencyTo}`);
  industry.length > 0 && url.searchParams.set("catalogues", `${industry}`);

  const { data, isLoading, error } = useQuery({
    queryKey: [
      "fetchVacancies",
      page,
      searchData,
      currencyFrom,
      currencyTo,
      industry,
      authorization,
    ],
    queryFn: () => fetchDataWithToken(String(url), authorization.access_token),
  });
  if (error) {
    console.log(error);
  }

  return { data: data?.data || null, isLoading };
};

export const useFetchIndustries = () => {
  const url = ENDPOINTS.categories;
  const { data, isLoading, error } = useQuery({
    queryKey: ["fetchIndustries"],
    queryFn: () => fetchData(url),
  });
  if (error) {
    console.log(error);
  }
  return { data: data?.data || null, isLoading };
};
