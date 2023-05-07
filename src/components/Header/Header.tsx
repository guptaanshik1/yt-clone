import { Flex, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  getSearchText,
  setSmallScreenVisible,
} from "../../features/searchSlice";
import useGetColorMode from "../../hooks/useGetColorMode";
import useScreenSize from "../../hooks/useScreenSize";
import SearchBar from "../SearchBar";
import SearchSuggestions from "../SearchSuggestions";
import Logo from "./Logo";
import UserHeader from "./UserHeader";

const Header = () => {
  const { isSmallScreen, isMediumScreen } = useScreenSize();
  const { colorMode } = useGetColorMode();
  const dispatch = useAppDispatch();
  const searchQuery = useAppSelector((state) => getSearchText(state));
  const openSuggestions = useAppSelector(
    (state) => state.search.toggleSuggestions
  );
  const { isSmallSearchVisible } = useAppSelector((state) => ({
    isSmallSearchVisible: state.search.isSmallScreenSearchVisible,
  }));

  React.useLayoutEffect(() => {
    dispatch(setSmallScreenVisible(false));
  }, [isMediumScreen, isSmallScreen]);

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
      zIndex={100}
      backgroundColor={colorMode == "dark" ? "rgb(26 32 44)" : "#FFFFFF"}
    >
      {isSmallSearchVisible && (
        <>
          <BsArrowLeft
            size={"22px"}
            cursor={"pointer"}
            style={{
              marginRight: "8px",
            }}
            onClick={() => dispatch(setSmallScreenVisible(false))}
          />
          <SearchBar />
        </>
      )}
      {!isSmallSearchVisible && (
        <>
          <Flex
            ml={"20px"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            flexDir={"row"}
          >
            <Logo />
          </Flex>
          <Flex
            w={"100%"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <SearchBar />
            {searchQuery.length > 0 && openSuggestions && (
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
            {isSmallScreen && <UserHeader />}
          </Flex>
          {!isSmallScreen && (
            <Flex
              justifyContent={"flex-end"}
              ml={isSmallScreen ? "0" : "100px"}
              w={isSmallScreen ? "50%" : "50%"}
            >
              <UserHeader />
            </Flex>
          )}
        </>
      )}
    </SimpleGrid>
  );
};

export default Header;
