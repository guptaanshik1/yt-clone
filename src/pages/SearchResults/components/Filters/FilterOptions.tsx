import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useSearchResultsContext } from "../../utils/context";

interface IProps {
  options: {
    filters: string[];
  };
}

const FilterOptions = ({ options }: IProps) => {
  const { refetchSearchResults } = useSearchResultsContext();
  const [selectedFilter, setSelectedFilter] = React.useState("");

  const handleFilterClick = (label: string) => {
    setSelectedFilter(label);
    // @ts-ignore
    // refetchSearchResults({ cursor: selectedFilter });
  };

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
          <Flex
            key={option?.label}
            p={"10px 0"}
            onClick={() => handleFilterClick(option?.label)}
          >
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
