import { ReactNode } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

export type FormData = {
  email: string;
  password: string;
  confirmPassword?: string;
};

export type InputType = "text" | "email" | "password" | "number";

export type ValidFieldNames = keyof FormData;

export type FormFieldProps = {
  type: InputType;
  placeholder: string;
  name: keyof FormData;
  register: UseFormRegister<any>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
  label?: string;
  required?: boolean;
  icon?: ReactNode;
  togglePasswordVisibility?: boolean;
};
