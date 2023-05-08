import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import EventBus from "../../../../utils/EventBus";
import { useSearchResultsContext } from "../../utils/context";

interface IProps {
  options: {
    filters: [
      {
        label: string;
        selected: boolean;
        cursorSelect: string;
      }
    ];
  };
}

const FilterOptions = ({ options }: IProps) => {
  const {
    searchQuery,
    refetchFilteredData,
    selectedOption,
    setSelectedOption,
  } = useSearchResultsContext();

  const [selectedFilter, setSelectedFilter] = React.useState("");

  const handleFilterClick = async (option: {
    label: string;
    cursorSelect: string;
  }) => {
    // @ts-ignore
    setSelectedFilter(option?.label);
    // @ts-ignore
    setSelectedOption(option);
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
        console.log(option?.selected);
        return (
          <Flex
            key={option?.label}
            p={"10px 0"}
            onClick={() => handleFilterClick(option)}
          >
            <Text
              color={"#5f6060"}
              fontSize={"14px"}
              lineHeight={"16px"}
              cursor={"pointer"}
              fontWeight={400}
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
