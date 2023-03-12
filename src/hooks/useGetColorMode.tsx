import { useColorMode } from "@chakra-ui/react";
import React from "react";

const useGetColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return { colorMode, isDark, toggleColorMode };
};

export default useGetColorMode;
