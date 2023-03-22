import { FormLabel, Input } from "@chakra-ui/react";
import React from "react";
import { useFormPageContext } from "../utils/context";
import FormWrapper from "./FormWrapper";

interface IProps {
  street: string;
  city: string;
  state: string;
  zip: string;
}

const AddressForm = ({ street, city, state, zip }: IProps) => {
  const { updateFields } = useFormPageContext();
  return (
    <FormWrapper title={"Address"}>
      <FormLabel>Street</FormLabel>
      <Input type="text" value={street} autoFocus required />
      <FormLabel>City</FormLabel>
      <Input type="text" value={city} required />
      <FormLabel>State</FormLabel>
      <Input type="text" value={state} required />
      <FormLabel>Zip</FormLabel>
      <Input type="text" value={zip} required />
    </FormWrapper>
  );
};

export default AddressForm;
