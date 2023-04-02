import axios from "axios";
import { useQuery } from "react-query";
import { BASE_URL, HEADERS, headersType } from "../../../constants/caller";

interface IOptions {
  params: object;
  headers: headersType;
}

const getComments = async (id: string): Promise<any> => {
  const endpoint = `${BASE_URL}/video/comments/`;
  const params = { id, hl: "en", gl: "US" };
  const headers = HEADERS;
  const options: IOptions = {
    params,
    headers,
  };
  const { data } = await axios.get(endpoint, options);
  return data;
};

export default function useGetComments(id: string) {
  const { data, isLoading } = useQuery(
    "video/related-content",
    () => getComments(id),
    {
      onError(err) {
        console.log(err);
      },
    }
  );

  return { data, isLoading };
}

/**
import axios from "axios";
import { useQuery } from "react-query";
import { BASE_URL, HEADERS, headersType } from "../../../constants/caller";

interface IOptions {
  params: object;
  headers: headersType;
}

const getComments = async (id: string, cursorReplies?: string): Promise<any> => {
  const endpoint = `${BASE_URL}/video/comments/`;
  const params = { id, hl: "en", gl: "US", cursorReplies };
  const headers = HEADERS;
  const options: IOptions = {
    params,
    headers,
  };
  const { data } = await axios.get(endpoint, options);
  return data;
};

export default function useGetComments(id: string, cursorReplies?: string) {
  const { data, isLoading } = useQuery(
    ["video/related-content", id, cursorReplies],
    () => getComments(id, cursorReplies),
    {
      onError(err) {
        console.log(err);
      },
    }
  );

  return { data, isLoading };
}
 */
