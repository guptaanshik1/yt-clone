
import React from "react";

export const WatchPageContext = React.createContext(null);

export const useWatchPageContext = () => {
  const context = React.useContext(WatchPageContext);
  if (!context)
    throw new Error("useWatchPageContext can not be used outside it's provider");
  return context;
};
