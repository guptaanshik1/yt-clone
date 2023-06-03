
import React from "react";

export const ShortsPlayerContext = React.createContext(null);

export const useShortsPlayerContext = () => {
  const context = React.useContext(ShortsPlayerContext);
  if (!context)
    throw new Error("useShortsPlayerContext can not be used outside it's provider");
  return context;
};
