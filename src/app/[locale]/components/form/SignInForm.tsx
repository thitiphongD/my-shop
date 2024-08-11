"use client";

import { loginUserSchema } from "@/app/validation/authValidationSchema";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FormField from "./FormField";
import { MdOutlineMail } from "react-icons/md";
import Link from "next/link";

type SignInFormType = z.infer<typeof loginUserSchema>;

const SignInForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormType>({
    resolver: zodResolver(loginUserSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    const email = data.email;
    const password = data.password;
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
      if (result?.error) {
        console.error("error", result?.error);
        return false;
      }
      router.push("/");
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
      </div>
      <div className="flex justify-end text-xs">
        <Link className="text-blue-600" href="/auth/forgot-password">
          Forgot Password?
        </Link>
      </div>
      <button className="w-full auth-btn" type="submit">
        Sign In
      </button>
    </form>
  );
};

export default SignInForm;
