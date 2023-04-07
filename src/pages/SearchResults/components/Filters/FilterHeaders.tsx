import { Flex, Text } from "@chakra-ui/react";
import React from "react";

interface IProps {
  option: string;
}

const FilterHeaders = ({ option }: IProps) => {
  return (
    <Flex
      p={"4px"}
      ml={"10px"}
      gap={"40px"}
      justifyContent={"flex-start"}
      alignItems={"center"}
      w={"100%"}
    >
      <Text fontWeight={700} fontSize={"12px"}>
        {option}
      </Text>
    </Flex>
  );
};

export default FilterHeaders;
