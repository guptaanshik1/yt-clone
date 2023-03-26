import axios from "axios";
import { useQuery } from "react-query";
import { BASE_URL, HEADERS, headersType } from "../../../constants/caller";

interface IOptions {
  params: object;
  headers: headersType;
}

const getVideoDetails = async (id: string): Promise<any> => {
  const endpoint = `${BASE_URL}/video/details/?id=${id}`;
  const params = { hl: "en", gl: "US" };
  const headers = HEADERS;
  const options: IOptions = {
    params,
    headers,
  };
  const { data } = await axios.get(endpoint, options);
  return data;
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
