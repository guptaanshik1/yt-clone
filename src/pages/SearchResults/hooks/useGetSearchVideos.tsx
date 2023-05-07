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
  cursor?: string
): Promise<IBaseResponse> => {
  console.log(cursor);
  const endpoint = `${BASE_URL}/search/`;
  const params = {
    q,
    cursor,
    hl: "en",
    gl: "IN",
  };
  const options: IOptions = {
    params,
    headers: HEADERS,
  };

  const { data } = await axios.get(endpoint, options);
  return data;
};

export default function useGetSearchVideos(q: string) {
  const [filter, setFilter] = React.useState(" ̰");
  const {
    data,
    isLoading,
    refetch,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(
    ["search-videos", filter],
    ({ pageParam = "" }) => getVideos(q, filter ? filter : pageParam),
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

  React.useEffect(() => {
    EventBus.getInstance().addListener("api - /search", setFilter);
    return () => EventBus.getInstance().removeListener(setFilter);
  }, []);

  return {
    data,
    isLoading,
    refetch,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
}
