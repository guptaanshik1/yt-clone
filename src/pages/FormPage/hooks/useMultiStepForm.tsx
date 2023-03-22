import React, { ReactElement } from "react";

export function useMultiStepForm(steps: ReactElement[]) {
  const [currentStepIndex, setCurrentStepIndex] = React.useState(0);

  const nextStep = () => {
    setCurrentStepIndex((currentStep) => {
      if (currentStep == steps.length - 1) return currentStep;
      return currentStep + 1;
    });
  };

  const back = () => {
    setCurrentStepIndex((currentStep) => {
      if (currentStep <= 0) return currentStep;
      return currentStep - 1;
    });
  };

  const goto = (index: number) => {
    setCurrentStepIndex(index);
  };

  return {
    step: steps[currentStepIndex],
    steps,
    currentStepIndex,
    nextStep,
    back,
    goto,
  };
}
