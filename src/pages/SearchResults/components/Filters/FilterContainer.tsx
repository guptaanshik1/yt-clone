import { Divider, Flex } from "@chakra-ui/react";
import { filterOptions } from "../../utils/constants";
import { useSearchResultsContext } from "../../utils/context";
import FilterHeaders from "./FilterHeaders";
import FilterOptions from "./FilterOptions";

const FilterContainer = () => {
  const { filterGroups } = useSearchResultsContext();

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

// {Object.entries(filterOptions)?.map(([heading, options]) => {
//   return (
//     <Flex
//       key={heading}
//       w={"100%"}
//       // justifyContent={"space-around"}
//       alignItems={"center"}
//       flexDir={"column"}
//     >
//       <Divider />
//       <FilterHeaders option={heading} />
//       <FilterOptions options={options} />
//     </Flex>
//   );
// })}
