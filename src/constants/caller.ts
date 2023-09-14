export const BASE_URL = "";

export type methodType = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export type headersType = {
  "X-RapidAPI-Key": string;
  "X-RapidAPI-Host": string;
};

export const HEADERS: headersType = {
  "X-RapidAPI-Key": "",
  "X-RapidAPI-Host": "",
};
