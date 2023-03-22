export interface IValues {
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  password: string;
}

export const initialValues: IValues = {
  firstName: "",
  lastName: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
};
