import { Flex, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { useAppSelector } from "../../app/hooks";
import useScreenSize from "../../hooks/useScreenSize";
import SearchBar from "../SearchBar";
import Logo from "./Logo";

const Header = () => {
  const { isSmallScreen } = useScreenSize();
  const isDarkMode = useAppSelector((state) => state.theme.isDark);

  return (
    <SimpleGrid
      columns={isSmallScreen ? 2 : 3}
      justifyContent={"space-between"}
      backgroundColor={!isDarkMode ? "#FFFFFF" : "#000000"}
      w={"100%"}
      h={"56px"}
      p={"0 16px"}
      alignItems={"center"}
      position={"sticky"}
      top={0}
    >
      <Flex
        justifyContent={"flex-start"}
        alignItems={"center"}
        flexDir={"row"}
        ml={"1em"}
      >
        <Logo />
      </Flex>
      <Flex>
        <SearchBar />
      </Flex>
    </SimpleGrid>
  );
};

export default Header;
