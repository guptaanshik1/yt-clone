import React from "react";
import { useAppSelector } from "../../app/hooks";
import ShortsPlayerView from "./ShortsPlayer.view";
import { ShortsPlayerContext } from "./utils/context";

export default function ShortsPlayerContainer() {
  const shortId = useAppSelector((state) => state.shorts.shortId);

  return (
    <ShortsPlayerContext.Provider
      // @ts-ignore
      value={{
        shortId,
      }}
    >
      <ShortsPlayerView />
    </ShortsPlayerContext.Provider>
  );
}
