import { Flex, Text } from "@chakra-ui/react";
import React from "react";

interface IProps {
  options: {
    filters: string[];
  };
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
      {options?.filters?.map((option) => {
        return (
          <Flex key={option?.filter} p={"10px 0"}>
            <Text
              color={"#5f6060"}
              fontSize={"14px"}
              lineHeight={"16px"}
              cursor={"pointer"}
              fontWeight={option?.selected ? 700 : 400}
            >
              {option?.label}
            </Text>
          </Flex>
        );
      })}
    </Flex>
  );
};

export default FilterOptions;
