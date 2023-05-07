import {
  Flex,
  IconButton,
  Menu,
  MenuButton,
  Text,
  Box,
  ResponsiveValue,
} from "@chakra-ui/react";
import { FaRegUserCircle } from "react-icons/fa";
import { RxDotsVertical } from "react-icons/rx";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { toggleMenu } from "../../features/menuSlice";
import useScreenSize from "../../hooks/useScreenSize";
import MenuWrapper from "./HeaderMenu/MenuWrapper";

const UserHeader = () => {
  const { isSmallScreen, isMediumScreen, isLargeScreen } = useScreenSize();
  const dispatch = useAppDispatch();
  const isMenuOpen = useAppSelector((state) => state.menu.isMenuOpen);

  const decideWidth = (): ResponsiveValue<number | (string & {})> => {
    if (isSmallScreen) {
      return "100px";
    } else if (isMediumScreen && !isLargeScreen) {
      return "350px";
    } else {
      return "100px";
    }
  };

  return (
    <Flex alignContent={"center"} w={"100%"}>
      <Flex
        justifyContent={"space-around"}
        alignContent={"center"}
        textAlign={"center"}
        cursor={"pointer"}
      >
        <Menu isOpen={isMenuOpen}>
          <MenuButton
            as={IconButton}
            background="none"
            px={2}
            _focus={{}}
            _hover={{ background: "grey", rounded: true, borderRadius: "full" }}
            _active={{
              background: "grey",
              rounded: true,
              borderRadius: "full",
            }}
            onClick={() => dispatch(toggleMenu())}
          >
            <RxDotsVertical size={"20px"} />
          </MenuButton>
          <MenuWrapper />
        </Menu>
      </Flex>
      <Flex
        border={"1px solid lightgray"}
        m={"4px"}
        h={"35px"}
        p={"0 0.8em"}
        borderRadius={"50px"}
        justifyContent={isSmallScreen ? "flex-start" : "space-around"}
        alignItems={"center"}
        alignSelf={"center"}
        cursor={"pointer"}
        w={decideWidth()}
      >
        <Box>
          <FaRegUserCircle size={"20px"} color={"blue"} />
        </Box>
        <Text color={"blue"} fontSize={"14px"} whiteSpace="nowrap" ml={"4px"}>
          Sign In
        </Text>
      </Flex>
    </Flex>
  );
};

export default UserHeader;
