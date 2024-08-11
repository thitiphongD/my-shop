import React from "react";
import FormField from "./FormField";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpUserSchema } from "@/app/validation/authValidationSchema";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { MdOutlineMail } from "react-icons/md";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import { signUpService } from "../../services/authFetcher";

interface Props {
  onBack: () => void;
}

type SignUpFormType = z.infer<typeof signUpUserSchema>;

const SignUpForm: React.FC<Props> = ({ onBack }) => {
  const router = useRouter();

  const fetcher = (url: string, data: SignUpFormType) =>
    signUpService(url, data);

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
      await fetcher("/api/auth/signUp", data);
      reset();
      onBack();
    } catch (error) {
      console.log(error);
    }
  });

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
