import { Divider, Flex } from "@chakra-ui/react";
import { filterOptions } from "../../utils/constants";
import FilterHeaders from "./FilterHeaders";
import FilterOptions from "./FilterOptions";

const FilterContainer = () => {
  return (
    <Flex mt={"20px"}>
      {Object.entries(filterOptions)?.map(([heading, options]) => {
        return (
          <Flex
            key={heading}
            w={"100%"}
            // justifyContent={"space-around"}
            alignItems={"center"}
            flexDir={"column"}
          >
            <Divider />
            <FilterHeaders option={heading} />
            <FilterOptions options={options} />
          </Flex>
        );
      })}
    </Flex>
  );
};

export default FilterContainer;
