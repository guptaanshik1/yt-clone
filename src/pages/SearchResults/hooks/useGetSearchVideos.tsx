import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { BASE_URL, HEADERS, headersType } from "../../../constants/caller";

interface IOptions {
  params: Object;
  headers: headersType;
}

const getVideos = async (q: string): Promise<any> => {
  const endpoint = `${BASE_URL}/search`;
  const params = { q, hl: "en", gl: "IN" };
  const options: IOptions = {
    params,
    headers: HEADERS,
  };

  const { data } = await axios.get(endpoint, options);
  return data;
};

export default function useGetSearchVideos(q: string) {
  const { data, isLoading, refetch } = useQuery(
    "search/videos",
    () => getVideos(q),
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
