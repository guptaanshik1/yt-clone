import { Flex, Text } from "@chakra-ui/react";
import React from "react";

interface IProps {
  options: string[];
}

const FilterOptions = ({ options }: IProps) => {
  return (
    <Flex
      p={"4px"}
      mt={"28px"}
      ml={"10px"}
      justifyContent={"flex-start"}
      alignItems={"flex-start"}
      w={"100%"}
      flexDir={"column"}
    >
      {options?.map((option) => {
        return (
          <Flex key={option} p={"10px 0"}>
            <Text
              color={"#5f6060"}
              fontSize={"14px"}
              lineHeight={"16px"}
              cursor={"pointer"}
            >
              {option}
            </Text>
          </Flex>
        );
      })}
    </Flex>
  );
};

export default FilterOptions;
