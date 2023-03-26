import axios from "axios";
import { useQuery } from "react-query";
import { BASE_URL, HEADERS, headersType } from "../../../constants/caller";

interface IOptions {
  params: object;
  headers: headersType;
}

const getVideoDetails = async (id: string): Promise<any> => {
  const endpoint = `${BASE_URL}/video/details/`;
  const params = { id, hl: "en", gl: "US" };
  const headers = HEADERS;
  const options: IOptions = {
    params,
    headers,
  };
  const response = await axios.get(endpoint, options);
  return response;
};

export default function useGetVideoDetails(id: string) {
  const { data, isLoading } = useQuery(
    "video/details",
    () => getVideoDetails(id),
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
