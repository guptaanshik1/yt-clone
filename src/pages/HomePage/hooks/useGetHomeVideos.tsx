import axios from "axios";
import React from "react";
import { useInfiniteQuery, useQuery } from "react-query";
import { BASE_URL, HEADERS, headersType } from "../../../constants/caller";
import { IBaseResponse } from "../../../types/types";

interface IOptions {
  params: Object;
  headers: headersType;
}

const getVideos = async (
  q: string,
  cursor?: string
): Promise<IBaseResponse | undefined> => {
  const endpoint = `${BASE_URL}/search/`;
  const params = { q, cursor, hl: "en", gl: "IN" };
  const options: IOptions = {
    params,
    headers: HEADERS,
  };

  const { data } = await axios.get(endpoint, options);
  return data;
};

export default function useGetHomeVideos(q: string) {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery(
      "home-videos",
      ({ pageParam = "" }) => getVideos(q, pageParam),
      {
        getNextPageParam: (lastPage) => {
          // @ts-ignore
          return lastPage?.cursorNext;
        },
        onError: (err) => {
          // @ts-ignore
          const { response } = err;
          alert(response?.data?.message);
        },
      }
    );

  return {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
}
