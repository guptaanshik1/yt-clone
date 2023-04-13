
import React from "react";

export const ChannelChannelsContext = React.createContext(null);

export const useChannelChannelsContext = () => {
  const context = React.useContext(ChannelChannelsContext);
  if (!context)
    throw new Error("useChannelChannelsContext can not be used outside it's provider");
  return context;
};
