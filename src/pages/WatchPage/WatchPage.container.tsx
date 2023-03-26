import React from "react";
import WatchPageView from "./WatchPage.view";
import { WatchPageContext } from "./utils/context";

export default function WatchPageContainer() {
  return (
    <WatchPageContext.Provider
      // @ts-ignore
      value={{}}
    >
      <WatchPageView />
    </WatchPageContext.Provider>
  );
}
