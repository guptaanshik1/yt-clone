import { Flex, SimpleGrid } from "@chakra-ui/react";
import { useAppSelector } from "../../app/hooks";
import { getSearchText } from "../../features/searchSlice";
import useGetColorMode from "../../hooks/useGetColorMode";
import useScreenSize from "../../hooks/useScreenSize";
import SearchBar from "../SearchBar";
import SearchSuggestions from "../SearchSuggestions";
import Logo from "./Logo";
import UserHeader from "./UserHeader";

const Header = () => {
  const { isSmallScreen } = useScreenSize();
  const {colorMode} = useGetColorMode()
  const searchQuery = useAppSelector((state) => getSearchText(state));

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
      backgroundColor={colorMode == "dark" ? "rgb(26 32 44)" : "#FFFFFF"}
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
            h={"auto"}
            backgroundColor={"#FFFFFF"}
            borderRadius={"12px"}
            boxShadow={"0px 0px 4px rgba(0, 0, 0, 0.35)"}
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
