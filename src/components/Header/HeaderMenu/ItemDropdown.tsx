import {
  Divider,
  Flex,
  Heading,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React, { MouseEventHandler } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { IoCheckmark } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { setCurrentlySelectedItem } from "../../../features/menuSlice";
import useGetColorMode from "../../../hooks/useGetColorMode";

interface IProps {
  step: number;
  setStep: (num: number) => void;
}

const ItemDropdown = ({ step, setStep }: IProps) => {
  const { toggleColorMode } = useGetColorMode();
  const dispatch = useAppDispatch();
  const selectedMenu = useAppSelector((state) => state.menu.selectedMenu);
  const currentlySelectedItem = useAppSelector(
    (state) => state.menu.currentlySelected
  );

  const handleItemSelection = (
    item: any
  ): MouseEventHandler<HTMLButtonElement> => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      dispatch(
        setCurrentlySelectedItem({
          [selectedMenu.label]: item.label,
        })
      );
      if (
        selectedMenu.label == "Appearance" &&
        currentlySelectedItem.Appearance != item.label
      ) {
        toggleColorMode();
      }
      setStep(1);
    };
    return handleClick;
  };

  return (
    <MenuList w={"300px"} maxH={"90vh"} overflowY={"scroll"}>
      <Flex mb={"1em"} alignItems={"flex-start"} mx={"0.4em"}>
        <BsArrowLeft size={"20px"} onClick={() => setStep(1)} />
        <Heading ml={"1em"} size={"md"}>
          {selectedMenu.subMenuHeading}
        </Heading>
      </Flex>
      <Divider />
      {selectedMenu?.subMenuItems?.map((item) => (
        <MenuItem onClick={handleItemSelection(item)}>
          <Flex
            key={item?.label}
            alignItems={"center"}
            justifyContent={"flex-start"}
            fontWeight={500}
            p={"4px 8px"}
            m={"4px 5px"}
          >
            <Flex w={"20px"}>
              {currentlySelectedItem[
                selectedMenu.label as keyof typeof currentlySelectedItem
              ] == item.label && <IoCheckmark size={"24px"} />}
            </Flex>
            <Text ml={"8px"} fontSize={"18px"} fontWeight={300}>
              {item?.label}
            </Text>
          </Flex>
        </MenuItem>
      ))}
    </MenuList>
  );
};

export default ItemDropdown;
