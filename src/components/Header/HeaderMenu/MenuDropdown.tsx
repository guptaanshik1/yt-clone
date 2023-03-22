import { Divider, Flex, MenuItem, MenuList, Text } from "@chakra-ui/react";
import React, { MouseEventHandler } from "react";
import { BsChevronRight } from "react-icons/bs";
import { useAppDispatch } from "../../../app/hooks";
import { setSelectedMenu } from "../../../features/menuSlice";
import { headerMenuItems, IMenuItem } from "../../../utils/headerMenuItems";
import Icon from "../../IconNames";

interface IProps {
  isShowMenu: boolean;
  step: number;
  setStep: (num: number) => void;
}

const MenuDropdown = ({ isShowMenu, step, setStep }: IProps) => {
  const dispatch = useAppDispatch();
  const [currentItem, setCurrentItem] =
    React.useState<Partial<IMenuItem[]>>(headerMenuItems);

  const handleMenuClick = (item: any): MouseEventHandler<HTMLButtonElement> => {
    return (e: React.MouseEvent<HTMLButtonElement>): void => {
      setCurrentItem(item);
      dispatch(setSelectedMenu(item));
      setStep(2);
    };

    /**
     The handleMenuClick function is a higher-order function because it returns another function. The returned function is a closure because it has access to the item and currentItem variables declared in the outer handleMenuClick function.

In more detail, the returned function is a MouseEventHandler<HTMLButtonElement> function that takes a React.MouseEvent<HTMLButtonElement> event as an argument and returns void. The returned function has access to the item and currentItem variables because they are declared in the outer handleMenuClick function.

By using a closure, we can create a function that has access to variables from its enclosing lexical scope. In this case, the returned function has access to item and currentItem, which allows it to update the currentItem state and log the value of currentItem to the console when the button is clicked.

Overall, this approach is a common pattern in React for creating event handlers that need to access state variables or props from their enclosing component.
     */
  };

  return (
    <>
      <MenuList w={"300px"}>
        {headerMenuItems.map((item) => {
          return (
            <MenuItem onClick={handleMenuClick(item)}>
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
          );
        })}
      </MenuList>
    </>
  );
};

export default MenuDropdown;

{
  /* {headerMenuItems.map((item) => {
        return ( */
}
//     <MenuItem>
//       <Flex
//         justifyContent={"space-between"}
//         alignItems={"center"}
//         p={"2px"}
//         w={"full"}
//       >
//         <Flex
//           justifyContent={"center"}
//           alignItems={"center"}
//           onClick={handleMenuClick}
//         >
//           <Icon iconName={item.iconName} size={"18px"} />
//           <Text ml={"14px"} fontSize={"16px"}>
//             {item.label}
//           </Text>
//         </Flex>
//         {item?.subMenuHeading && <BsChevronRight />}
//       </Flex>
//     </MenuItem>

// </MenuList>
