import React from "react";
import AccountForm from "./components/AccountForm";
import AddressForm from "./components/AddressForm";
import UserForm from "./components/userForm";
import FormPageView from "./FormPage.view";
import { useMultiStepForm } from "./hooks/useMultiStepForm";
import { FormPageContext } from "./utils/context";
import { initialValues, IValues } from "./utils/initialValues";

export default function FormPageContainer() {
  const [values, setValues] = React.useState(initialValues);
  const updateFields = (fields: Partial<IValues>): void => {
    setValues((prev) => {
      return { ...prev, ...fields };
    });
  };

  const { steps, currentStepIndex, step, back, nextStep } = useMultiStepForm([
    <UserForm {...values} />,
    <AddressForm {...values} />,
    <AccountForm {...values} />,
  ]);

  return (
    <FormPageContext.Provider
      // @ts-ignore
      value={{ steps, currentStepIndex, step, back, nextStep, updateFields }}
    >
      <FormPageView />
    </FormPageContext.Provider>
  );
}
