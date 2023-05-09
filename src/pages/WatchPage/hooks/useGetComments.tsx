import axios from "axios";
import { useQuery } from "react-query";
import { BASE_URL, HEADERS, headersType } from "../../../constants/caller";

interface IOptions {
  params: object;
  headers: headersType;
}

// const getRepliesForComments = async (id: string, cursorReplies: string) => {
//   const endpoint = `${BASE_URL}/video/comments/`;
//   const params = { id, cursor: cursorReplies, hl: "en", gl: "US" };
//   const headers = HEADERS;
//   const options: IOptions = {
//     params,
//     headers,
//   };

//   // await new Promise((resolve) => setTimeout(resolve, 60000));
//   const { data } = await axios.get(endpoint, options);
//   return data;
// };

// const getComments = async (id: string): Promise<any> => {
//   const endpoint = `${BASE_URL}/video/comments/`;
//   const params = { id, hl: "en", gl: "US" };
//   const headers = HEADERS;
//   const options: IOptions = {
//     params,
//     headers,
//   };
//   const { data: comments } = await axios.get(endpoint, options);

//   const commentsArr = comments?.comments;
//   const promises = [];
//   for (let comment of commentsArr) {
//     if (comment?.hasOwnProperty("cursorReplies")) {
//       const cursorReplies = comment?.cursorReplies;
//       promises.push(getRepliesForComments(id, cursorReplies));
//     }
//   }
//   const repliesForComment = await Promise.all(promises);

//   return { ...comments, replies: { ...repliesForComment } };
// };

// export default function useGetComments(id: string) {
//   const { data, isLoading } = useQuery(
//     "video/comments",
//     () => getComments(id),
//     {
//       onError(err) {
//         console.log(err);
//       },
//     }
//   );

//   return { data, isLoading };
// }

const getComments = async (
  id: string,
  cursorReplies?: string
): Promise<any> => {
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
