import axios from "axios";
import { useQuery } from "react-query";
import { BASE_URL, HEADERS, headersType } from "../../../constants/caller";

interface IOptions {
  params: Object;
  headers: headersType;
}

const getVideos = async (q: string, cursor?: string): Promise<any> => {
  const endpoint = `${BASE_URL}/search/`;
  const params = { q, cursor, hl: "en", gl: "IN" };
  const options: IOptions = {
    params,
    headers: HEADERS,
  };

  const { data } = await axios.get(endpoint, options);
  return data;
};

export default function useGetSearchVideos(q: string, cursor?: string) {
  const { data, isLoading, refetch } = useQuery(
    ["search/videos", cursor],
    () => getVideos(q, cursor),
    {
      enabled: !!q,
      onError(err) {
        console.log(err);
      },
    }
  );
  return {
    data,
    isLoading,
    refetch,
  };
}
