import { IconButton, Image, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { toggleSidebar } from "../../features/sidebarSlice";
import useGetColorMode from "../../hooks/useGetColorMode";
import OpenedSidebarModal from "../OpenedSidebarModal";

const Logo = () => {
  const dispatch = useAppDispatch();
  const isOpened = useAppSelector((state) => state.sidebar.isOpen);
  const { isDark } = useGetColorMode();

  const {
    isOpen: isSidebarOpen,
    onClose: onSidebarClose,
    onOpen: onSidebarOpen,
  } = useDisclosure();

  const handleSidebar = () => {
    dispatch(toggleSidebar());
    isOpened ? onSidebarClose() : onSidebarOpen();
  };

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
        onClick={handleSidebar}
        _focus={{ outline: "none" }}
      />
      <Link to="/">
        <Image
          src={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          }
          alt="logo"
          w={"90px"}
          h={"20px"}
          ml={"1em"}
        />
      </Link>
      <OpenedSidebarModal isOpen={isSidebarOpen} onClose={onSidebarClose} />
    </>
  );
};

export default Logo;
