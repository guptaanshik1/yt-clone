import { useMediaQuery } from "@chakra-ui/react";
import React from "react";

const useScreenSize = () => {
  const [isSmallScreen, isMediumScreen, isLargeScreen] = useMediaQuery([
    "(max-width: 600px)",
    "(min-width: 601px) and (max-width: 900px)",
    "(min-width: 901px)",
  ]);
  return { isSmallScreen, isMediumScreen, isLargeScreen };
};

export default useScreenSize;
