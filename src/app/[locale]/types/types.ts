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
  type: string;
  placeholder: string;
  name: keyof FormData; // Use keyof FormData for the name property
  register: UseFormRegister<FormData>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
  label?: string;
  required?: boolean;
  icon?: React.ReactNode;
  togglePasswordVisibility?: boolean;
};
