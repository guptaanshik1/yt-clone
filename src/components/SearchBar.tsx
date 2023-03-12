import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { TfiSearch } from "react-icons/tfi";
import { MdOutlineMic } from "react-icons/md";
import useGetColorMode from "../hooks/useGetColorMode";

const SearchBar = () => {
  const { isDark } = useGetColorMode();
  const [isFocused, setIsFocused] = React.useState(false);
  console.log("isDark", isDark);
  return (
    <InputGroup w="full">
      {isFocused && (
        <InputLeftElement>
          <TfiSearch size={18} cursor={"pointer"} />
        </InputLeftElement>
      )}
      <Input
        w={"100%"}
        borderLeftRadius={"full"}
        border={"1px solid grey"}
        placeholder={"Search"}
        py={"1em"}
        pl={isFocused ? "2em" : "1em"}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        position={"relative"}
      />
      {/* {searchQuery.length > 0 && (
        <InputRightElement position={"absolute"} mr="78px">
          <MdClose
            size={18}
            cursor={"pointer"}
            onClick={() => setSearchQuery("")}
            color-{isDark ? "#FFFFFF" : "#000000"}
          />
        </InputRightElement>
      )} */}
      <Flex
        borderRightRadius={"full"}
        border={"1px solid grey"}
        w={"64px"}
        h={"40px"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <TfiSearch size={20} cursor={"pointer"} />
      </Flex>
      <Flex ml={"0.8em"} alignItems={"center"} justifyContent={"center"}>
        <MdOutlineMic
          size={"25px"}
          cursor={"pointer"}
          color={isDark ? "#FFFFFF" : "#000000"}
        />
      </Flex>
    </InputGroup>
  );
};

export default SearchBar;
