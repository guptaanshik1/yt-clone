import axios from "axios";
import { useInfiniteQuery, useQuery } from "react-query";
import { BASE_URL, HEADERS, headersType } from "../../../constants/caller";

interface IOptions {
  params: object;
  headers: headersType;
}

const getRelatedContent = async (id: string, cursor?: string): Promise<any> => {
  const endpoint = `${BASE_URL}/video/related-contents/`;
  const params = { id, cursor, hl: "en", gl: "US" };
  const headers = HEADERS;
  const options: IOptions = {
    params,
    headers,
  };
  const { data } = await axios.get(endpoint, options);
  return data;
};

export default function useGetRelatedContent(id: string) {
  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery(
    ["video/related-content"],
    ({ pageParam = "" }) => getRelatedContent(id, pageParam),
    {
      getNextPageParam: (lastPage) => {
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
  };
}
