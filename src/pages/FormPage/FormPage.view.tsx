import { Button, FormControl, Heading } from "@chakra-ui/react";
import React, { FormEvent } from "react";
import { useFormPageContext } from "./utils/context";

export default function FormPageView() {
  const { steps, currentStepIndex, step, back, nextStep } =
    useFormPageContext();
  const isLastStep = currentStepIndex == steps.length - 1;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <FormControl
      onSubmit={handleSubmit}
      w={"50%"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Heading>
        {currentStepIndex + 1} / {steps.length}
      </Heading>
      <Heading>{step}</Heading>

      {currentStepIndex != 0 && <Button onClick={back}>Back</Button>}
      <Button type={"submit"}>{isLastStep ? "Finish" : "Next"}</Button>
    </FormControl>
  );
}
