import React from "react";
import { useAppSelector } from "../../app/hooks";
import useGetColorMode from "../../hooks/useGetColorMode";
import ShortsPlayerView from "./ShortsPlayer.view";
import { ShortsPlayerContext } from "./utils/context";

export default function ShortsPlayerContainer() {
  const shortId = useAppSelector((state) => state.shorts.shortId);
  const { isDark } = useGetColorMode();

  const [showComments, setShowComments] = React.useState(false);

  return (
    <ShortsPlayerContext.Provider
      // @ts-ignore
      value={{
        shortId,
        isDark,
        showComments,
        setShowComments,
      }}
    >
      <ShortsPlayerView />
    </ShortsPlayerContext.Provider>
  );
}
