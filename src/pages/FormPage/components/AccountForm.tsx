import { FormLabel, Input } from "@chakra-ui/react";
import React from "react";
import { useFormPageContext } from "../utils/context";
import FormWrapper from "./FormWrapper";

interface IProps {
  email: string;
  password: string;
}

const AccountForm = ({ email, password }: IProps) => {
  const { updateFields } = useFormPageContext();
  return (
    <FormWrapper title={"Account Creation"}>
      <FormLabel>Email</FormLabel>
      <Input
        autoFocus
        required
        type="email"
        value={email}
        placeholder="Email"
      />
      <FormLabel>Password</FormLabel>
      <Input
        required
        type="password"
        autoComplete="off"
        placeholder="Password"
        value={password}
      />
    </FormWrapper>
  );
};

export default AccountForm;
