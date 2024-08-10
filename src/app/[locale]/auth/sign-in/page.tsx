"use client";

import { loginUserSchema } from "@/app/validation/authValidationSchema";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FormField from "../../components/form/FormField";
type SignInForm = z.infer<typeof loginUserSchema>;

const SignInPage = () => {
  const router = useRouter();

  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInForm>({
    resolver: zodResolver(loginUserSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    // const email = data.email;
    // const password = data.password;
    // try {
    //   setIsSubmit(true);
    //   const result = await signIn("credentials", {
    //     redirect: false,
    //     email,
    //     password,
    //   });
    //   if (result?.error) {
    //     console.error("error", result?.error);
    //     setIsSubmit(false);
    //     return false;
    //   }
    //   router.push("/profile");
    // } catch (error) {
    //   setIsSubmit(false);
    // }
  });

  return (
    <div className="flex justify-center">
      <form className="space-y-3" onSubmit={onSubmit}>
        <FormField
          type="email"
          placeholder="Email"
          name="email"
          register={register}
          error={errors.email}
        />
        <FormField
          type="password"
          placeholder="Password"
          name="password"
          register={register}
          error={errors.password}
        />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignInPage;
