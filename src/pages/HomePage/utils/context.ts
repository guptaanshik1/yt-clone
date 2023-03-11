
import React from "react";

export const HomePageContext = React.createContext(null);

export const useHomePageContext = () => {
  const context = React.useContext(HomePageContext);
  if (!context)
    throw new Error("useHomePageContext can not be used outside it's provider");
  return context;
};
