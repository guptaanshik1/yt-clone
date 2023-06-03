import { Flex, Image, Text } from "@chakra-ui/react";
import { useAppDispatch } from "../../../app/hooks";
import { setShortId } from "../../../features/shortsSlice";
import { limitTitleChars } from "../../../utils/limitTitleChars";

interface IProps {
  short: any;
}

const AllChannelShorts = ({ short }: IProps) => {
  const dispatch = useAppDispatch();

  return (
    <Flex
      h={"400px"}
      w={"200px"}
      mt={"4px"}
      cursor={"pointer"}
      m={"10px 0"}
      onClick={() => {
        dispatch(setShortId(short?.videoId));
      }}
    >
      <Flex borderRadius={"8px"} h={"80%"} w={"100%"} flexDir={"column"}>
        <Image src={short?.thumbnails[0]?.url} borderRadius={"8px"} />
        <Flex flexDir={"column"}>
          <Text fontSize={"14px"} fontWeight={700}>
            {limitTitleChars(short?.title)}
          </Text>
          <Text fontSize={"12px"} fontWeight={400}>
            {short?.stats?.viewsText}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AllChannelShorts;
