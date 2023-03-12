import { useMediaQuery } from "@chakra-ui/react";
import React from "react";

const useScreenSize = () => {
  const [isSmallScreen, isMediumScreen, isLargeScreen] = useMediaQuery([
    "(max-width: 719px)",
    "(min-width: 720px) and (max-width: 798px)",
    "(min-width: 799px)",
  ]);
  return { isSmallScreen, isMediumScreen, isLargeScreen };
};

export default useScreenSize;
