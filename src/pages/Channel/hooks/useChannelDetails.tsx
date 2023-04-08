import axios from "axios";
import { useQuery } from "react-query";
import { BASE_URL, HEADERS, headersType } from "../../../constants/caller";

interface IOptions {
  params: Object;
  headers: headersType;
}

const getDetails = async (channelId: string) => {
  const endpoint = `${BASE_URL}/channel/details/`;
  const params = { id: channelId, hl: "en", gl: "US" };
  const options: IOptions = {
    params,
    headers: HEADERS,
  };
  const { data } = await axios.get(endpoint, options);
  return data;
};

export default function useChannelDetails(channelId: string) {
  const { data, isLoading } = useQuery(
    "search/complete",
    () => getDetails(channelId),
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
