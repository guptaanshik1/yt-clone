import { Flex, SimpleGrid } from "@chakra-ui/react";
import useScreenSize from "../../hooks/useScreenSize";
import SearchBar from "../SearchBar";
import Logo from "./Logo";
import UserHeader from "./UserHeader";

const Header = () => {
  const { isSmallScreen } = useScreenSize();

  return (
    <SimpleGrid
      columns={isSmallScreen ? 2 : 3}
      justifyContent={"space-between"}
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
      <Flex justifyContent={"flex-end"}>
        <UserHeader />
      </Flex>
    </SimpleGrid>
  );
};

export default Header;
