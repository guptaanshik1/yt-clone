import {
  Flex,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { routeConstants } from "../utils/constants";
import { tabsList } from "../utils/tabsList";
import AboutTab from "./AboutTab";
import HomeTab from "./HomeTab";
import LiveTab from "./LiveTab";
import PlaylistsTabs from "./PlaylistsTabs";
import ShortsTab from "./ShortsTab";
import TabChannel from "./TabChannel";
import VideosTab from "./VideosTab";

const ChannelTabs = () => {
  const [currentTabRoute, setCurrentTabRoute] = React.useState(
    routeConstants.Home
  );
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate(routeConstants[currentTabRoute as keyof typeof routeConstants]);
  }, [currentTabRoute]);

  const currentComponent = {
    [routeConstants.Home]: <HomeTab />,
    [routeConstants.Videos]: <VideosTab />,
    [routeConstants.Shorts]: <ShortsTab />,
    [routeConstants.Live]: <LiveTab />,
    [routeConstants.Playlists]: <PlaylistsTabs />,
    [routeConstants.Channels]: <TabChannel />,
    [routeConstants.About]: <AboutTab />,
  };

  const handleTabClick = (tab: string) => {
    const route = routeConstants[tab as keyof typeof routeConstants];
    setCurrentTabRoute(route);
    navigate(`/${route}`);
  };

  return (
    <Flex mt={"20px"}>
      <Tabs w={"100%"} p={"0 20px"}>
        <TabList gap={"10px"}>
          {tabsList?.map((tab) => {
            return (
              <Tab
                key={tab}
                fontSize={"20px"}
                fontWeight={400}
                color={"#606060"}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </Tab>
            );
          })}
        </TabList>
        <TabIndicator bg={"#606060"} />
        <TabPanels>{currentComponent[currentTabRoute]}</TabPanels>
      </Tabs>
    </Flex>
  );
};

export default ChannelTabs;
