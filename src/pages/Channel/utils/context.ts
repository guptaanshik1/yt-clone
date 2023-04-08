
import React from "react";

export const ChannelContext = React.createContext(null);

export const useChannelContext = () => {
  const context = React.useContext(ChannelContext);
  if (!context)
    throw new Error("useChannelContext can not be used outside it's provider");
  return context;
};
