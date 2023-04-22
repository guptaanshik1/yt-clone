import axios from "axios";
import { useQuery } from "react-query";
import { BASE_URL, HEADERS, headersType } from "../constants/caller";

interface IOptions {
  params: Object;
  headers: headersType;
}

interface IResponse {
  query: string;
  results: string[];
}

const searchComplete = async (q: string): Promise<IResponse> => {
  const endpoint = `${BASE_URL}/auto-complete/`;
  const params = { q, hl: "en", gl: "IN" };
  const options: IOptions = {
    params,
    headers: HEADERS,
  };
  const { data } = await axios.get(endpoint, options);
  return data;
};

export default function useSearchComplete(q: string) {
  const { data, isLoading, refetch } = useQuery(
    "search/complete",
    () => searchComplete(q),
    {
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
