import { Divider, Flex, MenuItem, MenuList, Text } from "@chakra-ui/react";
import React from "react";
import { BsChevronRight } from "react-icons/bs";
import { headerMenuItems } from "../../utils/headerMenuItems";
import Icon from "../IconNames";

interface IProps {
  isShowMenu: boolean;
}

const MenuDropdown = ({ isShowMenu }: IProps) => {
  const [activeIndex, setActiveIndex] = React.useState(-1);
  // if (!isShowMenu) return null;
  return (
    <>
      <MenuList w={"300px"}>
        {headerMenuItems.map((item) => (
          <MenuItem>
            <Flex
              justifyContent={"space-between"}
              alignItems={"center"}
              p={"2px"}
              w={"full"}
            >
              <Flex justifyContent={"center"} alignItems={"center"}>
                <Icon iconName={item.iconName} size={"18px"} />
                <Text ml={"14px"} fontSize={"16px"}>
                  {item.label}
                </Text>
              </Flex>
              {item?.subMenuHeading && <BsChevronRight />}
            </Flex>
          </MenuItem>
        ))}
      </MenuList>
    </>
  );
};

export default MenuDropdown;
