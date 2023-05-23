import { useQuery } from "@tanstack/react-query";
import { fetchData, fetchDataWithToken } from "../api";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { useState } from "react";

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
    : null;
  const [authorization, setAuthorization] = useState(access);
  if (!authorization || authorization.ttl * 1000 < Date.now()) {
    const a =
      "https://startup-summer-2023-proxy.onrender.com/2.0/oauth2/password/?login=sergei.stralenia@gmail.com&password=paralect123&client_id=2356&client_secret=v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948&hr=0";
    fetchData(a).then((result) => {
      localStorage.setItem("authorization", JSON.stringify(result.data));
      setAuthorization(result.data);
    });
  }
  const url = new URL(
    `https://startup-summer-2023-proxy.onrender.com/2.0/vacancies/?published=1&page=${page}&count=${count}`
  );

  searchData && url.searchParams.set("keyword", searchData);
  currencyFrom && url.searchParams.set("payment_from", `${currencyFrom}`);
  currencyTo && url.searchParams.set("payment_to", `${currencyTo}`);

  industry.length > 0 && url.searchParams.set("catalogues", `${industry}`);
  const { data, isLoading } = useQuery({
    queryKey: [
      "fetchVacancies",
      page,
      searchData,
      currencyFrom,
      currencyTo,
      industry,
    ],
    queryFn: () => fetchDataWithToken(String(url),authorization.access_token),
  });

  // keepPreviousData: true, think about??????
  return { data: data?.data || null, isLoading };
};

export const useFetchIndustries = () => {
  const url = "https://startup-summer-2023-proxy.onrender.com/2.0/catalogues/";

  const { data, isLoading } = useQuery({
    queryKey: ["fetchIndustries"],
    queryFn: () => fetchData(url),
  });
  return { data: data?.data || null, isLoading };
};
