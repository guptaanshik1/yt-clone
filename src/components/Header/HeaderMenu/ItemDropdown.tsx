import { Divider, Flex, Heading, MenuList, Text } from "@chakra-ui/react";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useAppSelector } from "../../../app/hooks";

interface IProps {
  step: number;
  setStep: (num: number) => void;
}

const ItemDropdown = ({ step, setStep }: IProps) => {
  const selectedMenu = useAppSelector((state) => state.menu.selectedMenu);

  return (
    <MenuList w={"300px"}>
      <Flex mb={".8em"} alignItems={"flex-start"} m={"0 0.4em"}>
        <BsArrowLeft size={"20px"} />
        <Heading ml={"1em"} size={"md"}>
          {selectedMenu.subMenuHeading}
        </Heading>
      </Flex>
      <Divider />
      {selectedMenu?.subMenuItems?.map((item) => (
        <Text key={item.label}>{item.label}</Text>
      ))}
    </MenuList>
  );
};

export default ItemDropdown;
