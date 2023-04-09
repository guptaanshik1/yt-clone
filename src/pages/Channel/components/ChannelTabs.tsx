import {
  Flex,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  Tabs,
} from "@chakra-ui/react";
import React from "react";
import { tabsList } from "../utils/tabsList";

const ChannelTabs = () => {
  return (
    <Flex mt={"20px"}>
      <Tabs w={"100%"} p={"0 20px"}>
        <TabList gap={"10px"}>
          {tabsList?.map((tab) => {
            return (
              <Tab
                fontSize={"20px"}
                fontWeight={400}
                color={"#606060"}
                key={tab}
              >
                {tab}
              </Tab>
            );
          })}
        </TabList>
        <TabIndicator bg={"#606060"} />
      </Tabs>
    </Flex>
  );
};

export default ChannelTabs;
