import axios from "axios";
import { useQuery } from "react-query";
import { BASE_URL, HEADERS, headersType } from "../../../constants/caller";

interface IOptions {
  params: Object;
  headers: headersType;
}

const getChannelsFilters = async (channelId: string) => {
  const endpoint = `${BASE_URL}/channel/channels/`;
  const params = {
    id: channelId,
    filter: "all_collections",
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

export default function useChannelChannelsFilters(channelId: string) {
  const { data, isLoading, refetch } = useQuery(
    ["channel/channels-filters", channelId],
    () => getChannelsFilters(channelId),
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
