import axios from "axios";
import { useMutation } from "react-query";
import { BASE_URL, HEADERS, headersType } from "../../../constants/caller";

interface IOptions {
  params: Object;
  headers: headersType;
}

interface IPayload {
  q: string;
  cursor?: string;
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

export default function useGetSearchVideos() {
  const { mutate, data, isLoading } = useMutation(
    ["search/videos"],
    ({ q, cursor }: IPayload) => getVideos(q, cursor),
    {
      onError(err) {
        console.log(err);
      },
    }
  );
  return {
    mutate,
    data,
    isLoading,
  };
}
