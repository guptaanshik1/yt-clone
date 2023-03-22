import { Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";

interface IProps {
  title: string;
  children: React.ReactNode;
}

const FormWrapper = ({ title, children }: IProps) => {
  return (
    <>
      <Heading size={"2xl"} textAlign={"center"} mb={"2em"}>
        {title}
      </Heading>
      <SimpleGrid
        gap={"1rem .5rem"}
        justifyContent={"flex-start"}
        gridTemplateColumns={"auto minmax(auto, 400px)"}
      >
        {children}
      </SimpleGrid>
    </>
  );
};

export default FormWrapper;
