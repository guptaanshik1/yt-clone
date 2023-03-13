import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Text,
} from "@chakra-ui/react";
import {
  commonIconNameMap,
  moreFromYtIconNameMap,
  sidebarExploreIconsNameMap,
  sidebarIconsNameMap,
} from "../../utils/sidebarIconsNameMap";
import Logo from "../Header/Logo";
import BottomLinks from "./BottomLinks";
import OpenedSidebar from "./OpenedSidebar";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const OpenedSidebarModal = ({ isOpen, onClose }: IProps) => {
  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      placement="left"
      closeOnOverlayClick={false}
    >
      {/* <DrawerOverlay /> */}
      <DrawerContent mt={"60px"}>
        {/* <DrawerHeader display={"flex"} alignItems={"center"}>
          <Logo />
        </DrawerHeader> */}
        <DrawerBody>
          <OpenedSidebar iconNameMap={sidebarIconsNameMap} />
          <>
            <Text fontWeight={500}>Explore</Text>
            <OpenedSidebar iconNameMap={sidebarExploreIconsNameMap} />
          </>
          <>
            <Text fontWeight={500}>More From YouTube</Text>
            <OpenedSidebar iconNameMap={moreFromYtIconNameMap} />
          </>
          <OpenedSidebar iconNameMap={commonIconNameMap} />
          <BottomLinks />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default OpenedSidebarModal;
