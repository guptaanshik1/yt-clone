import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { CgPlayList } from "react-icons/cg";
import { FaPlay } from "react-icons/fa";

interface IProps {
  playlist: any;
}

const AllPlaylists = ({ playlist }: IProps) => {
  const [showPlayAll, setShowPlayAll] = React.useState(false);
  const handleMouseOver = () => {
    setShowPlayAll(true);
  };

  const handleMouseOut = () => {
    setShowPlayAll(false);
  };

  return (
    <Flex flexDir={"column"}>
      <Flex
        flexWrap={"wrap"}
        w={"24%"}
        gridGap={"30px"}
        cursor={"pointer"}
        position="relative"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <Flex
          w={"100%"}
          h={"140px"}
          border={"1px solid blue"}
          position={"relative"}
        >
          <Image w={"100%"} src={playlist?.playlist?.thumbnails[0]?.url} />
          <Flex
            w={"30%"}
            h={"138px"}
            justifyContent={"center"}
            alignItems={"center"}
            right={0}
            bottom={0}
            position={"absolute"}
            color={"white"}
            bgColor={"blackAlpha.700"}
            flexDir={"column"}
          >
            <Text>{playlist?.playlist?.stats?.videos}</Text>
            <CgPlayList size={"24px"} style={{ marginLeft: "4px" }} />
          </Flex>
        </Flex>
        {showPlayAll && (
          <Flex
            w={"100%"}
            h={"full"}
            position={"absolute"}
            bgColor={"blackAlpha.700"}
            color={"white"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <FaPlay size={"24px"} />
            <Text fontWeight={700} ml={"4px"}>
              Play All
            </Text>
          </Flex>
        )}
      </Flex>
      <Flex flexDir={"column"} mb={"16px"}>
        <Text fontSize={"14px"} fontWeight={600}>
          {playlist?.playlist?.title}
        </Text>
        <Text fontSize={"12px"} color={"#aaaaaa"} fontWeight={700}>
          View full Playlist
        </Text>
      </Flex>
    </Flex>
  );
};

export default AllPlaylists;
