import { Flex, SimpleGrid } from "@chakra-ui/react";
import { useAppSelector } from "../../app/hooks";
import { getSearchText } from "../../features/searchSlice";
import useScreenSize from "../../hooks/useScreenSize";
import SearchBar from "../SearchBar";
import SearchSuggestions from "../SearchSuggestions";
import Logo from "./Logo";
import UserHeader from "./UserHeader";

const Header = () => {
  const { isSmallScreen } = useScreenSize();
  const searchQuery = useAppSelector((state) => getSearchText(state));
  console.log("searchQuery:", searchQuery);

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
        {searchQuery.length > 0 && (
          <Flex
            mt={"50px"}
            position={"absolute"}
            width={"30%"}
            h={"100px"}
            backgroundColor={"#000000"}
            borderRadius={"12px"}
          >
            <SearchSuggestions />
          </Flex>
        )}
      </Flex>
      <Flex justifyContent={"flex-end"}>
        <UserHeader />
      </Flex>
    </SimpleGrid>
  );
};

export default Header;
