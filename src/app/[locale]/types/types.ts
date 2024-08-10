import { FieldError, UseFormRegister } from "react-hook-form";

export type FormData = {
  email: string;
  password: string;
};

export type InputType = "text" | "email" | "password" | "number";

export type ValidFieldNames = keyof FormData;

export type FormFieldProps = {
  type: InputType;
  placeholder: string;
  name: ValidFieldNames;
  register: UseFormRegister<FormData>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
};
