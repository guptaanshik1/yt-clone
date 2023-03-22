import { FormLabel, Input } from "@chakra-ui/react";
import React from "react";
import { useFormPageContext } from "../utils/context";
import FormWrapper from "./FormWrapper";

interface IProps {
  firstName: string;
  lastName: string;
}

const UserForm = ({ firstName, lastName }: IProps) => {
  const { updateFields } = useFormPageContext();
  return (
    <FormWrapper title={"User Details"}>
      <FormLabel>First Name</FormLabel>
      <Input
        autoFocus
        required
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => updateFields({ firstName: e.target.value })}
      />
      <FormLabel>Last Name</FormLabel>
      <Input required type="text" placeholder="Last Name" value={lastName} />
    </FormWrapper>
  );
};

export default UserForm;
