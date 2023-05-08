import axios from "axios";
import React from "react";
import { useInfiniteQuery, useMutation } from "react-query";
import { BASE_URL, HEADERS, headersType } from "../../../constants/caller";
import { IBaseResponse } from "../../../types/types";
import EventBus from "../../../utils/EventBus";

interface IOptions {
  params: Object;
  headers: headersType;
}

interface IPayload {
  q: string;
  cursor?: string;
}

const getVideos = async (
  q: string,
  cursor?: string,
  selectedFilterCursor?: string
): Promise<IBaseResponse> => {
  const endpoint = `${BASE_URL}/search/`;
  let params = {
    q,
    hl: "en",
    gl: "IN",
  };
  if (cursor) {
    params = {
      ...params,
      cursor,
    };
  } else if (selectedFilterCursor) {
    params = {
      ...params,
      cursor: selectedFilterCursor,
    };
  }

  const options: IOptions = {
    params,
    headers: HEADERS,
  };

  const { data } = await axios.get(endpoint, options);
  return data;
};

export default function useGetSearchVideos(
  q: string,
  selectedFilterCursor: string
) {
  const {
    data,
    isLoading,
    refetch,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(
    ["search-videos", q, selectedFilterCursor],
    ({ pageParam = "" }) => getVideos(q, pageParam, selectedFilterCursor),
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
    refetch,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
}
