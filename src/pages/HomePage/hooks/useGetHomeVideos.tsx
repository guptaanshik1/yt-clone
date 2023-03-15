import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { BASE_URL, HEADERS, headersType } from "../../../constants/caller";

interface IOptions {
  params: Object;
  headers: headersType;
}

const getVideos = async (): Promise<any> => {
  const endpoint = `${BASE_URL}/search/?q=New`;
  const params = { hl: "en", gl: "IN" };
  const options: IOptions = {
    params,
    headers: HEADERS,
  };

  const { data } = await axios.get(endpoint, options);
  return data;
};

export default function useGetHomeVideos() {
  const { data, isLoading, refetch } = useQuery("home/videos", () =>
    getVideos()
  );
  return {
    data,
    isLoading,
    refetch,
  };
}
