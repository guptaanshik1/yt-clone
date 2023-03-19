import { Flex, IconButton, Menu, MenuButton, Text } from "@chakra-ui/react";
import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { RxDotsVertical } from "react-icons/rx";
import useGetColorMode from "../../hooks/useGetColorMode";
import MenuDropdown from "./MenuDropdown";

const UserHeader = () => {
  const { isDark } = useGetColorMode();
  const [isShowMenu, setIsShowMenu] = React.useState(false);
  return (
    <Flex justifyContent={"center"} alignContent={"center"}>
      <Flex
        justifyContent={"center"}
        alignContent={"center"}
        textAlign={"center"}
        m={"0.4em 2em"}
        cursor={"pointer"}
      >
        <Menu>
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
          >
            <RxDotsVertical size={"20px"} />
          </MenuButton>
          <MenuDropdown isShowMenu={isShowMenu} />
        </Menu>
      </Flex>
      <Flex
        border={"1px solid lightgray"}
        w={"120px"}
        m={"4px"}
        h={"35px"}
        p={"0 0.4em"}
        borderRadius={"50px"}
        justifyContent={"space-around"}
        alignItems={"center"}
        alignSelf={"center"}
        cursor={"pointer"}
      >
        <FaRegUserCircle size={"20px"} color={"blue"} />
        <Text color={"blue"} fontSize={"14px"}>
          Sign In
        </Text>
      </Flex>
    </Flex>
  );
};

export default UserHeader;
