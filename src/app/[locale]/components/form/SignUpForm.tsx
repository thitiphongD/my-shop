import React from "react";
import FormField from "./FormField";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpUserSchema } from "@/app/validation/authValidationSchema";
import { useForm } from "react-hook-form";
import { MdOutlineMail } from "react-icons/md";

import { signUpService } from "../../services/authService";
import { Modal } from "antd";

interface Props {
  onBack: () => void;
}

type SignUpFormType = z.infer<typeof signUpUserSchema>;

const SignUpForm: React.FC<Props> = ({ onBack }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignUpFormType>({
    resolver: zodResolver(signUpUserSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      await signUpService("/api/auth/signUp", data);
      reset();
      SignUpSuccess();
    } catch (error) {
      console.log(error);
    }
  });

  const SignUpSuccess = () => {
    Modal.success({
      content: "Sign up Success!!",
      onOk() {
        onBack();
      },
    });
  };

  return (
    <form className="space-y-3" onSubmit={onSubmit}>
      <div className="grid col-auto">
        <FormField
          type="text"
          placeholder="Email"
          name="email"
          register={register}
          error={errors.email}
          label="Email"
          icon={<MdOutlineMail />}
        />
        <FormField
          type="password"
          placeholder="Password"
          name="password"
          register={register}
          error={errors.password}
          label="Password"
          togglePasswordVisibility={true}
        />

        <FormField
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          register={register}
          error={errors.confirmPassword}
          label="Confirm Password"
          togglePasswordVisibility={true}
        />
      </div>

      <button className="w-full" type="submit">
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm;
