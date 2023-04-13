import axios from "axios";
import { useQuery } from "react-query";
import { BASE_URL, HEADERS, headersType } from "../../../constants/caller";

interface IOptions {
  params: Object;
  headers: headersType;
}

const getChannelsList = async (channelId: string, filter?: string) => {
  const endpoint = `${BASE_URL}/channel/channels/`;
  const params = {
    id: channelId,
    filter,
    hl: "en",
    gl: "US",
  };
  const options: IOptions = {
    params,
    headers: HEADERS,
  };
  const { data } = await axios.get(endpoint, options);
  return data;
};

export default function useChannelChannelsList(
  channelId: string,
  filter?: string
) {
  const { data, isLoading, refetch } = useQuery(
    ["channel/channels-list"],
    () => getChannelsList(channelId, filter),
    {
      enabled: false,
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
