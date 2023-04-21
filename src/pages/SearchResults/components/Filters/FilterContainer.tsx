import { Divider, Flex } from "@chakra-ui/react";
import { useSearchResultsContext } from "../../utils/context";
import FilterHeaders from "./FilterHeaders";
import FilterOptions from "./FilterOptions";

const FilterContainer = () => {
  const { filterGroups } = useSearchResultsContext();
  console.log("filterGroups:", filterGroups);
  return (
    <Flex mt={"20px"}>
      {
        // @ts-ignore
        filterGroups?.map((options) => {
          return (
            <Flex
              key={options?.title}
              w={"100%"}
              alignItems={"center"}
              flexDir={"column"}
            >
              <Divider />
              <FilterHeaders option={options?.title?.toUpperCase()} />
              <FilterOptions options={options} />
            </Flex>
          );
        })
      }
    </Flex>
  );
};

export default FilterContainer;
