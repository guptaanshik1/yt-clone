import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import { useAppSelector } from "../../app/hooks";
import ClosedSidebar from "./ClosedSidebar";
import OpenedSidebarModal from "./OpenedSidebarModal";

const Sidebar = () => {
  const {
    isOpen: isSidebarOpen,
    onClose: onSidebarClose,
    onOpen: onSidebarOpen,
  } = useDisclosure();

  const isSidebarOpened = useAppSelector((state) => state.sidebar.isOpen);
  return (
    <>
      {isSidebarOpened ? (
        <OpenedSidebarModal isOpen={isSidebarOpen} onClose={onSidebarClose} />
      ) : (
        <ClosedSidebar />
      )}
    </>
  );
};

export default Sidebar;
