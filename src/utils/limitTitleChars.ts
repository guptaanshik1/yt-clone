import { truncate } from "lodash";

export const limitTitleChars = (title: string): string => {
  return truncate(title, {
    length: 45,
    omission: "...",
  });
};
