import { truncate } from "lodash";

export const limitTitleChars = (title: string): string => {
  return truncate(title, {
    length: 45,
    omission: "...",
  });
};

export const limitDescriptionChars = (title: string): string => {
  return truncate(title, {
    length: 80,
    omission: "...",
  });
};

export const limitChars = (keyword: string): string => {
  return truncate(keyword, {
    length: 50,
    omission: "....",
  });
};
