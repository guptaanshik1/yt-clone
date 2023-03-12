import { IconButton, Image, useColorMode } from "@chakra-ui/react";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import useGetColorMode from "../../hooks/useGetColorMode";

const Logo = () => {
  const { isDark } = useGetColorMode();

  return (
    <>
      <IconButton
        icon={
          <RxHamburgerMenu
            size={"25px"}
            cursor={"pointer"}
            color={isDark ? "#FFFFFF" : "#000000"}
          />
        }
        aria-label={"Open drawer"}
        background={"transparent"}
        _hover={{
          backgroundColor: "lightgrey",
          cursor: "pointer",
          rounded: "full",
        }}
        _focus={{ outline: "none" }}
      />
      <Image
        src={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
        }
        alt="logo"
        w={"90px"}
        h={"20px"}
        ml={"1em"}
      />
    </>
  );
};

export default Logo;
