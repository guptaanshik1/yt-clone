import axios from "axios";
import { useQuery } from "react-query";
import { BASE_URL, HEADERS, headersType } from "../constants/caller";

interface IOptions {
  params: Object;
  headers: headersType;
}

const searchComplete = async (q: string) => {
  const endpoint = `${BASE_URL}/auto-complete`;
  const params = { hl: "en", gl: "IN" };
  const options: IOptions = {
    params,
    headers: HEADERS,
  };
  const response = await axios.get(endpoint, options);
  return response;
};

export default function useSearchComplete(q: string) {
  const { data, isLoading } = useQuery(
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
  };
}
